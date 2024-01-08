const worldRoute = (req, res) => {
    res.send('Hello World');
};

const nameRoute = (req, res) => {
    res.send('Martin Moraga');
};

module.exports = {
    worldRoute,
    nameRoute
};