// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// upercase value array
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// lowercase value array
var lowerCase = upperCase.map(letter => letter.toLowerCase());

// numeric value array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// special character value array
var specialCharacter = ['?', '!', '%', '@', '&', '=', '+', '-', '#', '~']

  
console.log(upperCase);
console.log(lowerCase);
console.log(number);
console.log(specialCharacter);

// function to generate random value between defined minimum and maximum

// function to generate password
var valuePrompt = function() {

  // ask user if they want uppercase letters
  var upperCaseConfirm = window.confirm("Would you like to include uppercase letters?");

    // if true include upperCase in possible password values
    if(upperCaseConfirm) {

      console.log("upper case yes");

    }
    // else do not include upperCase values
    else {

      console.log("upper case no");

    }

  // ask user if they want lowercase letters
  var lowercaseConfirm = window.confirm("Would you like to include lower case letters?");

     // if TRUE include lowerCase in possible password values
     if(lowercaseConfirm) {

      console.log(" lower case yes");

     }
     // else do not include lowerCase values
     else {

      console.log("lower case no");

     }

  // ask user if they want numeric values
  var numberConfirm = window.confirm("Would you like to include numbers?");

     // if TRUE include Numeric values
     if(numberConfirm) {

      console.log("numbers yes");

     }
     // else do not include Numeric values
     else {

      console.log("numbers no");
     }

  // ask user if they want special character values
  var specialConfirm = window.confirm("Would you like to include special characters?");
  
     // if True include specialCharacters in possible password values
     if(specialConfirm) {

      console.log("special characters yes");

     }
     // else do not include specialCharacters values
     else {

      console.log("special characters no");

     }

  // execute function to generate password

};

//valuePrompt();

