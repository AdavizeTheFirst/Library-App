const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');

const host = '127.0.0.1';
const app = express();
const port = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny')); // or combined
app.use(express.static(path.join(__dirname, 'views/public')));

const bookRouter = require('./src/routes/bookRoutes');

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render(
    'index',
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
      title: 'Library'
    }
  );
});

app.listen(port, host, () => {
  debug(`Server started on port: ${chalk.green(port)}, host: ${host}`);
});
