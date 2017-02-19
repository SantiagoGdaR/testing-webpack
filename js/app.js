let users = require ('./userList');
require('../css/bootstrap.css');
require('../css/site.css');

console.log('...webpack server running');

console.log('app.js loaded');

users.forEach(user => {
  console.log(user.toString());
});
