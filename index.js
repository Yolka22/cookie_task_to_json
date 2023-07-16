const EmailIteral = /^[a-zA-Z.-_]{3,}@([a-zA-Z.-]+\.[a-zA-Z]{2,})$/;
const PasswordItearal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const PasswordError = document.getElementById('password_error');
const RepeatPasswordError = document.getElementById('repet_password_error');
const EmailError = document.getElementById('email_error');
const SubmitReg = document.getElementById('submit_reg');

const checkEmail = () =>{
    const inputText = document.getElementById("email").value;
  
    if (EmailIteral.test(inputText)) {
        EmailError.hidden = true;
        return true;
    } else {
        EmailError.hidden = false;
        return false;
    }
}

const checkPassword = () =>{
    const inputText = document.getElementById("password").value;
  
    if (PasswordItearal.test(inputText)) {
        PasswordError.hidden = true;
        return true;
    } else {
        PasswordError.hidden = false;
        return false;
    }
}

const checkRepeat = () =>{
    const password = document.getElementById("password").value;
    const repeat_password = document.getElementById("repeat_password").value;
  
    if(password==repeat_password){
        RepeatPasswordError.hidden=true;
        return true;
    }else {
        RepeatPasswordError.hidden = false;
        return false;
    }
}



SubmitReg.addEventListener('click',(event)=>{
    event.preventDefault();
    if(EmailError.hidden==true&&
        PasswordError.hidden==true&&
        RepeatPasswordError.hidden==true
        ){


            const UserInfoJson = JSON;

            UserInfoJson.email = document.getElementById('email').value;

            localStorage.setItem('UserInfoJson',JSON.stringify(UserInfoJson));
            window.location.replace("userInfo.html");
    }
})


if(localStorage.getItem('UserInfoJson')!=null&&localStorage.getItem('UserInfoJson')!="{}"){
    window.location.replace("userInfo.html");
}
