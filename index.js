//Crear constantes para solicitar uso de los paquetes express, mysql y body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');




//crear una constante que almacene en app las funciones de express
const app = express();

app.set('view engine', 'ejs');

//app.set('views', path.join(__dirname, 'views'));
//app.use(express.static(path.join(__dirname, './registro/views')))
app.set('views', path.join(__dirname, 'registro', 'views'));

app.use(express.static('public'));

// se crea la variable connection para establecer la conexión con la BD
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'topochico'
});

//Llama a la función connect para establecer la conexión a la BD, si todo está Ok dará como respuesta "Conectado a la base de datos"
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos!');
});

//llamar a la función use para poder capturar los datos del loggin
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// establece la ruta a seguir para mostrar la plantilla registro, que contiene el login
app.get('/registro', function(req,res){
  res.render('registro');
});

/*app.get('/story', function(req,res){
  res.render('story.html');
})*/


app.get('/registro', (req, res) => {

  // Redirige a la nueva página
  res.redirect('story.html');
});


//Se llama al método post para pasar a la BD los datos a capturar: nombre y correo
app.post('/registro', (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  connection.query('INSERT INTO usuarios SET ?', {fullname: fullname, email: email}, (error, results) => {
    if (error) {
      console.error('Error al cargar datos en la base de datos:', error);
    } else {
      console.log('Usuario guardado correctamente en la base de datos');
      res.render('registro',{
        alert: true,
        alertTitle: "Registración",
        alertMessage: "¡Registro exitoso!",
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 1500,
        ruta:''
      })
    }
  });
});

//esta instrucción indica que el servidor está corriendo en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

