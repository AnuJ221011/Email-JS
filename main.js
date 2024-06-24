// Ensure that EmailJS is properly initialized
emailjs.init('NCSb_BGegKZk9vMF2');

// Function to send email using EmailJS
function sendEmail(event) {
 
 // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(name, email, message)
  // Define the email parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send email using EmailJS
  emailjs.send('service_b7vnve9', 'template_zggu64p', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      // Clear the form after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send your message. Please try again later.');
    });
}

// Add event listener to the form submission
document.querySelector('form').addEventListener('submit', sendEmail);
