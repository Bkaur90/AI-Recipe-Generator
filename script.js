function SearchRecipe(event) {
  event.preventDefault();
  new Typewriter(".recipe-container", {
    strings: "Recipe content will be displayed here",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let formElement = document.querySelector("#recipe-form");
formElement.addEventListener("submit", SearchRecipe);

