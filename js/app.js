let users = require ('./userList');

console.log('...webpack server running');

console.log('app.js loaded');

users.forEach(user => {
  console.log(user.toString());
});
