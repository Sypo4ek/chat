import path from 'path';
import dotenv from 'dotenv'
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (mode: string) => {
const envFile = path.resolve(__dirname, '../.env');
const envVars = dotenv.config({ path: envFile }).parsed || {};
const entry = ['./src/index.tsx']
const plugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(envVars),
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
]

return {
  entry,
  plugins,
  devtool: 'source-map',
  output: {
    clean: true,
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: 'chunk.bundle.[chunkhash].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        corejsVendor: {
          test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          name: 'vendor-corejs',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}
}