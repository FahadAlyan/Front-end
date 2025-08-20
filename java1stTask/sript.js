function convertToDays() {
  let age = document.getElementById("age").value;

  if (age === "" || age < 0) {
    document.getElementById("result").innerText = " Please enter a valid age!";
    return;
  }

  let days = age * 365;

  document.getElementById("result").innerText =
    " Your age in days is: " + days + " days";
}

