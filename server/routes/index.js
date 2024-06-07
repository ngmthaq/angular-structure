/**
 * Create Router For BOT
 *
 * @param {import('express').Express} app
 */
function createRouter(app) {
  app.use("/", require("./home"));
}

module.exports = createRouter;

