import {
  formValidity,
  checkNumber,
  checkFname,
  checkPass,
  passwordError,
  emailError,
} from "./scripts/formErrorHandlers.js";

let pswd = document.getElementById("password");
let pswd2 = document.getElementById("password2");
let pswd3 = document.getElementById("confirm-password");
const viewPswd = document.getElementById("view-pswd");
const viewPswd2 = document.getElementById("view-pswd2");
const logInForm = document.getElementById("login-form");
const signUpForm = document.getElementById("signup-form");
const errorMsg = document.getElementById("errorMsg");

//Error messages
const fnErrormsg = document.getElementById("fnErrormsg");
const emailErrmsg = document.getElementById("emailErrmsg");
const emailErrmsg2 = document.getElementById("emailErrmsg2");
const telErrmsg = document.getElementById("telErrmsg");
const pswdErrmsg = document.getElementById("pswdErrmsg");
const pswdErrmsg2 = document.getElementById("pswdErrmsg2");
const pswdErrmsg3 = document.getElementById("pswdErrmsg3");
// Inputs
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const confirmPassword = document.getElementById("confirm-password");
const fullName = document.getElementById("full-name");
const regEmail = document.getElementById("email2");
const phoneNumber = document.getElementById("phoneNumber");
//view and hide passwords
function isChecked() {
  if (viewPswd.checked || viewPswd2.checked) {
    pswd.type = "text";
    pswd2.type = "text";
    pswd3.type = "text";
  } else {
    pswd.type = "password";
    pswd2.type = "password";
    pswd3.type = "password";
  }
}
// switching form
function register() {
  logInForm.style.display = "none";
  signUpForm.style.display = "flex";
}
function logIn() {
  logInForm.style.display = "flex";
  signUpForm.style.display = "none";
  errorMsg.style.display = "none";
}
//clear all error
function clearError() {
  fnErrormsg.textContent = "";
  pswdErrmsg.textContent = "";
  pswdErrmsg2.textContent = "";
  pswdErrmsg3.textContent = "";
  telErrmsg.textContent = "";
  emailErrmsg.textContent = "";
  emailErrmsg2.textContent = "";
}
function regComp() {
  let isValid = formValidity;
  clearError();
  checkNumber(phoneNumber, telErrmsg);
  checkFname(fullName, fnErrormsg);
  checkPass(pswd2, pswd3, pswdErrmsg3);
  passwordError(password, pswdErrmsg);
  passwordError(password2, pswdErrmsg2);
  passwordError(confirmPassword, pswdErrmsg3);
  emailError(email, emailErrmsg);
  emailError(regEmail, emailErrmsg2);

  return isValid;
}
