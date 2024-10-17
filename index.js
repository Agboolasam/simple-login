// import {
//   formValidity,
//   checkNumber,
//   checkFname,
//   checkPass,
//   passwordError,
//   emailError,
// } from "./scripts/formErrorHandlers.js";

let pswd = document.getElementById("password");
let pswd2 = document.getElementById("password2");
let pswd3 = document.getElementById("confirm-password");
const viewPswd = document.getElementById("view-pswd");
const viewPswd2 = document.getElementById("view-pswd2");
const logInForm = document.getElementById("login-form");
const signUpForm = document.getElementById("signup-form");

//function to set error
function setError(element, errMsg) {
  element.textContent = errMsg;
}
//check emailpattern
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(email.value));
  return regex.test(email.value);
}
// check password and strength
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
  console.log(regex.test(password.value));
  return regex.test(password.value);
}
//email error handler setup
function emailError(email, emailErr) {
  if (email.value === "") {
    setError(emailErr, "Email is required");
    formValidity = false;
  } else if (!validateEmail(email.value)) {
    setError(emailErr, "Invalid Email");
    formValidity = false;
  }
}

let passInput = true;
//password length error handler
function passwordError(password, pswdErr) {
  if (password.value === "") {
    setError(pswdErr, "Password is required");
    passInput = false;
    formValidity = false;
  }
  //password length check
  else if (password.value.length < 8) {
    setError(pswdErr, "Password must contain atleast 8 characters");
    passInput = false;
    formValidity = false;
  } else if (!validatePassword(password.value)) {
    setError(
      pswdErr,
      "Password must contain Uppercase, Lowercase, Number and special character "
    );
  }
}
// confirm password error handler
function checkPass(pswd1, pswd2, pswdErr) {
  if (passInput && pswd1.value !== pswd2.value) {
    setError(pswdErr, "Password Mismatch");
    formValidity = false;
  }
}

// phone number error handler
function checkNumber(phone, phoneErr) {
  if (phone.value === "") {
    setError(phoneErr, "Phone Number  is required");
    formValidity = false;
  } else if (phone.value === NaN) {
    setError(phoneErr, "Invalid  Phone Number");
    formValidity = false;
  }
}

// fullname error handler
function checkFname(fName, fnErr) {
  if (fName.value === "") {
    setError(fnErr, "Full name  is required");
    formValidity = false;
  }
}

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
  clearError();
}
function logIn() {
  logInForm.style.display = "flex";
  signUpForm.style.display = "none";
  clearError();
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
let formValidity = true;

function regComp() {
  //Error messages
  const fnErrormsg = document.getElementById("fnErrormsg");
  const emailErrmsg = document.getElementById("emailErrmsg");

  const telErrmsg = document.getElementById("telErrmsg");
  const pswdErrmsg = document.getElementById("pswdErrmsg");
  const pswdErrmsg2 = document.getElementById("pswdErrmsg2");

  // Inputs
  const password2 = document.getElementById("password2");
  const confirmPassword = document.getElementById("confirm-password");
  const fullName = document.getElementById("full-name");
  const regEmail = document.getElementById("email2");
  const phoneNumber = document.getElementById("phoneNumber");

  clearError();
  checkFname(fullName, fnErrormsg);
  emailError(regEmail, emailErrmsg);
  checkNumber(phoneNumber, telErrmsg);
  passwordError(password2, pswdErrmsg);
  checkPass(pswd2, pswd3, pswdErrmsg2);
  // checkPass(pswd2, pswd3, pswdErrmsg);
  console.log(formValidity);
  return formValidity;
}

function signIn() {
  //error messages
  const emailErrmsg2 = document.getElementById("emailErrmsg2");
  const pswdErrmsg3 = document.getElementById("pswdErrmsg3");
  //inputs
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  clearError();
  passwordError(password, pswdErrmsg3);
  emailError(email, emailErrmsg2);
  validateEmail(email.value);
  validatePassword(password.value);
  return formValidity;
}
