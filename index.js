//Crear constantes para solicitar uso de los paquetes express, mysql y body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');




//crear una constante que almacene en app las funciones de express
const app = express();

//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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

  // Creación de la tabla 'secciones_extraidas' si no existe
  const createTableSQL = `CREATE TABLE IF NOT EXISTS secciones_extraidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT
  )`;

  connection.query(createTableSQL, (error) => {
    if (error) {
      console.error('Error al crear la tabla secciones_extraidas:', error);
    } else {
      console.log('Tabla secciones_extraidas creada o ya existente.');
    }
  });
});



//llamar a la función use para poder capturar los datos del loggin
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// establece la ruta a seguir para mostrar la plantilla registro, que contiene el login
app.get('/registro', function(req,res){
  res.render('registro');
});

app.get('/story', function(req,res){
  res.render('story');
})

//Se llama al método post para pasar a la BD los datos a capturar: nombre y correo
app.post('/registro', (req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;

  connection.query('SELECT * FROM usuarios WHERE fullname = ? AND email = ?', [fullname, email], (error, results) => {
    if (error) {
      console.error('Error al verificar datos en la base de datos:', error);
    } else {
      if (results.length > 0) {
        console.log('El usuario ya existe en la base de datos');
        res.redirect('/story'); // Redirigir a la página story.html si el usuario ya existe
      } else {
        connection.query('INSERT INTO usuarios SET ?', {fullname: fullname, email: email}, (error, results) => {
          if (error) {
            console.error('Error al cargar datos en la base de datos:', error);
          } else {
            console.log('Usuario guardado correctamente en la base de datos');
            res.redirect('/story'); // Redirigir a la página story.html si el usuario se ha guardado correctamente
          }
        });
      }
    }
  });
});

/*const filePath = '../topochico/html5/data/js/data.js';
let extractedSection; // Declarar la variable en el ámbito global

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  console.log('Contenido del archivo data.js:', data);

  extractedSection = extractSection(data, 'kind": "answer'); // Asignar valor a la variable global

  console.log('Sección extraída:', extractedSection);

  // Insertar la sección extraída en la tabla 'secciones_extraidas'
  const insertSQL = 'INSERT INTO secciones_extraidas (contenido) VALUES (?)';

  connection.query(insertSQL, [extractedSection], (error, results) => {
    if (error) {
      console.error('Error al guardar la sección extraída:', error);
    } else {
      console.log('Sección extraída almacenada correctamente en la base de datos.');
    }
  });
});


function extractSection(content, startMarker) {
  const startIndex = content.indexOf(startMarker);

  if (startIndex === -1) {
    throw new Error('No se encontró la sección deseada en el contenido.');
  }

  let openBraces = 0;
  let closeBraces = 0;
  let endIndex = -1;

  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') {
      openBraces++;
    } else if (content[i] === '}') {
      closeBraces++;
    }

    if (openBraces === closeBraces && openBraces > 0) {
      endIndex = i + 1;
      break;
    }
  }

  if (endIndex === -1) {
    throw new Error('La sección extraída no está correctamente formateada.');
  }

  const extractedData = content.slice(startIndex, endIndex);
  return extractedData;
}
*/

//esta instrucción indica que el servidor está corriendo en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

