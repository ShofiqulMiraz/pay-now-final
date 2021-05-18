const form = document.getElementById("form");

const cardholdername = document.getElementById("cardholdername");
const cardnumber = document.getElementById("cardnumber");
const expirydate = document.getElementById("expirydate");
const cvv = document.getElementById("cvv");
const processing_form = document.querySelector(".processing_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (
    cardholdername.value &&
    cardnumber.value &&
    expirydate.value &&
    cvv.value
  ) {
    processing_form.style.visibility = "visible";
    setTimeout(() => {
      window.location.replace("shipping.html");
    }, 3000);
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const cardholdernameValue = cardholdername.value.trim();
  const cardnumberValue = cardnumber.value.trim();
  const expirydateValue = expirydate.value.trim();
  const cvvValue = cvv.value.trim();

  if (cardholdernameValue === "") {
    setErrorFor(cardholdername, "Username cannot be blank");
  } else {
    setSuccessFor(cardholdername);
  }
  if (cardnumberValue === "") {
    setErrorFor(cardnumber, "Card Number cannot be blank");
  } else {
    setSuccessFor(cardnumber);
  }
  if (expirydateValue === "") {
    setErrorFor(expirydate, "Expiry Date cannot be blank");
  } else {
    setSuccessFor(expirydate);
  }
  if (cvvValue === "") {
    setErrorFor(cvv, "Expiry Date cannot be blank");
  } else {
    setSuccessFor(cvv);
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
