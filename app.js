const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS
const claimRouter = require('./routers/claim');
const userRouter = require('./routers/user');
const uploadsRouter = require('./routers/uploads');

// ROUTES
app.use('/claim', claimRouter);
app.use('/user', userRouter);
app.use('/uploads', uploadsRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});