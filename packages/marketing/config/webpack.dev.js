const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("../package.json");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing", // mapped in host app
      filename: "remoteEntry.js", // entry filer name(used in host app)
      exposes: {
        "./MarketingApp": "./src/bootstrap", // load against remoteEntry.js
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
