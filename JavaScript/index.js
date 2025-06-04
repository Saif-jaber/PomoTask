
function saveText() {
    const input = document.getElementById("task-input").value;
    localStorage.setItem("savedText", input); // Save to localStorage
    window.location.href = "timerPage.html"; // Navigate to the next page
  }