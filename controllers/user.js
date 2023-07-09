const login = async (req, res) => {
    res.send('login');
}

const register = async (req, res) => {
    res.send('register');
}

module.exports = { login, register };