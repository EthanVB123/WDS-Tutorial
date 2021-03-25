const express = require('express')
const author = require('../models/author')
const Book = require('../models/book')
const Author = require('../models/author')
const router = express.Router()

// All Books Route
router.get('/', async (req, res) => {
    res.send('All Books')
})

// New Book Route
router.get('/new', async (req, res) => {
    // try {
        const authors = await author.find({})
        const book = new Book()
        res.render('books/new'), {
            authors: authors,
            book: book
        }
    //} catch {
    //    res.redirect('/books')
    //}
})

// Create Books Route
router.post('/', (req, res) => {
    res.send('Create Book')
})
module.exports = router