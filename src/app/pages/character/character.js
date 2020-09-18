import { fetchCharacterById } from "../../api/";

const loadCharacterDetails = async (characterId) => {
  await fetchCharacterById(characterId)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error("Error", err);
    });
};

const character = () => {
  const view = `
    <div class="character__details">
        <article class="character__card">
            <img src="image" alt="name" />
            <h2>Name</h2>
        </article>
        <article class="character__info">
            <h3>Species: </h3>
            <h3>Gender: </h3>
            <h3>Status: </h3>
            <h3>Origin: </h3>
            <h3>Last Location: </h3>
            <h3>Episodes: </h3>
        </article>
    </div>
    `;
  loadCharacterDetails(1);
  return view;
};

export default character;
