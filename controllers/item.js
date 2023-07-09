const getData = async (req, res) => {
    res.send('get All DATA');
}

const getSimilarData = async (req, res) => {
    res.send('get similar items');
}

module.exports = { getData, getSimilarData };