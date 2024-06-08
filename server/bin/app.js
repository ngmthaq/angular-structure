#!/usr/bin/env node

// Module dependencies
const createRouter = require("../routes");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs/promises");
const env = require("dotenv");
const app = express();

// Load .env file
env.config({ path: path.resolve(__dirname, "../.env") });

// View engine setup
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("public", express.static(path.resolve(__dirname, "../public")));

// Redirect http -> https
app.use((req, res, next) => {
  if (
    req.protocol === "http" &&
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_HTTPS === "true"
  ) {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

// Create router
createRouter(app);

// Load angular bundle files
app.use(express.static(path.resolve(__dirname, "../../dist/browser")));

// Render angular bundle files
app.use("*", async function (req, res, next) {
  try {
    const html = await fs.readFile(path.resolve(__dirname, "../../dist/browser/index.html"));
    res.set("Content-Type", "text/html");
    return res.send(html);
  } catch (error) {
    next(error);
  }
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  return res.json({ error: err });
});

// Get port from environment and store in Express
const port = normalizePort(process.env.APP_PORT || "3000");
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  return false;
}

// Event listener for HTTP server "error" event
function onError(error) {
  if (error.syscall !== "listen") throw error;
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe: " + addr : "port: " + addr.port;
  console.log("Listening on " + bind);
  if (process.env.NODE_ENV !== "production") {
    console.log(`Development server: http://127.0.0.1:${addr.port}`);
  }
}
