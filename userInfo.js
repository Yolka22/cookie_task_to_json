const cookieString = document.cookie;
            

function getCookieValue(cookieArray, cookieName) {
    for (const cookie of cookieArray) {
      const [name, value] = cookie.split("=");
      if (name === cookieName) {
        return value;
      }
    }
    return null;
  }

document.getElementById('hello').textContent+=` ${getCookieValue(cookieString.split("; "),'email')}`;
document.getElementById('exit').addEventListener('click',()=>{
    document.cookie="";
    window.location.replace("index.html");
})