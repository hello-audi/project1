function validateForm() {
  let x = document.form["fname"].value;
  if (x == "") {
    alert("First name cannot be empty");
    return false;
  }
}