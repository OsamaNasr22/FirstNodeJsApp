
var getRegisterPage = (req,res) =>{
    res.render('./user/register', {csrfToken: req.csrfToken() })

}

var register = (req,res) => {
    res.redirect('/')
}

module.exports = {getRegisterPage, register};
