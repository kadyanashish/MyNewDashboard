var appRoutes = require('express').Router();
const path = require('path')

appRoutes.route('/*').get((req, res) => {
    res.sendFile(path.join(__dirname + '../../../public/index.html'));
});

module.exports = appRoutes;