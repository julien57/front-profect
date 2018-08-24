import Users from './Users.js';

const users = new Users();
users.initUsers('https://hr.oat.taocloud.org/v1/users?limit=20&offset=0');