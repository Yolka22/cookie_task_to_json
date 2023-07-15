function getCookieValue(cookieArray, cookieName) {
    for (const cookie of cookieArray) {
      const [name, value] = cookie.split("=");
      if (name === cookieName) {
        return value;
      }
    }
    return null;
  }


const restrictInput = (inputElement, RegEx) => {
  const regex = RegEx;
  const inputValue = inputElement.value;

  if (!regex.test(inputValue)) {
    const filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');
    inputElement.value = filteredValue;
  }
}


function validateYear(inputElement,errorcontainer) {
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
function validatePhone(input,errorcontainer) {
  let string = input.value;
  const Error = document.getElementById(errorcontainer);
  const regex = /^[0-9()\s-]{10,12}$/;
  if(regex.test(string)){
    Error.hidden=true;
  }else{
    Error.hidden=false;
  }
}




document.getElementById('hello').textContent+=` ${getCookieValue(document.cookie.split("; "),'email')}`;

document.getElementById('exit').addEventListener('click',()=>{
    document.cookie = `email=; expires=-1; `
    window.location.replace("index.html");
})

document.getElementById('save').addEventListener("click",(event)=>{
  event.preventDefault();
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input=>{
    document.cookie =`${input.name}=${input.value}; max-age=3600; `
  })
  location. reload()
})

if(getCookieValue(document.cookie.split("; "), 'FirstName')!=null){
  document.getElementById('FirstName').value = getCookieValue(document.cookie.split("; "), 'FirstName');
}