const showOverLay = document.querySelector(".overlay");
const showLoginForm = document.querySelector(".login-form");
var btnLogin = document.querySelector(".primary-btn");
var removeForm = document.querySelector(".overlay");
const popup = document.querySelector(".secondary-btn");
const inputs = document.querySelector(".input");
const pass = document.getElementById("password");
//show model
var show = () => {
  showOverLay.classList.add("show-overlay");
  showLoginForm.classList.add("show-loginform");
};
btnLogin.addEventListener("click", show);
//close model
var remove = () => {
  showOverLay.classList.remove("show-overlay");
  showLoginForm.classList.remove("show-loginform");
};
removeForm.addEventListener("click", remove);
// show confrime notification

var notification = () => {
  if (inputs.value == "" || pass.value == "") {
    alert("All inputs are required. please filled the input box then click the login button");
  } else {
    alert("Login Successfull. Your response has been recorded");
    inputs.value = "";
    pass.value = "";
  }
};

popup.addEventListener("click", notification);
