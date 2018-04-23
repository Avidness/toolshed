const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        context: __dirname,
        entry: "./app.js",
        output: {
            path: path.resolve(__dirname, '../', 'wwwroot/dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        watch: true,
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['babel-preset-env', 'babel-preset-react']
                }
              },
              exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      importLoaders: 1,
                      sourceMap: true,
                      localIdentName: '[path]--[name]-[local]--[hash:base64:5]',
                    },
                  }],
              }),
            },
          ]
        }
    }]
};