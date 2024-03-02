const User = require("../models/user");
const {setUser, getUser} = require("../service/auth");
async function handleCreateNewUser(req, res){
    const {name,
        email,
        mobile,
        student_id,
        birthdate,
        permanent_address,
        temporary_address,
        year_of_studying,
        department,
        password,
    } = req.body;


    await User.create({
        student_id: student_id,
        emailId:email,
        name: name,
        loginPassword: password,
        tempaddress:temporary_address,
        permantAddress:permanent_address,
        contactNo:mobile,
        dob:birthdate,
        yearOfStudying:year_of_studying,
        department:department,
        isAdmin: false,
    })
    res.redirect("/dashboard")
        
}
async function handleloginUser(req, res){
    const {email, password} = req.body;
    const user =   await User.findOne({emailId: email , loginPassword: password})
    if(!user){
        return res.redirect("/login");
        
    }
    const token = setUser( user);
    
    res.cookie("uid", token);
    res.redirect("/dashboard");
    
    
    
}
async function handleUnknowReq(req, res){
    res.render("pageNotFound.ejs");
}

module.exports ={
    handleCreateNewUser,
    handleloginUser,
    handleUnknowReq,
}