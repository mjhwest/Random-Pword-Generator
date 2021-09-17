// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("password");

passwordText.value = password; 

}

// Validate User Input 
function selectPasswordLength(userCharacters) 
{
  if (isNaN(userCharacters)) {
    alert("Enter a valid number.");
    return false; 
  } else if (parseInt(userCharacters) < 8) {
    alert("Password is too short, must be at least 8 characters long.");
    return false;
  } else if (parseInt(userCharacters) > 128) {
    alert("Password is too long, must be less than 128 characters long.");
    return false;

  } return true;
}

// Function to generate a password 
    function generatePassword() {

      var generatorLength = prompt("How many characters do you want your password to be, it must be between 8-128.");
      var passwordText = document.querySelector("#password");

      




    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
