const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'server',
  database: 'topochico'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos!');
});

app.get('/', (req, res) => {
  res.render('registro.ejs');
});

app.post('/registro', (req, res) => {
  const { nombre, correo  } = req.body;
  const usuario = { nombre, correo};
  connection.query('INSERT INTO usuarios SET ?', usuario, (err, result) => {
    if (err) throw err;
    console.log(result);
    //res.redirect('usuario creado');
    console.log('usuario creado')
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});