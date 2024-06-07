const createHistoryRouter = (app) => {
  app.use("/", require("./home"));
};

module.exports = createHistoryRouter;

