function generatePoem(event) {
  event.preventDefault();

  console.log("Generating....");

  //let poemElement = document.querySelector("#poem");
  //poemElement.innerHTML = "La tombe dit à la rose";
  //use type writer instead

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    cursor: "",
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
