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



// random values
var randomNumber= function(min, max) {

  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;

}

// upercase value array
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// lowercase value array
var lowerCase = upperCase.map(letter => letter.toLowerCase());

// numeric value array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// special character value array
var specialCharacter = ['?', '!', '%', '@', '&', '=', '+', '-', '#', '~']



// function to prompt password value choices
var valuePrompt = function() {

  // ask user desired password length
  var choosePasswordLength = window.prompt("Enter a desired length for your password using a numeric value between 8 to 128.");

    // exclude certain values
    if (choosePasswordLength < 8 || choosePasswordLength > 128 || isNaN(choosePasswordLength)) {

      window.alert("Please enter a valid number between 8 to 128.");

      // return to start of valuePrompt function
      return valuePrompt();

    }

  // ask user if they want uppercase letters
  var upperCaseConfirm = window.confirm("Would you like to include uppercase letters?");

  // ask user if they want lowercase letters
  var lowercaseConfirm = window.confirm("Would you like to include lower case letters?");

  // ask user if they want numeric values
  var numberConfirm = window.confirm("Would you like to include numbers?");

  // ask user if they want special character values
  var specialConfirm = window.confirm("Would you like to include special characters?");

  
  var passwordPreferences = {

    length: choosePasswordLength,
    upper: upperCaseConfirm,
    lower: lowercaseConfirm,
    number: numberConfirm,
    special: specialConfirm,
    
  }
  
  console.log(passwordPreferences);

  return;
  
};




// function to generate password
var d = function() {

  for (i = 0; i < passwordLength; i++) {

   var randomUpperCase = upperCase[randomNumber(0,(upperCase.length - 1))];

   console.log(randomUpperCase);

  }

}

valuePrompt();