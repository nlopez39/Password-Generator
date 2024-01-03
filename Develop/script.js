// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  //password criteria prompts given to the user. This determines what kind of password the user wants 
  //while loop to check whether the user entered a number between 8 and 128
  var lengthCriteria = true; 
  while(lengthCriteria){
     var passwordLength = prompt("Enter a number of characters between 8 and 128");
     if(passwordLength < 8 || passwordLength > 128){
      lengthCriteria = true; 
     }
     else{
      lengthCriteria = false; 
     }
  }
 //while loop to make sure that user selects at least one character type
  var type = true;
  while(type){
    var lowerCase = prompt("Would you like lowercase characters (y/n)?");
    var upperCase = prompt("Would you like uppercase characters (y/n)?");
    var numerics = prompt("Would you like numeric characters (y/n)?");
    var specialChars = prompt("Would you like special characters characters (y/n)?");

  //check that at least one character type was selected. It is required 
  if(lowerCase ===  "n" && upperCase === "n" && numerics=== "n" && specialChars === "n"){
     alert("You must select at least one character type");
  }
  else{
    type = false; 
  }

  }
  //generate a random password with the specified characteristics 
  //this will be the temp variable that holds the password 
  var allChars = "";
  var password = "";

  //if lowercase type was chosen then add all the lowercase letters to the temp string variable 
  if(lowerCase === "y"){
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }
  //if Uppercase type was chosen then add all the lowercase letters to the temp string variable 
  if(upperCase === "y"){
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //if numerics type was chosen then add all the lowercase letters to the temp string variable 
  if(numerics === "y"){
    allChars += "0123456789";
  }
  //if specialChars type was chosen then add all the lowercase letters to the temp string variable 
  if(specialChars === "y"){
    allChars +="@#$%^&*()_+-=[]{}|;':,.<>?/";
  }
  //for loop will create a random password with the user input length 
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
