import Profile from "./Profile.js";
import AjaxGet from "./AjaxGet.js";

export default class Users extends AjaxGet {

    displayUsers(url) {

        super.ajaxGet(url, (response) => {
            const users = JSON.parse(response);

            const listUsers = document.getElementById('list_users');

            for (let user of users) {

                let lastName = user.lastName;
                const lastNameUpper = lastName.charAt(0).toUpperCase() + lastName.slice(1);
                let firstName = user.firstName;
                const firstNameUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);

                const liElt = document.createElement('li');
                liElt.classList.add('list-group-item');

                const btnElt = document.createElement('a');
                btnElt.setAttribute('href', '#');
                btnElt.classList.add('btn-success');
                btnElt.textContent = 'See profil';

                const divElt = document.createElement('div');
                divElt.classList.add('row');
                divElt.textContent = `${firstNameUpper} ${lastNameUpper}`;

                divElt.appendChild(btnElt);
                liElt.appendChild(divElt);

                listUsers.appendChild(liElt);

                btnElt.addEventListener('click', () => {
                    const profile = new Profile();
                    profile.displayProfile(user.userId);
                })
            }
        });
    }
}