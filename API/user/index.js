const express = require('express')
const router = express.Router();
const ctrl = require('./user.ctrl')

router.get("/", ctrl.index);
router.post("/login", ctrl.login);

module.exports = router;