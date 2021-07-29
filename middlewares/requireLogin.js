module.exports = async (req, res, next) => {
    if(!req.user){
        return res.status(401).send({ Error: "You must login!"})
    };
    next();
}