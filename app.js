const express = require('express');
const path = require('path');
const router = require('./routes/router.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

app.use((req, res) => {
    res.status(404).render('404');
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(`${err.message} Code: ${err.statusCode}`);
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server running at http://127.0.0.1:${PORT}`);
})
