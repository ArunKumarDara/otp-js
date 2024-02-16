const inputContainer = document.querySelector(".otp");
inputContainer.firstElementChild.focus();
inputContainer.addEventListener("keyup", (e) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    e.target.previousElementSibling?.focus();
  }
  if (e.target.value != "" && !isNaN(Number(e.target.value))) {
    e.target.nextElementSibling?.focus();
  }
});
