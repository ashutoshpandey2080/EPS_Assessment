document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault(); 
    
    const validationMessages = document.getElementById('validation-messages');
    validationMessages.innerHTML = '';

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true; 
    const errors = []; 

    if (!firstName) {
        valid = false;
        errors.push('First Name is required.');
    }
    if (!lastName) {
        valid = false;
        errors.push('Last Name is required.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        errors.push('Please enter a valid email address.');
    }
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(phoneNumber)) {
        valid = false;
        errors.push('Phone Number must be a valid 10-digit number.');
    }
    if (password.length < 8) {
        valid = false;
        errors.push('Password must be at least 8 characters long.');
    }
    if (!valid) {
        errors.forEach(error => {
            const message = document.createElement('div');
            message.textContent = error;
            validationMessages.appendChild(message);
        });
    } else {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
            password: password,
        };
        console.log(formData);
    }
    });
});
