import common from './common.config';
import CompressionPlugin from 'compression-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config = common('production') 

export default {
  ...config,
  plugins: [
    ...config.plugins,
    new CompressionPlugin({
      test: /\.[tj]s(\?.*)?$/i,
    }),
    new CleanWebpackPlugin(),
  ]
}
