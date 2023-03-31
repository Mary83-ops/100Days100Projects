const form = document.getElementById("password-form");
const generateBtn = document.getElementById("generate-btn");
const passwordDisplay = document.getElementById("password-display");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

generateBtn.addEventListener("click", () => {
  const length = document.getElementById("password-length").value;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";

  let chars = "";

  if (includeUppercase) {
    chars += uppercaseChars;
  }

  if (includeLowercase) {
    chars += lowercaseChars;
  }

  if (includeNumbers) {
    chars += numberChars;
  }

  if (includeSpecial) {
    chars += specialChars;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordDisplay.textContent = password;
});
