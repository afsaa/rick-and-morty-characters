import { fetchCharacters } from "../../api/";

const rootElement = document.querySelector("#root");
const mainHeading = document.createElement("h1");

export const home = async () => {
  rootElement.style.textAlign = "center";
  mainHeading.innerHTML = "Rick & Morty Characters";
  mainHeading.style.textAlign = "center";
  rootElement.appendChild(mainHeading);

  await fetchCharacters()
    .then(({ results }) => {
      console.log(results);
      results.map((character) => {
        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.setAttribute("class", "img-thumbnail");
        rootElement.appendChild(characterImage);
      });
    })
    .catch((err) => {
      console.error("Error", err);
    });
};
