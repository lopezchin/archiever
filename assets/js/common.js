document.getElementById('saveContactBtn').addEventListener('click', function() {
  // Replace the following URL with the actual endpoint to handle the contact saving on the server
  var saveContactEndpoint = 'https://example.com/saveContact';

  // Replace the following data with the actual contact details you want to save
  var contactData = {
    name: 'Archie Lopez',
    phone: '+639664007858',
    email: 'lopezchin08@gmail.com'
  };

  // Use fetch to send a POST request to the server
  fetch(saveContactEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the response from the server (if needed)
    console.log('Contact saved successfully:', data);
    alert('Contact saved successfully!');
  })
  .catch(error => {
    // Handle errors
    console.error('Error saving contact:', error);
    alert('Error saving contact. Please try again.');
  });
});