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

  var lowercaseallowed = true;
  var lowercase = "htzgyvdbkaqrcxuslpmnijofew";

  var hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    alert(" Password will have lowercase characters.");
  } else {
    alert(" Password won't have lowercase characters.");
  }
  
  var uppercaseallowed = true;
  var uppercase = "RCKXUJVLPITODZSABNQHWFEMYG";
  var hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert(" Password will have uppercase characters.");
  } else {
    alert(" Password won't have uppercase characters.");
  }
  
  var numbers = "279850364"
  var hasNumbers = confirm("Do you want to use numbers?");

  if (hasNumbers) {
    alert(" Password will have numbers.");
  } else {
    alert(" Password won't have numbers.");
  }
 
  var specialchars = "^&*!@_%()#+$#";
  var hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  } else {
    alert("Your password won't have special characters.");
  }
  var possibleCharacters = "";
  if (hasLowercase) {
    possibleCharacters += lowercase;
  }
  if (hasUppercase) {
    possibleCharacters += uppercase;
  }
  if (hasNumbers) {
    possibleCharacters += numbers;
  }
  if (hasSpecial) {
    possibleCharacters += specialchars;
  }

  var finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters.charAt(rng);
  }

  return finalPassword;
}

console.log(generatePassword());

function generateAndDisplayPassword() {
  var password = generatePassword();
  var passwordElement = document.getElementById("password");
  passwordElement.textContent = password;
}
