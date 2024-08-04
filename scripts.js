// Function to handle subscription logic
function subscribe() {
    // Get the email input value
    const email = document.getElementById('email').value;
    // Get the error message container
    const errorDiv = document.getElementById('error');
    // Get the success message container
    const successDiv = document.getElementById('success');
  
    // Function to validate the email format
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    }
  
    // Clear any previous messages
    errorDiv.innerHTML = '';
    successDiv.innerHTML = '';
  
    // Validate the email input
    if (!validateEmail(email)) {
      errorDiv.innerHTML = 'Invalid email. Please enter a valid email address.';
      return;
    }
  
    // Simulate an API call to subscribe the user
    setTimeout(() => {
      successDiv.innerHTML = 'You have successfully subscribed to the newsletter!';
      document.getElementById('email').value = ''; // Clear the email input
    }, 500);
  }
  