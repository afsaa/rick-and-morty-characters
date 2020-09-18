import router from "../app/routes";

import "@styles/main.scss";

const App = () => {
  window.addEventListener("load", router);
  window.addEventListener("hashchange", router);
};

App();
