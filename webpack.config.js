const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.ts',
    home: './src/paxinas.typescript/home/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: './javascript/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpia la carpeta "dist" antes de cada build
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/home.html',
      template: './src/views/home.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/app.html',
      template: './src/views/app.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/no-user.html',
      template: './src/views/no-user.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/logueo.html',
      template: './src/views/logueo.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/axustes.html',
      template: './src/views/axustes.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/cesta.html',
      template: './src/views/cesta.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/clientes.html',
      template: './src/views/clientes.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/customers.html',
      template: './src/views/customers.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/graficas.html',
      template: './src/views/graficas.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/invoices.html',
      template: './src/views/invoices.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/productos.html',
      template: './src/views/productos.html',
    }),
    new HtmlWebpackPlugin({
      filename: './views/new_product.html',
      template: './src/views/new_product.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/imaxenes', to: 'imaxenes' }],
    }),
  ],
};
