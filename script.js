function displayRecipe(response) {
  new Typewriter(".recipe-container", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function SearchRecipe(event) {
  event.preventDefault();
  let recipeInputElement = document.querySelector("#recipe-input");
  let recipe = recipeInputElement.value;
  let apiKey = "ff2o8b1ffc14490t1c0bba91e21ca53c";
  let prompt = `Generate a recipe for ${recipe} with ingredients and clear instructions.`;
  let context =
    "Make sure the recipe is easy to follow and includes measurements for each ingredient. Be short and very brief about instructions and steps. Do not include any additional information or commentary. Place the name of the recipe at top in HTML using Strong element, Use <br /> tag for line breaks after receipe name, ingreditents and instrcuitions as well, and also use <strong> tags for Ingredents and instructions headings. Use numbers to display step by steps instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", SearchRecipe);
