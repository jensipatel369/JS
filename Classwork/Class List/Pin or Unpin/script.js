let notes = document.querySelectorAll(".note");
let buttons = document.querySelectorAll(".btn-pin");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let note = notes[index];
    let Pin = note.style.backgroundColor === "rgb(255, 234, 167)";

    if (Pin) {
      note.style.backgroundColor = "";
      note.style.boxShadow = "";
      button.style.backgroundColor = "";
      button.textContent = "📌";
    } else {
      note.style.backgroundColor = "#ffeaa7";
      note.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      button.style.backgroundColor = "#ffeaa7";
      button.textContent = "📍";
    }
  });
});


