window.addEventListener("load", function () {
  let form = document.getElementById("membership-form");
  let membershipSelect = document.getElementById("membership-type");

  membershipSelect.addEventListener("change", calcFees);

  // Call once on load
  calcFees();

  function calcFees() {
    // Get selected membership cost from the dropdown value
    let membershipCost = Number(membershipSelect.value);

    // Fixed fees
    let enrollmentFee = 35;
    let annualFee = 25;
    let firstMonthDues = 30;

    // Calculate total
    let total = membershipCost + enrollmentFee + annualFee + firstMonthDues;

    // Update readonly fields
    document.getElementById("enrollment-fee").value = "$" + enrollmentFee;
    document.getElementById("annual-fee").value = "$" + annualFee;
    document.getElementById("first-month-dues").value = "$" + firstMonthDues;
    document.getElementById("total-cost").value = "$" + total;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("membership-form");
  const submitButton = document.getElementById("subButton");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Clear all previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.textContent = "");

    // Run all validations
    isValid = validateName() && isValid;
    isValid = validateEmail() && isValid;
    isValid = validatePhone() && isValid;
    isValid = validateCardName() && isValid;
    isValid = validateCardNumber() && isValid;
    isValid = validateExpiration() && isValid;
    isValid = validateCVC() && isValid;

    if (isValid) {
      form.submit(); // Only submit if all validations pass
    }
  });

  // Your existing validation functions go here...
  function validateName() {
    const name = document.getElementById("name");
    const errorElement = document.getElementById("name-error");
    if (name.value.trim() === "") {
      errorElement.textContent = "Please enter your full name.";
      return false;
    }
    return true;
  }

  function validateEmail() {
    const email = document.getElementById("email");
    const errorElement = document.getElementById("email-error");
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!pattern.test(email.value)) {
      errorElement.textContent = "Enter a valid email address.";
      return false;
    }
    return true;
  }

  function validatePhone() {
    const phone = document.getElementById("phone");
    const errorElement = document.getElementById("phone-error");
    const pattern = /^\d{10}$/;
    if (!pattern.test(phone.value)) {
      errorElement.textContent = "Enter a 10-digit phone number.";
      return false;
    }
    return true;
  }

  function validateCardName() {
    const cardName = document.getElementById("cardName");
    const errorElement = document.getElementById("cardName-error");
    if (cardName.value.trim() === "") {
      errorElement.textContent = "Enter the name on your card.";
      return false;
    }
    return true;
  }

  function validateCardNumber() {
    const cardNumber = document.getElementById("cardNumber");
    const errorElement = document.getElementById("cardNumber-error");
    const pattern = /^\d{16}$/;
    if (!pattern.test(cardNumber.value)) {
      errorElement.textContent = "Enter a 16-digit card number.";
      return false;
    }
    return true;
  }

  function validateExpiration() {
    const exp = document.getElementById("expiration-date");
    const errorElement = document.getElementById("expiration-error");
    if (exp.value === "") {
      errorElement.textContent = "Select the expiration date.";
      return false;
    }
    return true;
  }

  function validateCVC() {
    const cvc = document.getElementById("cvc");
    const errorElement = document.getElementById("cvc-error");
    const pattern = /^\d{3}$/;
    if (!pattern.test(cvc.value)) {
      errorElement.textContent = "Enter a 3-digit CVC.";
      return false;
    }
    return true;
  }
});
