var userNameSignUp = document.querySelector('#user-name-sign-up'),
    userEmailSignUp = document.querySelector('#user-email-sign-up'),
    userPassSignUp = document.querySelector('#user-password-sign-up'),
    signUpBtn = document.querySelector('#sign-up-btn');
var userInformationSignUp = [];


//Test If Local Storage Have Data
if (JSON.parse(localStorage.getItem("userInfo")) != null) {
    userInformationSignUp = JSON.parse(localStorage.getItem("userInfo"))


}

/*_____________ Form Validation Regular Expression Start _____________*/
function checkNameSignUp() {
    var userNamereg = /^[A-z]{4,9}$/;
    var res = userNamereg.test(userNameSignUp.value)
    return res;
}
function checkEmailSignUp() {
    var userEmailereg = /^[A-z]+.[A-z0-9]+@[A-z]+.(com|org|edu)$/;
    var res = userEmailereg.test(userEmailSignUp.value)
    return res;
}

function checkuserPassSignUp() {
    var userPassreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var res = userPassreg.test(userPassSignUp.value)
    return res;
}
/*_____________ Form Validation Regular Expression End _____________*/



/*_____________ Input Validation Start _____________*/
userNameSignUp.addEventListener('keyup', userNameValidation)
function userNameValidation() {
    if (checkNameSignUp() && checkEmailSignUp() && checkuserPassSignUp()) {
        signUpBtn.removeAttribute('disabled')
    }
    else {
        signUpBtn.setAttribute('disabled', 'true')
    }
    if (checkNameSignUp()) {
        userNameSignUp.classList.add('is-valid')
        userNameSignUp.classList.remove('is-invalid')
    }
    else if (checkNameSignUp() == false) {
        userNameSignUp.classList.remove('is-valid')
        userNameSignUp.classList.add('is-invalid')
    }
    if (userNameSignUp.value == '') {
        userNameSignUp.classList.remove('is-valid')
        userNameSignUp.classList.remove('is-invalid')
    }
}


userEmailSignUp.addEventListener('keyup', userEmailValidation)
function userEmailValidation() {
    if (checkNameSignUp() && checkEmailSignUp() && checkuserPassSignUp()) {
        signUpBtn.removeAttribute('disabled')
    }
    else {
        signUpBtn.setAttribute('disabled', 'true')
    }

    if (checkEmailSignUp()) {
        userEmailSignUp.classList.add('is-valid')
        userEmailSignUp.classList.remove('is-invalid')
    }
    else if (checkEmailSignUp() == false) {
        userEmailSignUp.classList.remove('is-valid')
        userEmailSignUp.classList.add('is-invalid')
    }
    if (userEmailSignUp.value == '') {
        userEmailSignUp.classList.remove('is-valid')
        userEmailSignUp.classList.remove('is-invalid')
    }
}


userPassSignUp.addEventListener('keyup', userPassValidation)
function userPassValidation() {
    if (checkNameSignUp() && checkEmailSignUp() && checkuserPassSignUp()) {
        signUpBtn.removeAttribute('disabled')
    }
    else {
        signUpBtn.setAttribute('disabled', 'true')
    }
    if (checkuserPassSignUp()) {
        userPassSignUp.classList.add('is-valid')
        userPassSignUp.classList.remove('is-invalid')
    }
    else if (checkuserPassSignUp() == false) {
        userPassSignUp.classList.remove('is-valid')
        userPassSignUp.classList.add('is-invalid')
    }
    if (userPassSignUp.value == '') {
        userPassSignUp.classList.remove('is-valid')
        userPassSignUp.classList.remove('is-invalid')
    }

}

/*_____________ Input Validation End _____________*/





signUpBtn.addEventListener('click', CheckNewUser)

/*_____________ Add New User Start _____________*/
function addNewUser() {


    var userInformation = {
        name: userNameSignUp.value,
        email: userEmailSignUp.value,
        password: userPassSignUp.value

    }




    userInformationSignUp.push(userInformation);


    localStorage.setItem('userInfo', JSON.stringify(userInformationSignUp));

    restForm();


}
/*_____________ Add New User End _____________*/



/*_____________ Check New User Start _____________*/
function CheckNewUser() {

    if (JSON.parse(localStorage.getItem("userInfo")) == null) {
        addNewUser();


    }

    else {

        var isExists = true;
        for (var i = 0; i < userInformationSignUp.length; i++) {

            if (userInformationSignUp[i].name == userNameSignUp.value ||
                userInformationSignUp[i].email == userEmailSignUp.value ||
                userInformationSignUp[i].password == userPassSignUp.value) {

                console.log(userInformationSignUp)
                isExists = false;
                break;



            }


        }

        if (isExists == true) {

            addNewUser();
            restForm()
            alert('Not Exists')
        }
        else {

            alert('Already Exists')
            restForm()
        }
    }
}
/*_____________ Check New User End _____________*/



/*_____________ Form Reset Start _____________*/
function restForm() {
    userNameSignUp.value = '';
    userEmailSignUp.value = '';
    userPassSignUp.value = '';
    userNameSignUp.classList.remove('is-valid')
        userNameSignUp.classList.remove('is-invalid')
        userEmailSignUp.classList.remove('is-valid')
        userEmailSignUp.classList.remove('is-invalid')
        userPassSignUp.classList.remove('is-valid')
        userPassSignUp.classList.remove('is-invalid')
}
/*_____________ Form Reset End _____________*/
