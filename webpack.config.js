const path = require('path');

module.exports = {
  entry: './src/index.js', // Tu archivo de entrada
  output: {
    filename: 'bundle.js', // El archivo de salida
    path: path.resolve(__dirname, 'dist'), // La carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Archivos que terminan en .js
        exclude: /node_modules/, // Excluye node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Usamos el preset-env de Babel
          },
        },
      },
    ],
  },
  mode: 'development', // Puedes cambiar a 'production' para optimización
};
