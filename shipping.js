const form = document.getElementById("form");

const mailid = document.getElementById("mailid");
const mobilenumber = document.getElementById("mobilenumber");
const productcode = document.getElementById("productcode");
const processing_form = document.querySelector(".processing_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (mailid.value && mobilenumber.value && productcode.value) {
    processing_form.style.visibility = "visible";
    setTimeout(() => {
      window.location.replace("otp.html");
    }, 3000);
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const mailidValue = mailid.value.trim();
  const mobilenumberValue = mobilenumber.value.trim();
  const productcodeValue = productcode.value.trim();

  if (mailidValue === "") {
    setErrorFor(mailid, "Mail Id");
  } else {
    setSuccessFor(mailid);
  }
  if (mobilenumberValue === "") {
    setErrorFor(mobilenumber, "Mobile Number cannot be blank");
  } else {
    setSuccessFor(mobilenumber);
  }
  if (productcodeValue === "") {
    setErrorFor(productcode, "Product Code cannot be blank");
  } else {
    setSuccessFor(productcode);
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
