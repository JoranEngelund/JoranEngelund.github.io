const form = document.querySelector(".contact-form");
const inputName = document.querySelector("#full-name");
const nameError = document.querySelector(".name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector(".subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector(".message-error");
const validationMessage = document.querySelector(".validation-message");
const submit = document.querySelector(".submit-cta");

const lengthChecker = (value, len) => {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

const emailValidator = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const pattern = regEx.test(email);
  return pattern;
};

submit.disabled = true;
let validForm = false;

const formValidation = () => {
  if (lengthChecker(inputName.value, 4) === true) {
    validForm = true;
    nameError.innerHTML = "";
  } else {
    validForm = false;
    nameError.innerHTML = "Must contain minimum 5 characters";
  }
  if (lengthChecker(subject.value, 9) === true) {
    validForm = true;
    subjectError.innerHTML = "";
  } else {
    validForm = false;
    subjectError.innerHTML = "Must contain minimum 10 characters";
  }
  if (emailValidator(email.value) === true) {
    validForm = true;
    emailError.innerHTML = "";
  } else {
    validForm = false;
    emailError.innerHTML = "Please provide a valid email";
  }
  if (lengthChecker(message.value, 14) === true) {
    validForm = true;
    messageError.innerHTML = "";
  } else {
    validForm = false;
    messageError.innerHTML = "Must contain minimum 15 characters";
  }
};

const submitDisabled = () => {
  if (
    lengthChecker(inputName.value, 4) &&
    lengthChecker(subject.value, 9) &&
    emailValidator(email.value) &&
    lengthChecker(message.value, 14) === true
  ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

inputName.addEventListener("keyup", formValidation);
subject.addEventListener("keyup", formValidation);
email.addEventListener("keyup", formValidation);
message.addEventListener("keyup", formValidation);

inputName.addEventListener("keyup", submitDisabled);
subject.addEventListener("keyup", submitDisabled);
email.addEventListener("keyup", submitDisabled);
message.addEventListener("keyup", submitDisabled);

const formSubmitter = (event) => {
  event.preventDefault();
  form.remove();
  if (validForm === true) {
    validationMessage.innerHTML = `<p>Thank you, for sending me a message! I will answer you as fast as I can</p>`;
  } else {
    validationMessage.innerHTML = "";
  }
  form.reset();
  submit.disabled = true;
};

form.addEventListener("submit", formSubmitter);
