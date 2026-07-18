document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop standard form submission reload

    // Grab values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // 1. Name Validation
    if (name === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // 2. Email Validation (Regex Check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // 3. Phone Validation (Digits Only Check)
    const digitsRegex = /^\d+$/;
    if (!digitsRegex.test(phone) || phone === "") {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // 4. Message Validation
    if (message === "") {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // If all validation rules pass
    if (isValid) {
        alert('Thank you! Your form validation passed, and the message is ready and sent.');
        document.getElementById('contactForm').reset();
    }
});