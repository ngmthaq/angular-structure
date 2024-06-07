const { exec } = require("child_process");

const name = "app-" + process.argv[2];
const ngModule = process.argv[3];
const fullName = ngModule ? ngModule + "/" + name : name;

const commands = [`ng g m ${fullName}`, `npm run format`];

exec(commands.join(" && "), (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`stdout: ${stdout || "None"}`);
    console.log(`stderr: ${stderr || "None"}`);
  }
});
