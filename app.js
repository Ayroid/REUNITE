const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// CUSTOM MODULES

const { CONNECT } = require('./models/database');
const { VERIFYTOKEN } = require('./authentication/jwt');

// CONNECT TO DATABASE
CONNECT();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// ROUTERS
const pagesRouter = require('./routers/pages');
const claimRouter = require('./routers/claim');
const userRouter = require('./routers/user');
const uploadsRouter = require('./routers/uploads');
const itemRouter = require('./routers/item');

// ROUTES
app.use('/', pagesRouter);
app.use('/claim', claimRouter);
app.use('/user', userRouter);
app.use('/uploads', uploadsRouter);
app.use('/item', itemRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});