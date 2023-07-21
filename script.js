// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// creating a function
function generatePassword(){
  // console.log("Good job! You clicked the right button!")
// prompts user to input a password length
  var passwordLength = parseInt(prompt("Enter the desired password length:"));

// makes sure that the users use a valid length password
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }


  // prompt user for password criteria
  // prompt user if they want numbers or special characters or upercase letters

  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");


  var characterPool = '';
  if (includeUppercase) characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) characterPool += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) characterPool += '0123456789';
  if (includeSpecialChars) characterPool += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (characterPool.length === 0) {
    alert("Please select at least one character type for the password.");
    return "";
  }
  
  
  // i need to validate input
  // i need to generate a password
 
// loops that create a random password based on the criteria that user gave and is stored in the 'characterPool' var
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }
 
  return password;
}

// this generates random password and shows up on webpage.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Added event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
 const includeSpecialChars = window.confirm('Include special characters?');
  
  

 