document.getElementById('saveContactBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  var name = 'Archie Lopez';
  var phoneNumber = '+639664007858';
  var email = 'lopezchin08@gmail.com';

  // Prepare contact information
  var contactInfo = `Name: ${name}\nPhone: ${phoneNumber}\nEmail: ${email}`;

  // Copy to clipboard
  navigator.clipboard.writeText(contactInfo)
    .then(function() {
      alert('Contact information copied to clipboard.');
    })
    .catch(function(err) {
      console.error('Error copying to clipboard: ', err);
    });
});

// document.getElementById('saveContactBtn').addEventListener('click', function(e) {
//   e.preventDefault();

//   generateVCard();

// });


// function generateVCard() {
//     // Get contact information from the user
//     var fullname = "Archie Lopez";
//     var phoneNumber = "+639664007858";
//     var email = "lopezchin08@gmail.com";

//     // Create vCard content
//     var vCardData = `BEGIN:VCARD
//                       VERSION:3.0
//                       FN:`+fullname+`
//                       TEL:`+phoneNumber+`
//                       EMAIL:`+email+`
//                       END:VCARD`;

//     // Create a Blob containing the vCard data
//     var blob = new Blob([vCardData], { type: 'text/vcard' });

//     // Create a download link
//     var link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.download = fullname+'.vcf';
//     link.click();
// }

// Call the function when the page is loaded (for testing purposes)
// generateVCard();