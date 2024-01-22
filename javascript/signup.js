//to perform action
//we need to write a function
function validationform()
{
    var uname=document.signupform.username.value;
    var pwd=document.signupform.password.value;
    var cpwd=document.signupform.confirmpassword.value;
    var pnum=document.signupform.mobilenumber.value;
    var dob=document.signupform.dob.value;
    var adr=document.signupform.address.value;
    var qual=document.signupform.qualification.value;
    var skl=document.signupform.skills.value;
    var cb=document.signupform.checkbox.value;
    var file=document.signupform.resume.value;
    if(uname=="")
    {
        alert("you dumb...enter username");
        return false;
    }
    if(pwd=="")
    {
        alert("you dumb...enter password");
    }
    if(cpwd=="")
    {
        alert("you dumb...enter confirm password");
        return false;
    }
    if(dob="")
    {
        alert("you dumb...enter dob");
        return false;
    }
    if(pnum=="")
    {
        alert("you dumb...enter phonr number");
        return false;
    }
    if(adr=="")
    {
        alert("you dumb...enter address");
        return false;
    }
    if(qual=="")
    {
        alert("you dumb...enter qualifications");
        return false;
    }
    if(skl=="")
    {
        alert("you dumb...enter skills");
        return false;
    }
    if(cb=="")
    {
        alert("you dumb...checkbox");
        return false;
    }
    if(file=="")
    {
        alert("you dumb...upload file");
        return false;
    }
}