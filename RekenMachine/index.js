const scherm = document.getElementById("scherm");

function Display(input) {
  scherm.value += input;
}

function Delete() {
  scherm.value = " ";
}

function Clear() {
  scherm.value = scherm.value.slice(0, -1);
}

function Reken() {
  try {
    scherm.value = eval(scherm.value);
  } catch (Error) {
    scherm.value = "Error";
  }
}
