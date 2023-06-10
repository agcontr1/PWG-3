function generatePassword() {
    console.log("Start");
  
  
    var numberOfCharacters = prompt("How many characters do you want in your password?");
    numberOfCharacters = parseInt(numberOfCharacters);
    
    var minlength = 8;
    var maxlength = 129;
    var lengthRange = minlength + '-' + maxlength;