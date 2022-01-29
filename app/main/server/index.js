const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const salt = "$2b$10$TBx7fI7TfQ9JvzvDlcHDd.";

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Arsenal2015@',
    database: 'CookeryDB',
    multipleStatements: true
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

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
        const sqlSelect = `SELECT 
            id, name, likes, mail, likedPostsIdes, image
            FROM users 
        WHERE mail = '${userEmail}' AND password = '${userPasswordHashed}'`;
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

app.get('/user/reciepes/get', (req, res) => {
    const sqlSelect = `SELECT * FROM reciepes WHERE userId = ${req.query.id}`;
    db.query(sqlSelect, (err, result) => {
        console.log(`error: ${err}`);
        console.log(`result: ${result}`);
        res.send(result)
    })
})

app.get('/recipes/get', (req, res) => {
    const sqlSelect = `SELECT * FROM reciepes`;
    db.query(sqlSelect, (err, result) => {
        console.log(`error: ${err}`);
        console.log(`result: ${result}`);
        res.send(result)
    })
})

app.post('/recipes/likes/update', (req, res) => {
    const type = req.body.type;
    const recipeId = req.body.recipeId;
    const userId = req.body.userId;
    if (type > 0) {
        let sqlUpdate = `
        SELECT rating FROM reciepes WHERE id = ${recipeId};
        UPDATE reciepes SET rating = rating + ${type} WHERE id = ${recipeId};
        UPDATE users SET likedPostsIdes = CONCAT(likedPostsIdes, '${recipeId};') WHERE id = ${userId}`
        db.query(sqlUpdate, (err, result) => {
            console.log(err)
            res.send(result)
        })
    } else {
        let sqlUpdate = `
        SELECT rating FROM reciepes WHERE id = ${recipeId};
        UPDATE reciepes SET rating = rating + ${type} WHERE id = ${recipeId};
        UPDATE users SET likedPostsIdes = REPLACE(likedPostsIdes, '${recipeId};', '') WHERE id = ${userId}`
        db.query(sqlUpdate, (err, result) => {
            console.log(err)
            res.send(result)
        })
    }
})

app.post('/reciepes/insert', (req, res) => {
    const cook = JSON.stringify(req.body.cook);
    const description = JSON.stringify(req.body.description);
    const lstOfProducts = JSON.stringify(req.body.lstOfProducts);
    const products = JSON.stringify(req.body.products);
    const time = req.body.time;
    const title = req.body.title;
    const userId = req.body.userId;
    const images = req.body.images;

    const sqlInsert = `INSERT INTO reciepes (
        title, userId, time, cook, lstOfProducts, products, description, comments, images
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    console.log(title, userId, time, cook, lstOfProducts, products, description, JSON.stringify([]), images)
    db.query(sqlInsert, [
        title, userId, time, cook, lstOfProducts, products, description, JSON.stringify([]), images
    ], (err, result) => {
        console.log(`error: ${err}`);
        console.log(`result: ${result}`);
    })
})

app.post('/user/image/upload', (req, res) => {
    const sqlUpdate = `UPDATE users 
        SET image = '${req.body.imageBase64}' 
    WHERE id = ${req.body.userId};`;
    db.query(sqlUpdate, (err, result) => {
        res.send(err)
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})
