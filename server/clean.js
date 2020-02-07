const { exec } = require("child_process");

module.exports = function clean(req, res) {
  exec("rm -rf uploaded", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`files removed`);
    res.sendStatus(200);
  });
};
