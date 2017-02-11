var User = require ('./user');

console.log('...webpack server running');
console.log('app.js loaded');
var user = new User('Santiago', 'Garcia da Rosa', 'santiwebpack@gmail.com');

console.log(user.toString());
