function getUserQuery(username) {
  return "SELECT * FROM users WHERE username = '" + username + "'";
}
module.exports = getUserQuery;
