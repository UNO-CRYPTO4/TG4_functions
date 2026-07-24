function checkGender() {
  // Prompt the user for their gender
  const gender = prompt("Enter your gender: Male or Female");

  // Normalize input (so case doesn’t matter)
  const normalizedGender = gender.trim().toLowerCase();

  // Conditional alerts
  if (normalizedGender === "female") {
    alert("You are a girl!👧🏽");
  } else if (normalizedGender === "male") {
    alert("You are a boy! 👦🏽");
  } else {
    alert("Invalid input. Please enter Male or Female.");
  }
}
