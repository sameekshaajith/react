const express = require('express');
const dbmodule = require('../dbmodule.js');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('about');
});
router.get('/checklist', (req,res) => {
    dbmodule.getTodo(res);
});
router.get('/toadd', (req,res) => {
    dbmodule.addTodo(req.query.todo,res);
});


module.exports = router;