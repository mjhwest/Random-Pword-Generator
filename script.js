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

    // Inputing character options that can be randomly assigned to password. 
    var characterOptions = {
        numbers: "0123456789",
        specialChar: "\"\\ !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
        lowerLet: "abcdefghijklmnopqrstuvwxyz",
        upperLet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    // Setting the password parameters, i.e giving prompts for user to decide what is included in password
    var parameters = confirm("")
    paraNumbers = confirm("Select ok to confirm numbers will be incuded or cancel if you dont want numbers included");
    paraSpecialChar = confirm("Select ok to confirm special characters will be included or cancell if you dontwant special characters included");
    paraLowerLet = confirm("Select ok to confirm lower case letters will be included or cancel if you dont want lower case letters included");
    paraUpperLet = confirm("Select ok to confirm upper case letters will be included or cancel if you dont want upper case letter to be included ");


    // setting the condition of the array. 
    if (paraNumbers) {
        parameters += characterOptions.numbers
    }

    if (paraSpecialChar) {
        parameters += characterOptions.specialChar
    }

    if (paraLowerLet) {
        parameters += characterOptions.lowerLet
    }

    if (paraUpperLet) {
        parameters += characterOptions.upperLet
    }

    var finalRandomPass = ""
    for (i = 1; i <= generatorLength; i++) {
        finalRandomPass += parameters.charAt(Math.floor(Math.random() * parameters.length))
    }

    return "finalRandomPass";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);