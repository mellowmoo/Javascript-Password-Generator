// Button Variables
var generateBtn = document.querySelector("#generate");

//User Input Variables  THE "u" IS AN ABBREVIATION FOR USER
var enter;
var uNumber;
var uCharacter;
var uUppercase;
var uLowercase;

// Password Variable Arrays
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// alphaUp variable for use in the loop for uppercase conversion
var alphaUp = alpha.map(toUpper);

// Declaring uChoice Variable to avoid "not defined" errors
var uChoice = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var finalPass = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPass;

}

// uppercase conversion function
function toUpper(x) {
  return x.toUpperCase();
}

// Generate Password Function
function generatePassword() {
  // User input
  var passSize = parseInt(prompt("How many characters, between 8 and 128, do you want your password to be?"));
  if (!passSize) {
    alert("You must provide a value.");
  
    // checks if password meets size requirements
  } else if (passSize < 8 || passSize > 128) {
    passSize = parseInt(prompt("Password size must be between 8 and 128 characters."));
  
  }else {
    // User input continued
    var uNumber = confirm("Does the password need numbers?");
    var uCharacter = confirm("Does the password require special characters?");
    var uUppercase = confirm("Will the password contain uppercase letters?");
    var uLowercase = confirm("Will the password contain lowercase letters?");
    
  }
  // Check for 4 positive
  if (!uCharacter && !uUppercase && !uLowercase && !uNumber) {
    uChoice = alert("You must chose at least one option.");
  }
  if (uCharacter) {
    uChoice = uChoice.concat(character);
  }
  if (uNumber) {
    uChoice = uChoice.concat(number);
  }
  if (uUppercase) {
    uChoice = uChoice.concat(alphaUp);
  }
  if (uLowercase) {
     uChoice = uChoice.concat(alpha);
   } 
 
  // Declaration of placeholder variable for password as an ARRAY 
  var password = [];
  
  // Random selecttion of variables to place into password
  for (i = 0; i < passSize; i++) {
    var processedChoices = uChoice[Math.floor(Math.random() * uChoice.length)];
    password.push(processedChoices);
  }
  
  // converting the password array to a string
  var finalPass = password.join("");
  return finalPass;
  
}

// TODO: Maybe add a copy to clipboard function

