// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");

    passwordText.value = password;
}

// Function to generate a password 
function generatePassword() {

    // Inputing character options that can be randomly assigned to password. 
    var characterOptions = {
        numbers = "0123456789",
        specialChar = "\"\\ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
        lowerLet = "abcdefghijklmnopqrstuvwxyz",
        upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    var generatorLength = prompt("How many characters do you want your password to be, it must be between 8-128.");


    // Validate User Input ----NOT WORKING
    function selectPasswordLength(userCharacters) {
        if (isNaN(userCharacters)) {
            alert("Enter a valid number.");
            return false;
        } else if (parseInt(userCharacters) < 8) {
            alert("Password is too short, must be at least 8 characters long.");
            return false;
        } else if (parseInt(userCharacters) > 128) {
            alert("Password is too long, must be less than 128 characters long.");
            return false;

        } else
            return true;
    }

    // Get random characters from each arrray the user selects - NOT DONE


    // Setting the password parameters, i.e giving prompts for user to decide what is included in password


    var numbers = confirm("Select ok to confirm or cancel if you dont want numbers included");
    var specialChar = confirm("Select ok to confirm or cancell if you dontwant special characters included");
    var lowerLet = confirm("Select ok to confirm or cancel if you dont want lower case letters included");
    var upperLet = confirm("Select ok to confirm or cancel if you dont want upper case letter to be included ");




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);