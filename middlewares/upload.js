const util = require("util");
const Multer = require("multer");
const max = 2 * 1024 * 1024;

let processPic = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: max },
}).single("pic");

let picMiddleware = util.promisify(processPic);

module.exports = picMiddleware;