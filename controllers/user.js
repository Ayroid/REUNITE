require('dotenv').config();
const bcrypt = require('bcrypt');

// CUSTOM MODULES

const { USER } = require('../models/user');

const login = async (req, res) => {
    res.send('login');
}

const register = async (req, res) => {

    console.log("HERE");

    let data = { username, email, password } = req.body;
    bcrypt.genSalt(process.env.SALTROUNDS, async function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            data.password = hash;
            console.log("HASHING DONE");
        });
    });

    let newUser = new USER(data);
    newUser.save()
        .then((user) => {
            console.log("SAVED");
            res.status(200).json({ message: 'User registered successfully' });
        }
        ).catch((err) => {
            res.status(500).json(err);
        });
}

module.exports = { login, register };