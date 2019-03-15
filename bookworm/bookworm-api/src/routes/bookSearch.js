import express from 'express';
import authSearch from '../middlewares/authSearch'
import request from 'request-promise'
import {parseString} from "xml2js"
import Book from '../models/book'

const router = express.Router();
router.use(authSearch);

router.get("/search", (req, res)=>{

    request.get(`https://www.goodreads.com/search/index.xml?key=${process.env.GR_KEY}&q=${req.query.q}`)
        .then(result => parseString(result, (err, goodReadsResult) => 
        res.status(200).json({
            books: goodReadsResult.GoodreadsResponse.search[0].results[0].work.map(work  =>({
                goodreadsId: parseInt(work.best_book[0].id[0]._ , 10), 
                title: work.best_book[0].title[0],
                authors: work.best_book[0].author[0].name[0],
                covers: work.best_book[0].image_url,
                pages:0
            }))	
        })));
})

router.get("/fetchData", (req, res)=>{
    const {goodreadsId} = req.query;
    request.get(`https://www.goodreads.com/book/show.xml?key=${process.env.GR_KEY}&id=${goodreadsId}`)
        .then(result => parseString(result, (err, goodReadsResult) => {
            res.status(200).json({pages: parseInt(goodReadsResult.GoodreadsResponse.book[0].num_pages[0],10)})
        }))

})

router.post("/", (req,res)=>{
    var book = req.body.book;
    Book.create({
        title:book.title,
        authors:book.authors,
        covers:book.cover,
        goodreadsId: book.goodreadsId,
        pages: book.pages,
        userId: req.currentUser._id,
     })
        .then(book =>res.status(200).json({book}))
        .catch(err => res.status(400).json({ errors: err.errors }));
})

router.get("/", (req,res)=>{
    Book.find({userId:req.currentUser._id})
        .then(books =>res.status(200).json({books}))
})

export default router;