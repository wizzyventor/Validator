//const validatePhoneNumber = input => {}

//ptag.appendChild document.createTextNode (`$(phoneRegEx.TextInput) is a valid phone number`)

// Create a new file named validatePhoneNumber.js
const validatePhoneNumber = (input) => {
    const phoneRegEx = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    return phoneRegEx.test(input);
  };
  
  // Example usage
  const phoneNumber = "1234567890";
  const isValid = validatePhoneNumber(phoneNumber);
  console.log(`${phoneNumber} is a valid phone number: ${isValid}`);
