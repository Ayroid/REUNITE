function validateUserData(req, res, next) {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (username.length < 2) {
        return res.status(400).json({ message: 'Invalid Username' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password should be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    next();
}   

module.exports = {
    VALIDATEREGISTER : validateUserData
};