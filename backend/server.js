const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Middleware

app.use(
  session({
    secret: "ante", // Change this to a strong secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to `true` in production with HTTPS
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:9000", // Adjust to your frontend port
    credentials: true, // Allow cookies to be sent
  })
);

// Database connection
const db = mysql.createConnection({
  host: "ucka.veleri.hr", // Change to your DB host
  user: "kmrkalj", // Change to your DB user
  password: "11", // Change to your DB password
  database: "kmrkalj", // Change to your DB name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

// Endpoint to fetch developer notes
app.get("/api/developer-notes", (req, res) => {
  const query = "SELECT * FROM DeveloperNotes";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
});

app.post("/api/messages", (req, res) => {
  const { ime, email, poruka } = req.body;
  const query = "INSERT INTO Kontakti (ime, email, poruka) VALUES (?, ?, ?)";
  db.query(query, [ime, email, poruka], (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "Message saved successfully", id: results.insertId });
    }
  });
});

//Login Route
app.post("/api/login", (req, res) => {
  console.log("Received login request:", req.body); // Debugging

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  const query = "SELECT * FROM Users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length > 0) {
      req.session.user = { id: results[0].id, role: results[0].role };
      return res.json({ message: "Login successful", role: results[0].role });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

app.get("/api/check-auth", (req, res) => {
  if (req.session.user) {
    res.json({ role: req.session.user.role });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

//Logout route
app.post("/api/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      res.clearCookie("connect.sid"); // Clears session cookie
      res.json({ success: true });
    });
  } else {
    res.status(400).json({ error: "No active session" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
