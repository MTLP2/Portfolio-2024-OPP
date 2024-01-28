module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token === "123") {
        next();
    } else {
        res.status(401).json({ message: "Accès non autorisé" });
    }
};
