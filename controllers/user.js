require('dotenv').config();
const bcrypt = require('bcrypt');

// CUSTOM MODULES

const { USER } = require('../models/user');
const { GENERATETOKEN } = require('../authentication/jwt');

const login = async (req, res) => {
    let data = { email, password } = req.body;

    let user = await USER.findOne({ email: data.email });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (match) {
        let payload = {
            userId: match._id,
            username: match.username,
        }
        const accessToken = GENERATETOKEN(payload, "30d")
        res.status(200).json({ accessToken: accessToken })
    }

    if (!match) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }

    res.status(200).json({ message: 'User logged in successfully' });

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