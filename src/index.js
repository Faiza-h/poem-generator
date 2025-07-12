function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "0adtod78fced068b5db3ce4d3ce10842";
  let prompt = `User instructions: Generate a poem $(instructionsInput.value)`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and seperate each line with <br />. Sign the poem with `Faiza` inside a <strong> element. Make sure to follow users instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="hourglass">⏳</div>Generating the poem about ${instructionsInput.value}...`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
