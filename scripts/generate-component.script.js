const { exec } = require("child_process");

const name = "component-" + process.argv[2];
const ngModule = process.argv[3];
const fullName = ngModule ? ngModule + "/" + name : name;

const commands = [
  `ng g m ${fullName}`,
  `ng g c ${fullName} --export=true`,
  `npm run convention:fix`,
];

exec(commands.join(" && "), (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`stdout: ${stdout || "None"}`);
    console.log(`stderr: ${stderr || "None"}`);
  }
});
