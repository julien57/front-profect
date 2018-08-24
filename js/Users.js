export default class Users {

    initUsers(url) {
        Users.ajaxGet(url, (response) => {
            const users = JSON.parse(response);
            console.log(users);
        })
    }

    static ajaxGet(url, callback) {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                callback(req.responseText);
            } else {
                console.error(req.status + ' ' + req.statusText + ' ' + url);
            }
        });
        req.addEventListener('error', function () {
            console.error('Erreur réseau avec l\'URL ' + url);
        });
        req.send(null);
    }
}