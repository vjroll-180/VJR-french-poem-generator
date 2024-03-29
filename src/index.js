function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    pauseFor: 1000,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  new Typewriter("#poem", {
    strings: "Generating...",
    autoStart: true,
    cursor: "",
  });

  let apiKey = "13da71b4bebee18bac0t70ddd06fbo9b";
  let instructionInput = document.querySelector("#user-instruction");
  let prompt = `Generate a french language poem based on the topic that the user input of ${instructionInput.value}`;
  let context = `You are a romantic french poem expert. Your mission is to generate a 4 line poem in basic HTML. It must have 4 lines. Do not include the poem title. Add <br/> between each line. After the last line of the poem, add a final <br/> followed by '<strong>-SheCodes AI👩‍💻</strong>' to show the poem was generated by AI `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
