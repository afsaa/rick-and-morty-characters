const rootElement = document.getElementById("root");
const mainHeading = document.createElement("h1");

export const home = () => {
  mainHeading.innerHTML = "Rick & Morty Characters";
  mainHeading.style.textAlign = "center";
  rootElement.appendChild(mainHeading);
};
