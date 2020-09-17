import { fetchCharacters } from "../../api/";

// DOM elements
const rootElement = document.querySelector("#root");
const mainHeading = document.createElement("h1");

// Info API data
let nextPage = "";

// Loading characters
const loadCharacters = async (nextPageUrl) => {
  // In case we reach the max number of characters
  if (nextPageUrl === null) {
    const noMoreCharactersHeading = document.createElement("h3");
    noMoreCharactersHeading.innerHTML = "No hay más personajes!";
    noMoreCharactersHeading.style.textAlign = "center";
    rootElement.appendChild(noMoreCharactersHeading);
  }

  // First time loading
  if (nextPageUrl === "") {
    await fetchCharacters()
      .then(({ info, results }) => {
        nextPage = info.next;
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
  }

  // Loading next page characters
  await fetchCharacters(nextPageUrl)
    .then(({ info, results }) => {
      nextPage = info.next;
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

export const home = () => {
  rootElement.style.textAlign = "center";
  mainHeading.innerHTML = "Rick & Morty Characters";
  mainHeading.style.textAlign = "center";
  rootElement.appendChild(mainHeading);

  // Detect when scrolled to bottom.
  rootElement.addEventListener("scroll", function () {
    if (
      rootElement.scrollTop + rootElement.clientHeight >=
      rootElement.scrollHeight - 200
    ) {
      loadCharacters(nextPage);
    }
  });

  loadCharacters();
};
