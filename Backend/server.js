const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

app.get('/', (req, res) => {
  return res.json("From Backend Side");
});

app.get('/opport_10', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM opport_10";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get('/opport_ug', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM opport_ug";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/opport_pg', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM opport_pg";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/opport_poly', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM opport_poly";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/opport_12', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM opport_12";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get('/job_gov', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM job_gov";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/job_pri', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM job_pri";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.get('/job_bipc', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM job_bipc";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/job_mpc', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM job_mpc";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/jobs_civil', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM jobs_civil";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/jobs_cse', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM jobs_cse";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/jobs_ece', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM jobs_ece";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/deggov_jobs', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM deggov_jobs";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/degpri_jobs', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM degpri_jobs";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/jobs_mbbs', (req, res) => {
  const { education } = req.query;
  let sql = "SELECT * FROM jobs_mbbs";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const PORT = 3002; // Change port number here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
