const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'root',
  password: 'rafaelfaria',
  database: 'supergeeks',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
});

app.get('/projects', (req, res) => {

  connection.query('SELECT * FROM projects', (error, results) => {

    if (error) { 
      throw error
    };

    res.send(results.map(project => ({ name: project.name, people: project.people })));
  });
});


app.listen(9001, '0.0.0.0', () => {
  console.log('Listening on port 9001');
});
