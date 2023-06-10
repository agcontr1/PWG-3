function generatePassword() {
    console.log("Start");
  
  
    var numberOfCharacters = prompt("How many characters do you want in your password?");
    numberOfCharacters = parseInt(numberOfCharacters);
    
    var minlength = 8;
    var maxlength = 129;
    var lengthRange = minlength + '-' + maxlength;
    if (!(numberOfCharacters >= minlength && numberOfCharacters <= maxlength))
 {
    alert(" Password length must be between 8 and 128 characters. Please try again.");
    return;
  } else {
    alert(" Password will be " + numberOfCharacters + " characters long.");
  }

  