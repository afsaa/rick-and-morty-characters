import { fetchCharacters } from "../../api/";

const home = async () => {
  // Detect when scrolled to bottom.
  // charactersContainer.addEventListener("scroll", function () {
  //   if (
  //     charactersContainer.scrollTop + charactersContainer.clientHeight >=
  //     charactersContainer.scrollHeight - 200
  //   ) {
  //     loadCharacters(nextPage);
  //   }
  // });

  const characters = await fetchCharacters();
  const view = `
  <div id="home">
    <h1>Rick & Morty Characters</h1>
      <div class="characters__container">
        ${characters.results
          .map(
            (character) =>
              `<article class="character">
              <a href="#/${character.id}">
                <img src=${character.image} alt=${character.name} class="img-thumbnail" />
                <h2>${character.name}</h2>
              </a>
            </article>`
          )
          .join("")}
      </div>
  </div>
  `;
  return view;
};

export default home;
