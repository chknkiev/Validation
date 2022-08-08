(function submitValidation() {
  const inputs = document.getElementsByClassName('input');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', event => {
    for(let i = 0; i < inputs.length; i++) {
      if(inputs[i].value == '') {
        submitButton.setCustomValidity('Please enter details in all fields');
        inputs[i].setAttribute('invalid', '');
      } else {
        submitButton.setCustomValidity('');
        inputs[i].setAttribute('valid', '');
      }
    }
    event.preventDefault;
  })
})();

(function emailValidation() {
const emailInput = document.getElementById('email');
const emailOnly = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

emailInput.addEventListener('input', () => {
  if(emailInput.value == '') {
    emailInput.setCustomValidity('Please enter your email');
  } else if(!emailOnly.test(emailInput.value)) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
});
})();

(function countryValidation() {
  const countryInput = document.getElementById('country');
  const lettersOnly = /^[a-zA-Z]+$/;

  countryInput.addEventListener('input', () => {
    if(countryInput.value == '') {
      countryInput.setCustomValidity('Please enter your country of origin');
      countryInput.setAttribute('invalid', '');
    } else if(lettersOnly.test(countryInput.value) == false) {
      countryInput.setCustomValidity('Please use letters')
      countryInput.setAttribute('invalid', '');
    } else {
      countryInput.setCustomValidity('');
      countryInput.setAttribute('valid', '');
    }
  });
})();

(function zipValidation() {
  const zipInput = document.getElementById('zipcode');
  const numbersOnly = /^[0-9]+$/;

  zipInput.addEventListener('input', () => {
    if(zipInput.value == '') {
      zipInput.setCustomValidity('Please enter your zipcode');
      zipInput.setAttribute('invalid', '');
    } else if(!numbersOnly.test(zipInput.value)) {
      zipInput.setCustomValidity('Only Numbers are permitted');
      zipInput.setAttribute('invalid', '');
    } else {
      zipInput.setCustomValidity('');
      zipInput.setAttribute('valid', '');
    }
  })
})();

(function passwordValidation() {
  const pwInput = document.getElementById('password');
  const pwConfirm = document.getElementById('confirmPW');
  const lettersOnly = /^[a-zA-Z0-9]+$/;

  pwInput.addEventListener('input', () => {
    if(pwInput.value == '') {
      pwInput.setCustomValidity('Please enter your password');
      pwInput.setAttribute('invalid', '');
    } else if(!lettersOnly.test(pwInput.value)) {
      pwInput.setCustomValidity('Letters and Numbers only')
      pwInput.setAttribute('invalid', '');
    } else {
      pwInput.setCustomValidity('');
      pwInput.setAttribute('valid', '');
    }
  });

  pwConfirm.addEventListener('input', () => {
    if(pwConfirm.value == '') {
      pwConfirm.setCustomValidity('Please confirm your password');
      pwConfirm.setAttribute('invalid', '');
    } else if(pwConfirm.value !== pwInput.value) {
      pwConfirm.setCustomValidity('Passwords do not match');
      pwConfirm.setAttribute('invalid', '');
    } else {
      pwConfirm.setCustomValidity('');
      pwConfirm.setAttribute('valid', '');
    }
  })
})();
