// Button Variables
var generateBtn = document.querySelector("#generate");

//User Input Variables  THE "u" IS AN ABBREVIATION FOR USER
var enter;
var uNumber;
var uCharacter;
var uUppercase;
var uLowercase;

// Password Variable Arrays
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// alpha2 variable for use in the loop for uppercase conversion
alpha2 = alpha.map(toUpper);

// Declaring uChoice Variable to avoid "not defined" errors
var uChoice;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// uppercase conversion function
function toUpper(x) {
  return x.toUpperCase();
}

// Generate Password Function
function generatePassword() {
  // User input
  passSize = parseInt(prompt("How many characters, between 8 and 128, do you want your password to be?"));
  if (!passSize) {
    alert("You must provide a value.");
  
    // checks if password meets size requirements
  } else if (passSize < 8 || passSize > 128) {
    passSize = parseInt(prompt("Password size must be between 8 and 128 characters."));
  
  }else {
    // User input continued
    uNumber = confirm("Does the password need numbers?");
    uCharacter = confirm("Does the password require special characters?");
    uUppercase = confirm("Will the password contain uppercase letters?");
    uLowercase = confirm("Will the password contain lowercase letters?");
    
  }
  // Check for 4 negative options
  if (!uCharacter && !uUppercase && !uLowercase && !uNumber) {
    uChoice = alert("You must chose at least one option.");
  }
  // Checking for all Positive Choices
  else if (uCharacter && uNumber && uUppercase && uLowercase) {
    uChoice = character.concat(number, alpha, alpha2);
  }
  // Checking for 3 positive Choices
  else if (uCharacter && uNumber && uUppercase) {
    uChoice = character.concat(number, alpha2);
  }
  else if (uCharacter && uNumber && uLowercase) {
    uChoice = character.concat(number, alpha);
  }
  else if (uCharacter && uLowercase && uUppercase) {
    uChoice = character.concat(alpha, alpha2);
  }
  else if (uNumber && uLowercase && uUppercase) {
    uChoice = number.concat(alpha, alpha2);
  }

}

// TODO : else if for 4 negative inputs by the user, if statement that determines the choices made by the user, else if for all positive choices

