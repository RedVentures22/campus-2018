const whitelist = [
    'su578t7jEVJsD50JNdlsGlTltCmt2IAwDMgBZorphZg=',
];

const checkAuth = (req, res, next) => {
    const key = req.header('Authorization');
    if (whitelist.indexOf(key) < 0) {
        res.sendStatus(401);
        return;
    }
    next();
};

module.exports = {
    checkAuth
};