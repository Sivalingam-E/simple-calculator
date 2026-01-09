const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (event) {
  const value = event.target.innerText;

  if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } 
  else if (value === "C") {
    display.value = "";
  } 
  else {
    display.value += value;
  }
});
