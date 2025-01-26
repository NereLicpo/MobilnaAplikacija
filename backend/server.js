const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',  // Change to your DB host
  user: 'kmrkalj',       // Change to your DB user
  password: '11',       // Change to your DB password
  database: 'kmrkalj' // Change to your DB name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Endpoint to fetch developer notes
app.get('/api/developer-notes', (req, res) => {
  const query = 'SELECT * FROM DeveloperNotes';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

app.post('/api/messages', (req, res) => {
  const { ime, email, poruka } = req.body;
  const query = 'INSERT INTO Kontakti (ime, email, poruka) VALUES (?, ?, ?)';
  db.query(query, [ime, email, poruka], (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ message: 'Message saved successfully', id: results.insertId });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
