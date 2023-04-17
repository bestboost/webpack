const path = require('path');

module.exports = {
     mode: 'development',
     entry: './src/index.js',
     output: {
          path: path.resolve(__dirname, 'build'),
          filename: 'my-bundle.js',
     },
     devServer: {
          port: 4444,
          open: true, 
          client: {
               logging: 'error',
             },
     },
     stats: 'errors-only',
};  