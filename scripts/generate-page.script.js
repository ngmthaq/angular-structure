const { exec } = require("child_process");

const name = "page-" + process.argv[2];
const route = process.argv[3];
const ngModule = process.argv[4];
const fullName = ngModule ? ngModule + "/" + name : name;

const commands = [
  `ng g m ${fullName} --module=${ngModule || "app"} --routing=true --routing-scope=Child --route=${route || ""}`,
  `ng g c ${fullName}`,
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
