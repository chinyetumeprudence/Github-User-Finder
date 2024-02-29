class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }
    //display profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card-body mb-3">
            <div class="row">
                <dic class="col-mb-3">
                    <img class="img-fluid mb-4" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a> 
                </div>
                <div class="col-mb-9">
                    <span class="p-2 mb-4 rounded bg-primary bg-blue">Public Repos: ${user.public_repos}</span>
                    <span class="p-2 mb-4 rounded bg-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="p-2 mb-4 rounded  bg-success">Followers: ${user.followers}</span>
                    <span class="p-2 mb-4 rounded bg-info">Following: ${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>

        `;
    }
    //show user repos
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-body">
                <div class="row"> 
                    <div class="col-md-9"
                        <a href="${repo.html_url}" target="_blank>${repo.name}
                    </div>
                    <div class="col-md-9">
                    <span class="p-2 mb-4 rounded bg-primary bg-blue">Stars: ${repos.stargazers_count}</span>
                    <span class="p-2 mb-4 rounded bg-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="p-2 mb-4 rounded bg-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `;

        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }
    // clear profile
    clearProfile(){
      this.profile.innerHTML = '';
    }
    // show alert message
    showAlert(message, className){
        //clear any remaning alert
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search)
        //timeout after 3 secs
        setTimeout(() => {
            this.clearAlert()
        }, 3000);


    }
    //clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove(); 
        }
    }
}