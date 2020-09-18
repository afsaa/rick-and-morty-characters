import home from "../pages/home/home";
import character from "../pages/character/character";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// ROUTES TO BE RENDER
const routes = {
  "/": home,
  "/:id": character,
};

//ROUTER
const router = async () => {
  // stablishing templates to dom
  const root = null || document.querySelector("#root");
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : console.log("Error 404");
  root.innerHTML = await render();
};

export default router;
