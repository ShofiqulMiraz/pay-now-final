const form = document.getElementById("form");

const otp = document.getElementById("otp");

const processing_form = document.querySelector(".processing_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (otp.value) {
    processing_form.style.visibility = "visible";
    setTimeout(() => {
      alert("send data to server");
      window.location.replace("index.html");
    }, 3000);
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const otpValue = otp.value.trim();

  if (otpValue === "") {
    setErrorFor(otp, "OTP cannot be blank");
  } else {
    setSuccessFor(otp);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
