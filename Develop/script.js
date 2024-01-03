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
    var lowerCase = prompt("Would you like lowercase characters (y/n)?").toLowerCase();
    var upperCase = prompt("Would you like uppercase characters (y/n)?").toLowerCase();
    var numerics = prompt("Would you like numeric characters (y/n)?").toLowerCase();
    var specialChars = prompt("Would you like special characters characters (y/n)?").toLowerCase();

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
  //create 4 arrays 
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specCharArray =["@","#", "$" , "%", "^", "&" , "*", "(", ")", "_", "+", "-", "=", "[" ,"]", "{", "}", "|" , ";", "'", ":", ",", ".", "<", ">", "?", "/"];

  var tempArray = [];
  var password = "";

  //if lowercase type was chosen then concat the lowercase letters to the temp string array
  if(lowerCase === "y"){
    tempArray= tempArray.concat(lowerCaseArray);
  }
  //if Uppercase type was chosen then concat the upperCase letters to the temp string array 
  if(upperCase === "y"){
    tempArray= tempArray.concat(upperCaseArray);
  }
  //if numerics type was chosen then concat the numerics to the temp string array 
  if(numerics === "y"){
   tempArray= tempArray.concat(numericsArray);
  }
  //if specialChars type was chosen then concat the special characters to the temp string array
  if(specialChars === "y"){
    tempArray= tempArray.concat(specCharArray);
  }
  //for loop will create a random password with the user input length 
  for (var i = 0; i < passwordLength; i++) {
    //will choose a random number starting from 0 to the length of the allChars string
    //Math.floor rounds down that number to the closest integer
    var randomIndex = Math.floor(Math.random() * tempArray.length);
    password += tempArray[randomIndex];
  }

  return password;
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
