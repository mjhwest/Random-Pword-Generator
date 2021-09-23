// Assignment Code
var generateBtn = document.querySelector("#generate");


// setting the password characters object 
var characterOptions = {
    numbers: "0123456789",
    specialChar: "!@#$%^&*()?><}{~",
    lowerLet: "abcdefghijklmnopqrstuvwxyz",
    upperLet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}


// Write password to the #password input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Function to generate a password 
function generatePassword() {


    // allowing user to select random password length 
    var generatorLength = prompt("How many characters do you want your password to be, it must be between 8-128.");

    // validating user input selection...if (!...inverts the generatorLength, else if applied for less than 8/ more than 128 and just right (within limit))
    if (!generatorLength) {
        alert("You didnt pick a number :(       ");
    } else if (generatorLength < 8) {
        alert("Not enough numbers! Pick MOREEEEEE");
    } else if (isNaN(generatorLength)) {
        alert("Hey! Dont be silly now. You gotta pick a number!!!") //isNaN is checking the vaule required is legal, i.e. is a number
    } else if (generatorLength > 128) {
        alert("Woooo, calm down now! Thats too many numbers, relax a bit");
    } else {
        alert("Thats gonna make one solid password :)           ")


        // Setting the parameters and confirming if the user wants to include each parameter in the password 
        paraNumbers = confirm("Select OK if you want NUMBERS in your password or CANCEL if you dont want numbers included");
        paraSpecialChar = confirm("Select OK if you want $PECIAL CH@R@CTER$ in your password  or CANCEL if you dont want special characters included");
        paraLowerLet = confirm("Select OK if you want LOWER CASEin your password or CANCEL if you dont want lower case letters included");
        paraUpperLet = confirm("Select OK if you want UPPER CASE letters in your password or CANCEL if you dont want upper case letter to be included ");

        //creating an empty string for the random password to go into
        var password = ""



        //creating an array named "random" that will have random character options pushed to it 
        var random = []


        // numbers are selected and pushed to array variable 'random', which is made up of random numbers
        // number characters are split into seperate numbers. i.e "1", "2", "3" instead of "123"
        //making array results random using 'array.protype.push.apply' 

        if (!paraNumbers && !paraSpecialChar && !paraLowerLet && !paraUpperLet) {
            alert(".....Seriously, If you really wanted a password, you need to pick at least 1 option!");
            return "";
        }

        if (paraNumbers) {
            var num = characterOptions.numbers.split("")
            Array.prototype.push.apply(random, num)
            var prePassWord = Math.floor(Math.random() * characterOptions.numbers.length)
            password += characterOptions.numbers[prePassWord]
            generatorLength--
            // console.log(password)
        }

        if (paraSpecialChar) {
            var special = characterOptions.specialChar.split("")
            Array.prototype.push.apply(random, special)
            var prePassWord = Math.floor(Math.random() * characterOptions.specialChar.length)
            password += characterOptions.specialChar[prePassWord]
            generatorLength--
            // console.log(password)
        }

        if (paraLowerLet) {
            var lower = characterOptions.lowerLet.split("")
            Array.prototype.push.apply(random, lower)
            var prePassWord = Math.floor(Math.random() * characterOptions.lowerLet.length)
            password += characterOptions.lowerLet[prePassWord]
            generatorLength--
            // console.log(password)
        }

        if (paraUpperLet) {
            var upper = characterOptions.upperLet.split("")
            Array.prototype.push.apply(random, upper)
            var prePassWord = Math.floor(Math.random() * characterOptions.upperLet.length)
            password += characterOptions.upperLet[prePassWord]
            generatorLength--
            // console.log(password)
        }


        //creating a forloop, variable i=0 is making baseline for variables ,  i < generatorLength is the prompt condition 
        //that user selects i.e. how long the password will be, the i++ is an incrmeent increading the generaotr length by 1 
        //every time the loop condition is true, until it is reached the end of condition 
        for (var i = 0; i <= generatorLength; i++) {
            var prePassWord = Math.floor(Math.random() * random.length)
            password += random[prePassWord]
        }




        // //ending the function and creating random password, that user selectes character legnth and if they want nuumbers, special characters, upper and lower cases letters to be included in it. 
        return password;

    }


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);