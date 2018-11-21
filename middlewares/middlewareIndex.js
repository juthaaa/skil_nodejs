const express = require('express');
const router = express.Router();
var middlewareBodyParser = require('./middlewareBodyParser');
var middlewareJWT = require('./middlewareJWT');
var middlewareMongodb = require('./middlewareMongodb');
var middlewareMorgan = require('./middlewareMorgan');

router.use('/', middlewareBodyParser);
router.use('/cms', middlewareJWT);
router.use('/um/logout', middlewareJWT);
router.use('/', middlewareMongodb);
router.use('/', middlewareMorgan);

module.exports = router;