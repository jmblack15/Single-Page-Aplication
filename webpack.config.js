//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path');
//Archivo necesario para trabajar con HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin');
//archivo necesario para trabajar con css
const CopyWebpackPlugin = require('copy-webpack-plugin');


//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports = {
  //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
  entry: './src/index.js',
  //Donde se envía el proyecto estructurado y compilado listo para producción.
  output: {
    //Creamos el lugar dónde se exportará el proyecto.
    path: path.resolve(__dirname, 'dist'),
    //Este es el nombre del archivo final para producción.
    filename: 'main.js'
  },
  //configurar extensiones que se utilizaran en el proyecto
  resolve: {
    //areglo de extensiones que se utilizaran
    extensions: ['.js'],
  },
  //Se crea un modulo con las reglas necesarias que vamos a utilizar.
  module: {
    //Reglas
    rules: [
      // Estructura de Babel
      {
        //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        test: /\.js?$/,
        //Excluimos la carpeta de node modules
        exclude: /node_modules/,
        //Utilizar un loader como configuración establecida.
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  },
  //establecer plugins que se utilizaran
  plugins: [
    //Permite trabajar con los archivos HTML
    new HtmlWebpackPlugin(
      {
        //Cómo vamos a inyectar un valor a un archivo HTML.
        inject: true,
        //Dirección donde se encuentra el template principal
        template: './public/index.html',
        //El nombre que tendrá el archivo
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: '',
      }]
    })
  ]
}