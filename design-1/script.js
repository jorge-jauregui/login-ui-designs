//toggle function to allow user the option of showing or hiding the password field

function showPassword() {

  const input = document.getElementById("password-input");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

//typed.js animation settings

var typed = new Typed('#login', {
strings: [". . ."],
typeSpeed: 200,
loop: true,
showCursor: false,
fadeOut: true,
smartBackspace: false 
});