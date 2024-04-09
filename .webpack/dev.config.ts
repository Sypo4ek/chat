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
    devServer:{
      open: true,
      hot: true
    }
  }