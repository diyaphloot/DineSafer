// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Allow cross-origin requests from your React app
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'password', 
  database: 'db' 
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});

// API endpoint for searching items
app.get('/api/search', (req, res) => {
  let establishment = req.query.establishment;
  let city = req.query.city;
  console.log(establishment,city);
  establishment = `%${establishment}%`;
  city = `%${city}%`;
  const sql = `SELECT t3.Establishment, t3.Address, t3.City, t3.Zip, t3.Date, t3.Violations, t3.InspectionType, SUM(LENGTH(Violations) - LENGTH(REPLACE(Violations, ',', '')) + 1) as count
FROM
(SELECT t1.*, DATE_FORMAT(InspectionDate, "%b %d, %Y") as Date
FROM inspections t1
JOIN (
    SELECT Establishment, Address, MAX(InspectionDate) AS latest_timestamp
    FROM inspections
    GROUP BY Establishment, Address
) t2 
ON t1.Establishment  = t2.Establishment  AND t1.Address = t2.Address AND t1.InspectionDate = t2.latest_timestamp
WHERE (t1.Establishment like ? OR t1.Address like ?) AND t1.City like ? AND t1.Zip like '%')t3
GROUP BY Establishment, Address, City, Zip, Date, Violations, InspectionType ORDER BY count DESC;`;

  db.query(sql, [establishment, establishment, city], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    return res.json(results);
  });
});


// API endpoint for top violators
app.get('/api/violators', (req, res) => {
  let city = '%'+req.query.city+'%';
  const sql = `SELECT Establishment, Address, City, SUM(LENGTH(Violations) - LENGTH(REPLACE(Violations, ',', '')) + 1) as violations
  FROM inspections where City like ? and Violations != 'None' and YEAR(InspectionDate)='2025' 
  GROUP BY Establishment, Address, City order by violations desc limit 5`;

  db.query(sql, [city], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    return res.json(results);
  });
});

// API endpoint for Graphs
app.get('/api/graph', (req, res) => {
  let year = req.query.year;
  console.log('diya', req.query.year);
  const sql = `SELECT DATE_FORMAT(InspectionDate, "%b") AS Month, COUNT(*) AS inspections FROM inspections 
  WHERE Violations != 'None' AND YEAR(InspectionDate) = ?
  GROUP BY DATE_FORMAT(InspectionDate, "%b"), MONTH(InspectionDate) ORDER BY MONTH(InspectionDate)`;

  db.query(sql, [year], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    return res.json(results);
  });
});

// API endpoint for cities
app.get('/api/cities', (req, res) => {
  const sql = `select distinct City from inspections order by City asc`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    return res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
