const swaggerGen = require("./gen.js");
const jsonData = require("../../swagger.json");
const fs = require("fs");
const path = require("path");

let opt = {
  swagger: jsonData,
  moduleName: "api",
  className: "api"
};
const codeResult = swaggerGen(opt);
fs.writeFileSync(path.join(__dirname, "../../src/utils/api.js"), codeResult);
