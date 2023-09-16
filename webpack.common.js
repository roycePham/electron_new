const path = require('path');

// ************************** Xử lý JS
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};


// ************************** Xử lý ts
// module.exports = {
//   mode: 'development',
//   entry: './src/js/index.ts', // Thay đổi đường dẫn và mở rộng thành .ts
//   devtool: 'inline-source-map',
//   target: 'electron-renderer',
//   module: {
//     rules: [
//       {
//         test: /\.ts$/, // Thêm quy tắc để xử lý tệp .ts
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader' // Sử dụng ts-loader để biên dịch TypeScript
//         }
//       },
//       // ... Các quy tắc khác
//     ]
//   },
//   resolve: {
//     extensions: ['.ts', '.js'], // Thêm đuôi .ts vào danh sách đuôi tệp được phép
//   },
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'build', 'js'),
//   },
// };


// ************************** xử lý cả Js và Ts 
// module.exports = {
//   mode: 'development',
//   entry: './src/js/index.js', // Giữ nguyên entry point là index.js
//   devtool: 'inline-source-map',
//   target: 'electron-renderer',
//   module: {
//     rules: [
//       {
//         test: /\.(js|ts)$/, // Cập nhật quy tắc để xử lý cả .js và .ts
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader', // Sử dụng ts-loader để biên dịch TypeScript
//         },
//       },
//       // ... Các quy tắc khác
//     ]
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js'], // Thêm đuôi .ts vào danh sách đuôi tệp được phép
//   },
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'build', 'js'),
//   },
// };