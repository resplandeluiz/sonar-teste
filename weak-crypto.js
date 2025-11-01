const crypto = require('crypto');
function weakHash(s) {
  return crypto.createHash('md5').update(s).digest('hex');
}
module.exports = weakHash;
