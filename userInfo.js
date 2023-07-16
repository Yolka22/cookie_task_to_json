const UserInfoJsonString = localStorage.getItem('UserInfoJson');
const UserInfoJson = JSON.parse(UserInfoJsonString);

const restrictInput = (inputElement, RegEx) => {
  const regex = RegEx;
  const inputValue = inputElement.value;

  if (!regex.test(inputValue)) {
    const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
    inputElement.value = filteredValue;
  }
}


const validateYear = (inputElement,errorcontainer) => {
  const Error = document.getElementById(errorcontainer);
  const inputValue = inputElement.value;

  if (/^\d*$/.test(inputValue)) {

    const year = parseInt(inputValue);

    const currentYear = new Date().getFullYear();

    if (year >= 1900 && year <= currentYear) {
      Error.hidden = true;
    } else {
      Error.hidden = false;
    }
  }
}
const validatePhone = (input,errorcontainer) => {
  let string = input.value;
  const Error = document.getElementById(errorcontainer);
  const regex = /^[0-9()\s-]{10,12}$/;
  if(regex.test(string)){
    Error.hidden=true;
  }else{
    Error.hidden=false;
  }
}
document.getElementById('hello').textContent+=" "+UserInfoJson.email;

document.getElementById('exit').addEventListener('click',()=>{
    localStorage.setItem('UserInfoJson',"{}")
    window.location.replace("index.html");
})

document.getElementById('save').addEventListener("click",(event)=>{
  event.preventDefault();
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input=>{
    UserInfoJson[`${input.name}`]=input.value;
  })
  localStorage.setItem('UserInfoJson',JSON.stringify(UserInfoJson))
  location. reload()
})

if(localStorage.getItem('UserInfoJson')!=null&&localStorage.getItem('UserInfoJson')!="{}"){
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input=>{
    if(UserInfoJson[`${input.name}`]!=undefined){
      input.value = UserInfoJson[`${input.name}`];
    }
  })
}