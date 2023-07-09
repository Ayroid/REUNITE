require('dotenv').config();
const bcrypt = require('bcrypt');

// CUSTOM MODULES

const { USER } = require('../models/user');

const login = async (req, res) => {
    res.send('login');
}

const register = async (req, res) => {
    try {

        let data = { username, email, password } = req.body;

        const salt = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(process.env.SALTROUNDS), (err, salt) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(salt);
                }
            });
        });

        const hash = await new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, (err, hashedPassword) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hashedPassword);
                }
            });
        });

        data.password = hash;

        let newUser = new USER(data);
        newUser.save()
            .then((user) => {
                res.status(200).json({ message: 'User registered successfully' });
            }
            ).catch((err) => {
                res.status(500).json({ error: 'INTERNAL SERVER ERROR' });
            });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { login, register };