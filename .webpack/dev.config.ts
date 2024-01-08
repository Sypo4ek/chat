import common from './common.config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config = common('development') 

export default {
    ...config,
    output: {
      ...config.output,
      publicPath: '/',
    },
    plugins: [
      ...config.plugins,
      new ReactRefreshWebpackPlugin()
    ],
    devServer: {
      host: '0.0.0.0',
      port: 8081,
      open: true,
      hot: true,
      historyApiFallback: true,
      // proxy: {
      //   ...['/api', '/socket.io', '/static'].reduce((obj, key) => ({
      //     ...obj,
      //     [key]: `https://${process.env.HOST}`
      //   }), {}),
      //   secure: true,
      //   changeOrigin: true
      // }
    }
  }