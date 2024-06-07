/**
 * Check request from POSTMAN
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function isPostman(req, res, next) {
  if (req.get("user-agent").startsWith("PostmanRuntime")) next("router");
  else next();
}

module.exports = isPostman;
