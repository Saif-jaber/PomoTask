window.onload = function () {
  const taskMsg = document.getElementById("task-msg");
  const savedText = localStorage.getItem("savedText");
  taskMsg.value = savedText || "";  // Set saved task or empty string
};
