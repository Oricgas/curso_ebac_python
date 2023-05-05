$('document').ready(function(){
    const profileAvatar = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const profileLink = document.querySelector('.profile-link');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');

    fetch('https://api.github.com/users/Oricgas')
    
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        profileAvatar.src =json.avatar_url;
        nameElement.innerText =json.name;
        profileUsername.innerText =json.login;
        profileLink
        reposElement.innerText = json.public_repos;
        followersElement.innerText =json.followers;
        followingElement.innerText =json.following;
    })


})











