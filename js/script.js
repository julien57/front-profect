import Users from './Users.js';
import Profile from './Profile.js';

const url = new URL(document.location.href);
const searchParams = new URLSearchParams(url.search);
const users = new Users();

const api = 'https://hr.oat.taocloud.org/v1/users';

let limit = undefined;
let offset = undefined;
let name = undefined;

if (searchParams.has('name')) {
    name = searchParams.get('name');
}

if (searchParams.has('limit') && searchParams.has('offset')) {
    limit = searchParams.get('limit');
    offset = searchParams.get('offset');

} else if (searchParams.has('limit')) {
    limit = searchParams.get('limit');

} else if (searchParams.has('offset')) {
    offset = searchParams.get('offset');

} else if (searchParams.has('name')) {
    name = searchParams.get('name');
}

if (url.pathname === '/users') {
    users.displayUsers(api, limit, offset, name);

} else {
    const listUsers = document.getElementById('list_users');
    listUsers.innerHTML = '<h2>Unknown URL</h2> <a href="/users" class="btn btn-primary">Return to the list...</a></p>';
}

