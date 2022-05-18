const client = require("./connection.js");
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(`server is running on 3000`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.connect();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/employees", (req, res) => {
  client.query(
    `select id,firstname,lastname,position,annual,phonenumber,email from employees;`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});
app.get("/employees/:id", (req, res) => {
  client.query(
    `select id,firstname,lastname,position,annual,phonenumber,email from employees WHERE id=${req.params.id};`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

app.post("/employees", (req, res) => {
  let insertQuery = `INSERT INTO public.employees (firstname,lastname,position,annual,phonenumber,email)VALUES('${req.body.firstname}','${req.body.lastname}','${req.body.position}',${req.body.annual},'${req.body.phonenumber}','${req.body.email}')`;
  console.log(req.body);
  client.query(insertQuery, (err, result) => {
    if (!err) {
      console.log("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.delete("/employees/:id", (req, res) => {
  let insertQuery = `DELETE FROM employees WHERE id=${req.params.id}`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      console.log("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.put("/employees/:id", (req, res) => {
  const change = req.body;
  console.log(change);
  let updateQuery = `UPDATE employees
    set firstname = '${change.firstname}',
    lastname = '${change.lastname}',
    position = '${change.position}',
    annual = ${change.annual},
    phonenumber = '${change.phonenumber}',
    email = '${change.email}'
    WHERE id = ${req.params.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      console.log("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
