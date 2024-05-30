const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');


console.log(firstName);

console.log(firstName, lastName, email, password);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  validateField(fName, firstName, '#input-div-firstname', 'First Name is required');
  validateField(lName, lastName, '#input-div-lastname', 'Last Name cannot be empty');
  validateEmailField(emailVal, email, '#input-div-email', 'Looks like this is not an email');
  validateField(passwordVal, password, '#input-div-password', 'Password is required');

});

function validateField(value, field, containerSelector, errorMessage) {
  const container = document.querySelector(containerSelector);
  const errorImage = container.querySelector('.error-image');
  let existingSpan = container.querySelector('.error-message');
  
  if (existingSpan) {
      existingSpan.remove();
  }

  if (value === '') {
      field.classList.add('error');
      errorImage.classList.add('show-error-image');
      const span = createAndAddSpan(errorMessage);
      container.appendChild(span);
  } else {
      field.classList.remove('error');
      errorImage.classList.remove('show-error-image');
  }
}

function validateEmailField(value, field, containerSelector, errorMessage) {
  const container = document.querySelector(containerSelector);
  const errorImage = container.querySelector('.error-image');
  let existingSpan = container.querySelector('.error-message');
  
  if (existingSpan) {
      existingSpan.remove();
  }

  if (!validateEmail(value) || value === '') {
      field.classList.add('error');
      errorImage.classList.add('show-error-image');
      const span = createAndAddSpan(errorMessage);
      container.appendChild(span);
  } else {
      field.classList.remove('error');
      errorImage.classList.remove('show-error-image');
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function createAndAddSpan(text) {
  const span = document.createElement('span');
  span.classList.add('error-message');
  span.textContent = text;
  return span;
}





    

