
var getRegisterPage = (req,res) =>{
    var messages = req.flash('error');
    res.render('./user/register', {csrfToken: req.csrfToken(), hasError: messages.length > 0, messages: messages  })

}

var register = (req,res) => {
    res.redirect('/')
}

var getProfile = (req,res) =>{
    res.render('./user/profile')
}

module.exports = {getRegisterPage, register, getProfile};
