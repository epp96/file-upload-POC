const IncomingForm = require("formidable").IncomingForm;
const fs = require("fs");

module.exports = function upload(req, res) {
  var form = new IncomingForm();
  form.uploadDir = "./uploaded"; //this will be in the container
  fs.mkdirSync(form.uploadDir, { recursive: true });
  form.isAutoRename = false;
  form.keepExtensions = true;

  form.on("file", (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    fs.renameSync(file.path, form.uploadDir + "/" + file.name);
    console.log("file obtained");
    console.log(JSON.stringify(file, null, 2));
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
