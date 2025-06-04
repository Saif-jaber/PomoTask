function saveText() {
  const input = document.getElementById("task-input");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter a task to continue...");
    return;
  }

  localStorage.setItem("savedText", inputValue); // Save ONLY the string value
  window.location.href = "timerPage.html";      // Redirect to page 2
}
