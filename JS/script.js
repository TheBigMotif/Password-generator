
// Global variables
var charLength = 8; //Temporal value assigned to our character length, this value will change
var chars = []; //This will serve as an array where we'll store the user prompts
var specialChar = ['!', '@', '#', '$', '%', '^', '&','*','(',')','_','+','{','}'] //Our special characters, not all of them are here
var numbers = ['0','1','2','3','4','5','6','7','8','9']; //Our numbers separated
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Assignment code here
var generateBtn = document.querySelector("#generate"); 

// FUNCTION to generate password based on user prompts
function generatePassword(){ // 4. Generate password will return a result based on our validate criteria
  var password = ""; // Our variable starts with a value of nothing
  for (var i = 0; i < charLength; i++){ 
  var randomChar = Math.floor(Math.random() * chars.length); //Code obtained from: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
  password = password + chars[randomChar]; // Basically, password will be this variable, plus, a new onew that will randomize our password
}

return password

}
// Write password to the #password input
function writePassword() {  // 2. This is where our code starts executing
  var acceptedPrompts = userPrompts(); // 2.1 At this point, it will go to our next function
  
  if(acceptedPrompts){ 
    var userPassword = generatePassword(); // Now we will call and execute our next function
    var passwordText = document.querySelector("#password");

    passwordText.value = userPassword;
  } else {
    passwordText.value = "";
  }
  
}


function userPrompts(){ // 3. This function will get user prompts based on our criteria, once it's done, we go back to writePassword
  chars = [];
  charLength = parseInt(prompt("How many characters (8 - 128)?"));
  if(isNaN(charLength) || charLength < 8 || charLength > 128){ // If our criteria is not met, user will be asked to try again
    //Conditional obtained from: https://stackoverflow.com/questions/68977507/user-to-select-certain-numbers-from-prompt
    alert("You must enter a number for the length and 8 - 128 characters");
    return false;
  } //For each if, it will concatenate, or not, based on user prompts
  if (confirm("Lower case?")){
    chars = chars.concat(lowerCase);
  }
  if (confirm("Upper case?")){
    chars = chars.concat(upperCase);
  }
  if (confirm("Special characters?")){
    chars = chars.concat(specialChar);
  }
  if (confirm("Numbers?")){
    chars = chars.concat(numbers);
  }
  return true; //Code refactored from: https://stackoverflow.com/questions/72625400/the-output-of-my-password-generator-is-less-than-desired

  
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); // 1. Our code starts here
