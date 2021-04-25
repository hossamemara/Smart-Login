
var userEmailSignIn=document.querySelector('#user-email-sign-in'),
userPassSignIn=document.querySelector('#user-password-sign-in'),
signInBtn=document.querySelector('#sign-in-btn'),
signInLink=document.querySelector('#sign-in-link')

;
var userInfoSignIn=[];


if (JSON.parse(localStorage.getItem("userInfo")) != null) {
    userInfoSignIn = JSON.parse(localStorage.getItem("userInfo"))
 console.log('userInfo',userInfoSignIn)
}

userEmailSignIn.addEventListener('keyup',checkUsersEmails)
function checkUsersEmails()
{
    userEmailSignIn.classList.add('is-invalid')
    userEmailSignIn.classList.remove('is-valid')
    
    for(var i=0;i<userInfoSignIn.length;i++)
{

    
    if(userEmailSignIn.value==userInfoSignIn[i].email)
    {
       
        userEmailSignIn.classList.add('is-valid')
        userEmailSignIn.classList.remove('is-invalid')
        
        

    }
    else if (userEmailSignIn.value=='')
    {
        
        userEmailSignIn.classList.remove('is-valid')
        userEmailSignIn.classList.remove('is-invalid')
    }
    
 
}

}
userPassSignIn.addEventListener('keyup',checkUsersPass)
function checkUsersPass()
{
    
    userPassSignIn.classList.add('is-invalid')
    userPassSignIn.classList.remove('is-valid')
    
    for(var i=0;i<userInfoSignIn.length;i++)
{
    if(userPassSignIn.value==userInfoSignIn[i].password)
    {
        userPassSignIn.classList.add('is-valid')
        userPassSignIn.classList.remove('is-invalid')
        
        signInBtn.removeAttribute('disabled');
        
    }
    else if (userPassSignIn.value=='')
    {
        
        userPassSignIn.classList.remove('is-valid')
        userPassSignIn.classList.remove('is-invalid')
    }
 
    
 
 
}
}

signInBtn.addEventListener('mouseover',signInOk);
function signInOk()
{
    
    
    signInBtn.classList.remove('btn-success')
signInBtn.classList.add('btn-outline-info')
    for(var i=0;i<userInfoSignIn.length;i++)
    {
        
        
        if(userEmailSignIn.value==userInfoSignIn[i].email&&userPassSignIn.value==userInfoSignIn[i].password)
        {
           
            signInBtn.classList.add('btn-success')
            signInBtn.classList.remove('btn-outline-info')
            signInLink.href=`home.html?ms=${userInfoSignIn[i].name}`
            
            
    
        }
    
}
}
