const User = require("../models/user");
const  Books= require("../models/books");
const Query = require("../models/clientQuerry")
const EBooks = require("../models/ebook")

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
async function handleProfiePage(req, res){
    const user = await User.findOne({emailId:req.user.email}); 
    return res.render("aboutuser.ejs" , {
        user,
    });
}
async function handleHelpRequest(req, res){
    const {
        name,
        email,
        message
    } = req.body;
    try {
        await Query.create({
            emailId:email,
            name: name,
            message:message,
            isAcknoledged: false,
            raisedBy: req.user._id,
            
        });
        
    } catch (error) {
        console.log(error)
        res.render("error")
    }
    res.redirect("/dashboard");
}
async function handleSearchBooks(req, res){
    allBooks = await Books.find({})
    res.render("search",{
        allBooks
    })
}

async function handleGetAllEBooks(req, res){
    allEBooks = await EBooks.find({});
    res.render("ebook", {
        allEBooks,
    })


}

module.exports={
    handleChangePassword,   
    handleProfiePage,
    handleHelpRequest,
    handleSearchBooks,
    handleGetAllEBooks,
}