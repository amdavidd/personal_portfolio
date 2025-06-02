document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact_form');
    const messageDiv = document.getElementById('form_message');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                contactForm.reset(); // Reset the form on success
                showMessage('Your message has been sent! We will get back to you.', true);
            } 
            else {
                showMessage("There was a problem submitting your form. Please try again.", false);
            }
        })
        .catch(() => {
            showMessage("There was a problem with your submission. Please check your internet connection and try again.", false);
        });        
    });

    function showMessage(msg, success) {
        messageDiv.style.textAlign = "center";
        messageDiv.style.display = "block";
        messageDiv.textContent = msg;
        messageDiv.style.color = success ? "#2a9d8f" : "#e63946";
        messageDiv.style.fontWeight = "bold";
    }
});