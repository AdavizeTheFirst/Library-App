const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolsoy',
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    read: false
  },
  {
    title: 'The Time Maching',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  }
];

bookRouter.route('/')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav: [
          {
            link: '/',
            title: 'HOME'
          },
          {
            link: '/books',
            title: 'BOOKS'
          },
          {
            link: '/Authors',
            title: 'AUTHORS'
          }
        ],
        title: 'Books',
        books
      }
    );
  });
bookRouter.route('/:id')
  .get((req, res) => {
    res.render(
      'book',
      {
        nav: [
          {
            link: '/',
            title: 'HOME'
          },
          {
            link: '/books',
            title: 'BOOKS'
          },
          {
            link: '/Authors',
            title: 'AUTHORS'
          }
        ],
        title: 'About book',
        book: books[req.params.id]
      }
    );
  });

module.exports = bookRouter;
