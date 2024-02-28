async function createNewUser(req, res){

}
async function loginUser(req, res){
    const body = req.body;
    console.log(body.email)
    console.log(body.password);
    //check for email and password and authenticate
    res.render("dashboard.ejs");
}
module.exports ={
    createNewUser,
    loginUser,
}