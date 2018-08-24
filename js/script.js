import Users from './Users.js';


document.getElementById('profile_card').style.display = 'none';

const users = new Users();
users.displayUsers('https://hr.oat.taocloud.org/v1/users?limit=20&offset=0');


