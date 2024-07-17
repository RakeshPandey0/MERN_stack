const protect = (req, res, next)=>{
    if(!req.session.user){
        res.redirect("/auth/sign-in");
    }
    else next();
}

module.exports = protect;