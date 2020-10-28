const github = new Github;

const ui = new UI;

//Search input and add event listener
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener("keyup", (e) => {
    //Get the user text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
            .then(data =>{
                if(data.profile.message === "Not Found"){
                    //Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');

                } else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        //clear profile
        ui.clearProfile();
    }


})