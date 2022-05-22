// Assignment code here

function generatePassword() {
  // Variable Declaration
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var Numbers = "1234567890";
  var Special = "`~!@#$%^&*()_-=+[]{}|;':\",.<>?";


  // Characters Types
  var TotalCharTypes = "";
  var UpperCaseConfirm = "";
  var LowerCaseConfirm = "";
  var NumbersConfirm = "";
  var SpecialConfirm = "";
  var Index = "";
  var CharacterAdder = "";
  var CharacterPassword = "";


  CharTypeUserInput();


  function CharTypeUserInput() {
    TotalCharacters = "";

    //  Password Length 8-128 Characters
    CharacterLength = parseInt(prompt("How many characters would you like your password to contain?"))
    if (isNaN(CharacterLength)) {
      alert("Try again, you must enter numbers and specify the length of charachters between 8-128.");
      return;
    } else if (CharacterLength < 8 || CharacterLength > 128) {
      alert("Try again, you must enter a length of charachters between 8-128.");
      return;
    }

    // Confirm Upper Case
    UpperCaseConfirm = confirm("Would you like to include Upper case Characters in your Password?")
    //Confirm Lower Case
    LowerCaseConfirm = confirm("Would you like to include Lower case Characters in your Password?")
    //Confirm Numbers
    NumbersConfirm = confirm("Would you like to include Numbers in your Password?")
    //Confirm Special Characters
    SpecialConfirm = confirm("Would you like to include Special Characters in your Password?")
  }

  // if statements
  if (UpperCaseConfirm === true) {
    TotalCharacters = TotalCharacters + UpperCase;
  }

  if (LowerCaseConfirm === true) {
    TotalCharacters = TotalCharacters + LowerCase;
  }

  if (NumbersConfirm === true) {
    TotalCharacters = TotalCharacters + Numbers;
  }

  if (SpecialConfirm === true) {
    TotalCharacters = TotalCharacters + Special;
  }

  //  Password Generator
  for (var i = CharacterLength; i > 0; i--) {
    Index = Math.floor(Math.random() * TotalCharacters.length);
    CharacterAdder = TotalCharacters[Index];
    CharacterPassword = CharacterPassword + CharacterAdder;
  } return (CharacterPassword)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
