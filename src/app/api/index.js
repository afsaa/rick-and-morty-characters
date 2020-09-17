const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  return fetch(`${BASE_URL}/character`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
}

export async function fetchCharacterById(characterId) {
  return fetch(`${BASE_URL}/character/${characterId}`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
}

export async function fetchEpisode(url) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return error;
    });
}
