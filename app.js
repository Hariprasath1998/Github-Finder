// Init GitHub
const gitHub = new GitHub;
const ui = new UI;



// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        // Make HTTP call
        gitHub.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})