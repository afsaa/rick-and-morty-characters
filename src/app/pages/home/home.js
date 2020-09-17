import { fetchCharacters } from "../../api/";

// DOM elements
const rootElement = document.querySelector("#root");
const mainHeading = document.createElement("h1");
const charactersContainer = document.createElement("div");
charactersContainer.setAttribute("class", "characters__container");

// Info API data
let nextPage = "";

// Loading characters
const loadCharacters = async (nextPageUrl) => {
  // In case we reach the max number of characters
  if (nextPageUrl === null) {
    const noMoreCharactersHeading = document.createElement("h3");
    noMoreCharactersHeading.innerHTML = "No hay más personajes!";
    noMoreCharactersHeading.style.textAlign = "center";
    charactersContainer.appendChild(noMoreCharactersHeading);
  }

  // First time loading
  if (nextPageUrl === "") {
    await fetchCharacters()
      .then(({ info, results }) => {
        nextPage = info.next;
        results.map((character) => {
          const characterContainer = document.createElement("div");
          const characterImage = document.createElement("img");
          const characterName = document.createElement("p");

          characterContainer.setAttribute("class", "character");
          characterImage.src = character.image;
          characterImage.setAttribute("key", `${character.id}`);
          characterImage.setAttribute("class", "img-thumbnail");
          characterName.innerText = `${character.name}`;

          charactersContainer.appendChild(characterContainer);
          characterContainer.appendChild(characterImage);
          characterContainer.appendChild(characterName);
        });
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }

  // Loading next page characters
  await fetchCharacters(nextPageUrl)
    .then(({ info, results }) => {
      nextPage = info.next;
      results.map((character) => {
        const characterContainer = document.createElement("div");
        const characterImage = document.createElement("img");
        const characterName = document.createElement("p");

        characterContainer.setAttribute("class", "character");
        characterImage.src = character.image;
        characterImage.setAttribute("key", `${character.id}`);
        characterImage.setAttribute("class", "img-thumbnail");
        characterName.innerText = `${character.name}`;

        charactersContainer.appendChild(characterContainer);
        characterContainer.appendChild(characterImage);
        characterContainer.appendChild(characterName);
      });
    })
    .catch((err) => {
      console.error("Error", err);
    });
};

export const home = () => {
  rootElement.style.textAlign = "center";
  mainHeading.innerHTML = "Rick & Morty Characters";
  mainHeading.style.textAlign = "center";
  rootElement.appendChild(mainHeading);
  rootElement.appendChild(charactersContainer);

  // Detect when scrolled to bottom.
  charactersContainer.addEventListener("scroll", function () {
    if (
      charactersContainer.scrollTop + charactersContainer.clientHeight >=
      charactersContainer.scrollHeight - 200
    ) {
      loadCharacters(nextPage);
    }
  });

  loadCharacters();
};
