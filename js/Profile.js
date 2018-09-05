import AjaxGet from "./AjaxGet.js";

export default class Profile extends AjaxGet {

    displayProfile(idUser) {

        const url = 'https://hr.oat.taocloud.org/v1/user/' + idUser;

        super.ajaxGet(url, (response) => {

            const user = JSON.parse(response);
            console.log(user);
            const h1 = document.querySelector('h1');
            h1.textContent = `Profile : ${user.firstName} ${user.lastName}`;

            document.getElementById('list_users').innerHTML = '';
            document.getElementById('profile_card').style.display = 'block';

            const imgElt = document.getElementById('img_card');
            imgElt.src = user.picture;

            const h5Elt = document.querySelector('h3');
            h5Elt.textContent = `${user.firstName} ${user.lastName}`;

            const loginElt = document.createElement('li');
            loginElt.textContent = 'Login : ' + user.login;

            const emailElt = document.createElement('li');
            emailElt.textContent = 'Email : ' + user.email;

            const genderElt = document.createElement('li');
            genderElt.textContent = 'Gender : ' + user.gender;

            const addressElt = document.createElement('li');
            addressElt.textContent = 'Address : ' + user.address;

            const profile = document.getElementById('profile_description');

            profile.appendChild(loginElt);
            profile.appendChild(emailElt);
            profile.appendChild(genderElt);
            profile.appendChild(addressElt);
        });
    }
}
