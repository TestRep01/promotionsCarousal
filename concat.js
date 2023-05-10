const concat = require("concat");
(async function build() {
  const files = [
    "./dist/promotions-carousal/runtime.js",
    "./dist/promotions-carousal/polyfills.js",
    "./dist/promotions-carousal/main.js",
  ];
  await concat(files, "./dist/promotions-carousal/component-lib.js");
})();
