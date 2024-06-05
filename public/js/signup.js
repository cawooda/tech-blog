const $signUpForm = document.getElementById("sign-up-form");
const $logInForm = document.getElementById("log-in-form");

const $firstNameInput = document.getElementById("first-name-input");
const $lastNameInput = document.getElementById("last-name-input");
const $emailInput = document.getElementById("email-input");
const $passwordInput = document.getElementById("password-input");

function passwordValid(pwd) {
  if (pwd.length > 7) return true;
}

async function submitUserRegistration() {
  if (passwordValid($passwordInput.value)) {
    registrationObject = {
      first_name: $firstNameInput.value,
      last_name: $lastNameInput.value,
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        mode: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationObject),
      });
      if (response.ok) console.log("successfully created user");
      window.location.href = "../";
    } catch (error) {
      console.error(error);
    }
  }
}

$signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitUserRegistration();
});
