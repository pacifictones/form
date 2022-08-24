const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passConfirm = document.getElementById('passConfirm');


const emailError = document.querySelector('#mail + span.error');
const countryError = document.querySelector('#country + span.error');
const zipError = document.querySelector('#zip + span.error');
const passwordError = document.querySelector('#password + span.error');
const passConfirmError = document.querySelector('#passConfirm + span.error');


form.addEventListener('submit', (event) => {
    
    if(!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid) {
        showEmailError();
        showCountryError();
        showZipError();
        showPassError();
        showPassConfirmError();
        event.preventDefault();
    }
})



email.addEventListener('input', validateEmail);
email.addEventListener('blur', validateEmail);

function validateEmail() {
   if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    }  else {
        showEmailError();
    } 
}






 country.addEventListener('input', validateCountry);
 country.addEventListener('blur', validateCountry);

 function validateCountry(){
    if (country.validity.valid) {
            countryError.textContent = '';
            countryError.className = 'error';
        } else {
            showCountryError();
        }
 }
    


zip.addEventListener('input', validateZip);
zip.addEventListener('blur', validateZip);

function validateZip() {
    if (zip.validity.valid) {
        zipError.textContent = '';
        zipError.className = 'error';
    } else {
        showZipError();
    }
}
    

password.addEventListener('input', validatePassword);
password.addEventListener('blur', validatePassword);

function validatePassword() {
    if (password.validity.valid) {
            passwordError.textContent = '';
            passwordError.className = 'error';
        } else {
            showPassError();
        }
}
    
passConfirm.addEventListener('input', validatePassConfirm);
passConfirm.addEventListener('blur', validatePassConfirm);

function validatePassConfirm() {
    if (passConfirm.value === password.value) {
        passConfirmError.textContent = '';
        passConfirmError.className = 'error';
    } else {
        showPassConfirmError();
    }
}

function showEmailError() {
    if (email.validity.valueMissing){
        emailError.textContent = `Don't forget your email!`
    } else if (email.validity.typeMismatch ) {
        emailError.textContent = 'Please enter a valid email'
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}. `   
    } 

    emailError.className = 'error active';
}

function showCountryError() {
    if (country.validity.valueMissing){
        countryError.textContent = "Enter your country"
    } else if (country.validity.tooShort) {
        countryError.textContent = 'This is too short to be a country'
    }

    countryError.className = 'error active';

}

function showZipError() {
    if (zip.validity.valueMissing) {
        zipError.textContent = "Please enter a zip code"
    }
    zipError.className = 'error active';
}

function showPassError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'Please enter a password';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Please enter at least ${password.minLength} characters; you entered ${password.value.length}.`
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = 'Password must contain at least one number and one uppercase and lowercase letter'
    }

    passwordError.className = 'error active';
}

function showPassConfirmError() {
    if (passConfirm.validity.valueMissing) {
        passConfirmError.textContent = 'Please confirm your password'      
    } else if (passConfirm.value !== password.value) {
        passConfirmError.textContent = 'Passwords do not match'
        
    }
    passConfirmError.className = 'error active';

}












