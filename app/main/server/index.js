const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_current_password',
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

app.listen(3001, () => {
    console.log('running on port 3001');
})
