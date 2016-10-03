var path = require('path'),
fs = require("fs");
exports.privateKey = fs.readFileSync(path.join(__dirname, './private/private.key')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, './private/certificate.pem')).toString();