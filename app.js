const searchUser = document.getElementById('searchUser');
const github = new GitHub;
const ui = new UI;



// Add event listener on text input
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    
    if(userText !== ''){
        // Make http call
        
        github.getUser(userText)
        .then(data => {
            console.log(data.profile.message )
            if(data.profile.message === 'Not Found' || data.profile.message === `API rate limit exceeded for 188.252.199.87. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)`){
                // Show Alert in UI
                console.log('we are here')
                ui.clearAlert();
                ui.showAlert('User not found.', 'alert alert-danger')
                setTimeout(() => {
                    ui.clearAlert();
                }, 2000);
            } else {
                // Show Profile in UI
                ui.showProfile(data.profile);
            }
        })
    } else {
        ui.clearProfile();
    }
})