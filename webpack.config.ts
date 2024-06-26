import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import dotenv from 'dotenv';
dotenv.config();

type Mode = 'production' | 'development';
interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: {
        fs: false,
        os: false,
        path: false,
        crypto: false,
      },
    },
    devServer: {
      port: env.port ?? 5000,
      open: true,
      hot: false,
      historyApiFallback: true,
    },
  };
  return config;
};
