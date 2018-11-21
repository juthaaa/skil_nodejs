const express = require('express');
const router = express.Router();
const routeUM = require('./routeUM');
const routeCms = require('./routeCms');

router.use(`/um`,routeUM );
router.use(`/cms`,routeCms );
router.use(`/`, (req, res) => res.send('Hello!'));
module.exports = router;