import vWindow from "./v_window";

export default {
  install: (app) => {
    app.directive("window", vWindow);
  },
};
