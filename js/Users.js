import Profile from "./Profile.js";
import AjaxGet from "./AjaxGet.js";

export default class Users extends AjaxGet {

    displayUsers(url, limit = 20, offset = 0, name) {

        let apiUrl;
        if (name) {
            apiUrl = url+'?name='+name+'&limit='+limit+'&offset='+offset;

        } else {
            apiUrl = url+'?limit='+limit+'&offset='+offset;
        }

        super.ajaxGet(apiUrl, (response) => {
            const users = JSON.parse(response);

            const listUsers = document.getElementById('list_users');

            if (users.length <= 0) {
                listUsers.textContent = 'No profiles found.';
            }

            for (let user of users) {

                let lastName = user.lastName;
                const lastNameUpper = Users.firstLetterUpper(lastName);
                let firstName = user.firstName;
                const firstNameUpper = Users.firstLetterUpper(firstName);

                const liElt = document.createElement('li');
                liElt.classList.add('list-group-item');

                const btnElt = document.createElement('a');
                btnElt.setAttribute('href', '#');
                btnElt.classList.add('btn-success');
                btnElt.textContent = 'See profil';

                const divElt = document.createElement('div');
                divElt.classList.add('row');
                divElt.textContent = `${user.userId} - ${firstNameUpper} ${lastNameUpper}`;

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

    static firstLetterUpper(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
