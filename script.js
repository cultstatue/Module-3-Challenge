
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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// special character value array
var specialCharacter = ['?', '!', '%', '@', '&', '=', '+', '-', '#', '~']

// merge all arrays
var allValues = [...upperCase, ...lowerCase, ...numbers, ...specialCharacter];

// merge upper lower and number
var upLowNum = [...upperCase, ...lowerCase, ...numbers];
// merge upper lower and special
var upLowSpec = [...upperCase, ...lowerCase, ...specialCharacter];
// merge upper num special
var upNumSpec = [...upperCase, ...numbers, ...specialCharacter];
// merge lower num special
var lowNumSpec = [...lowerCase, ...numbers, ...specialCharacter];
// merge up and low
var upLow = [...upperCase, ...lowerCase];
// merge up and num
var upNum = [...upperCase, ...numbers];
// merge up and special
var upSpec = [...upperCase, ...specialCharacter];
// merge low and num
var lowNum = [...lowerCase, ...numbers];
// merge low and spec
var lowSpec = [...lowerCase, ...specialCharacter];
// merge num and spec
var numSpec = [...numbers, ...specialCharacter];




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
  
  // setting global variables
  passwordPreferences = {

    length: choosePasswordLength,
    upper: upperCaseConfirm,
    lower: lowercaseConfirm,
    number: numberConfirm,
    special: specialConfirm,
    
  };

};

// function to generate random values as an array
var generateValues = function(random) {

  var randomArray = [];

  for (i = 0; i < passwordPreferences.length; i++) {

    randomArray.push(random[randomNumber(0,(random.length - 1))]);

  };

 return randomArray;

}

// function to generate password
var generatePassword = function() {
  
  // collect prompt answers
  valuePrompt();

  if(passwordPreferences.upper && passwordPreferences.lower && passwordPreferences.number && passwordPreferences.special) {
    var passwordArray = generateValues(allValues);
  }

  else if (passwordPreferences.upper && passwordPreferences.lower && passwordPreferences.number) {
    var passwordArray = generateValues(upLowNum);
  }

  else if (passwordPreferences.upper && passwordPreferences.lower && passwordPreferences.special) {
    var passwordArray = generateValues(upLowSpec);
  }

  else if (passwordPreferences.upper && passwordPreferences.number && passwordPreferences.special) {
    var passwordArray = generateValues(upNumSpec);
  }

  else if (passwordPreferences.lower && passwordPreferences.number && passwordPreferences.special) {
    var passwordArray = generateValues(lowNumSpec);
  }
  else if (passwordPreferences.lower && passwordPreferences.number) {
    var passwordArray = generateValues(lowNum);
  }
  else if (passwordPreferences.lower && passwordPreferences.special) {
    var passwordArray = generateValues(lowSpec);
  }
  else if (passwordPreferences.upper && passwordPreferences.lower) {
    var passwordArray = generateValues(upLow);
  }
  else if (passwordPreferences.upper && passwordPreferences.number) {
    var passwordArray = generateValues(upNum);
  }
  else if (passwordPreferences.upper && passwordPreferences.special) {
    var passwordArray = generateValues(upSpec);
  }
  else if (passwordPreferences.number && passwordPreferences.special) {
    var passwordArray = generateValues(numSpec);
  }
  else if (passwordPreferences.upper) {
    var passwordArray = generateValues(upperCase);
  }
  else if (passwordPreferences.lower) {
    var passwordArray = generateValues(lowerCase);
  }
  else if (passwordPreferences.number) {
    var passwordArray = generateValues(numbers);
  }
  else if (passwordPreferences.special) {
    var passwordArray = generateValues(specialCharacter);
  };

 var passwordFinal = (passwordArray.join(''));

 return passwordFinal;
};


 
generatePassword();

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



