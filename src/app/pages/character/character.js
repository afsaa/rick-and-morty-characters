import { fetchCharacterById } from "../../api/";
import getHash from "../../utils/getHash";

const character = async () => {
  const selectedCharacterId = getHash();
  const characterDetails = await fetchCharacterById(selectedCharacterId);
  const {
    image,
    name,
    gender,
    species,
    status,
    origin,
    location,
    episode,
  } = characterDetails;
  const view = `
    <div class="character__details">
        <article class="character__card">
            <img src=${image} alt=${name} class="img-thumbnail"/>
            <h2>${name}</h2>
        </article>
        <article class="character__info">
            <h3>Specie: ${species}</h3>
            <h3>Gender: ${gender}</h3>
            <h3>Status: ${status}</h3>
            <h3>Origin: ${origin.name}</h3>
            <h3>Last Location: ${location.name}</h3>
            <h3>Episodes: ${episode.length}</h3>
        </article>
    </div>
    `;
  return view;
};

export default character;
