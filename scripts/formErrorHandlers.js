let formValidity = true;

//function to set error
function setError(element, errMsg) {
  element.textContent = errMsg;
}
//check emailpattern
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// check password and strength
function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
  return regex.test(password);
}
//email error handler setup
function emailError(email, emailErr) {
  if (email.value == "") {
    setError(emailErr, "Email is required");
    formValidity = false;
  } else if (!validateEmail(email)) {
    setError(emailErr, "Invalid Email");
    formValidity = false;
  }
}
//password length error handler
function passwordError(password, pswdErr) {
  if (password == "") {
    setError(pswdErr, "Password is required");
  }
  //password length check
  else if (password.length <= 8) {
    setError(pswdErr, "Password must contain atleast 8 characters");
    formValidity = false;
  } else if (!validatePassword(password)) {
    setError(
      pswdErr,
      "Password must contain Uppercase, Lowercase, Number and special character "
    );
  }
}
// confirm password error handler
function checkPass(pswd1, pswd2, pswdErr) {
  if (pswd1 !== pswd2) {
    setError(pswdErr, "Password Mismatch");
    formValidity = false;
  }
}

// phone number error handler
function checkNumber(phone, phoneErr) {
  if (phone.value == "") {
    setError(phoneErr, "Phone Number  is required");
    formValidity = false;
  }
}

// fullname error handler
function checkFname(fName, fnErr) {
  if (fName.value == "") {
    setError(fnErr, "Phone Number  is required");
    formValidity = false;
  }
}

export {
  formValidity,
  checkNumber,
  checkFname,
  checkPass,
  passwordError,
  emailError,
};
