//to perform action
//we need to write a function
function validationform()
{
    //request data gathering logic
    var uname=document.loginform.username.value;
    var pwd=document.loginform.password.value;
    //document.write(uname+" "+pwd);

    //form validation logic
    if(uname=="")
    {
        alert("you dumb...enter username");
        return false;
    }
    if(pwd=="")
    {
        alert("you dumb...enter password")
    }
}