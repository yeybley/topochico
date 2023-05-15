//Crear constantes para solicitar uso de los paquetes express, mysql y body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//crear una constante que almacene en app las funciones de express
const app = express();

//llamar a la función use para poder capturar los datos del loggin
app.use(bodyParser.urlencoded({ extended: true }));

// se crea la variable connection para establecer la conexión con la BD
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'topochico'
});

//Llama a la función connect para establecer la conexión a la BD, si todo está Ok dará como respuesta "Conectado a la base de datos"
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos!');
});

// establece la ruta a seguir para mostrar la plantilla registro, que contiene el login
app.get('/', (req, res) => {
  res.render('registro.ejs');
});

//Se llama al método post para pasar a la BD los datos a capturar: nombre y correo
app.post('/registro', (req, res) => {
  const { nombre, correo  } = req.body;
  const usuario = { nombre, correo};

  //se realiza una consulta a la BD y se da la instrucción INSERT para guardar los datos requeridos en los campos de la tabla usarios (nombre, correo)
  connection.query('INSERT INTO usuarios SET ?', usuario, (err, result) => {
    if (err) throw err;
    console.log(result);
    //res.redirect('usuario creado');
    console.log('usuario creado')
  });
});

//esta instrucción indica que el servidor está corriendo en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
