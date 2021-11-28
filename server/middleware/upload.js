const util = require("util");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const crypto = require("crypto");

const maxSize = 2 * 1024 * 1024;

aws.config.update({ region: "us-east-2" });

s3 = new aws.S3();

let storage = multerS3({
  s3: s3,
  bucket:  function (req, file, cb) {
    cb(null, `skilltrade-bucket/${req.directory}`);
  },
  key: function(req, file, next) {
    var validExtensions = ['.png', '.jpg', '.jpeg', '.tiff', '.bmp', '.jfif'];
    var fileExtension = "";

    for (var ext of validExtensions)
      if (file.originalname.toLowerCase().endsWith(ext))
        fileExtension = ext;

    if (fileExtension.length == 0)
      next("Error: missing or invalid file type");

    var newFileName = crypto.randomBytes(20).toString('hex') + fileExtension;
    next(null, newFileName);
  }
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize }
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;