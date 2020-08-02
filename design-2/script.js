//toggle function to allow user the option of showing or hiding the password field

function showPassword() {

    const input = document.getElementById("password-input");

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
}

