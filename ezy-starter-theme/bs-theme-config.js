const EZYPORT = 8080;
const MODULE_NAME = "ezy-starter-theme";

module.exports = {
  proxy: `localhost:${EZYPORT}`,
  port: 3003,
  ui: {
    port: 9191,
  },
  files: [
    `${MODULE_NAME}/target/**`,
  ],
  open: true,
  reloadDelay: 0,
  watch: true
};
