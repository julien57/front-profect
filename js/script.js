import Users from './Users.js';

const users = new Users();
users.displayUsers('https://hr.oat.taocloud.org/v1/users?limit=20&offset=0');
