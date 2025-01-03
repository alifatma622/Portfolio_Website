
// fun of color mode 
document.getElementById('color-mode-button').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

//fun to make some validation on the form input
document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    event.preventDefault(); // not allow  the empty input filds form submission
    
    // the values of the inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Validate inputs

    const phonePattern = `[0-9]{3}-[0-9]{3}-[0-9]{4}`; //  like this format 123-456-7890 >>xxx-xxx-xxxx

    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in the format: 123-456-7890');
        return;
    }
    
    // when all filds achived all requirment appear this massage
    alert('Form submitted successfully!');
}
);

