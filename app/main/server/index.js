const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const salt = "$2b$10$TBx7fI7TfQ9JvzvDlcHDd.";

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Arsenal2015@',
    database: 'CookeryDB'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/products/get', (req, res) => {
    const sqlSelect = "SELECT * FROM products";
    db.query(sqlSelect, (err, result) => {
        console.log(`error: ${err}`);
        console.log(`result: ${result}`);
        res.send(result)
    })
})

app.post('/products/insert', (req, res) => {
    const productName = req.body.productName;
    console.log(productName)

    const sqlInsert = "INSERT INTO products (name, selected) VALUES (?, ?)";
    db.query(sqlInsert, [productName, 0], (err, result) => {
        console.log(`error: ${err}`);
        console.log(`result: ${result}`);
    })
})

app.get('/users/get', (req, res) => {
    const userEmail = req.query.userEmail;
    const userPassword = req.query.userPassword;
    (async function main () {
        const userPasswordHashed = await bcrypt.hash(userPassword, salt);
        const sqlSelect = `SELECT id, name, likes, mail FROM users WHERE mail = '${userEmail}' AND password = '${userPasswordHashed}'`;
        db.query(sqlSelect, (err, result) => {
            console.log(`error: ${err}`);
            console.log(`result: ${result}`);
            res.send(result)
        })
    })();
})

app.post('/users/insert', (req, res) => {
    (async function main () {
        const userName = req.body.userName;
        const userEmail = req.body.userEmail;
        const userPassword = await bcrypt.hash(req.body.userPassword, salt);

        const sqlInsert = "INSERT INTO users (name, mail, password) VALUES (?, ?, ?)";
        db.query(sqlInsert, [userName, userEmail, userPassword], (err, result) => {
            console.log(`error: ${err}`);
            console.log(`result: ${result}`);
            res.send(err)
        })
    })();
})

app.listen(3001, () => {
    console.log('running on port 3001');
})
