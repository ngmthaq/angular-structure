const { isbot } = require("isbot");

/**
 * Check request from human NOT BOT
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function isHuman(req, res, next) {
  if (isbot(req.get("user-agent")) === false) next("router");
  else next();
}

module.exports = isHuman;
