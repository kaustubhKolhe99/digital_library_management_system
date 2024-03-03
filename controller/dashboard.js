const User = require("../models/user");

async function handleChangePassword(req, res){
    const {
        currentPassword,
        newPassword,
        confirmNewPassword,
    } = req.body;

    const user = await User.findOne({emailId: req.user.email});
    
    if (currentPassword == user.loginPassword && newPassword == confirmNewPassword){
        await User.findOneAndUpdate({emailId:user.emailId}, {loginPassword: newPassword}, {runValidators:true});
        return res.redirect("/dashboard");
    }
    return res.redirect("/dashboard/changepassword")
}

module.exports={
    handleChangePassword,
}