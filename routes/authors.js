const express = require('express')
const Author = require('../models/author')
const router = express.Router()

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})

// Create Author Route
router.post('/', (req, res) => {
    res.send(req.body.name)
})
module.exports = router