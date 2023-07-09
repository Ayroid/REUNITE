const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ROUTERS
const claimRouter = require('./routers/claim');
const userRouter = require('./routers/user');
const uploadsRouter = require('./routers/uploads');
const itemRouter = require('./routers/item');

// ROUTES
app.use('/claim', claimRouter);
app.use('/user', userRouter);
app.use('/uploads', uploadsRouter);
app.use('/item', itemRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});