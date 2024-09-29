const showOverLay = document.querySelector(".overlay");
const showLoginForm = document.querySelector(".login-form");
var btnLogin=document.querySelector(".primary-btn");
var removeForm=document.querySelector(".overlay");
const popup = document.querySelector(".secondary-btn")
//show model
var show = ()=> {
      showOverLay.classList.add("show-overlay");
      showLoginForm.classList.add("show-loginform");
}
btnLogin.addEventListener("click",show);
//close model
 var remove = ()=>{
    showOverLay.classList.remove("show-overlay");
      showLoginForm.classList.remove("show-loginform");
}
removeForm.addEventListener("click",remove);
 // show confrime notification
  
var notification =()=>{
    alert("Login Successfull. Your response has been recorded")
}

popup.addEventListener("click",notification);
