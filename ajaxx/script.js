document.addEventListener('click', function(){

    let profileName = document.querySelector('.profile-name');
    let profileImage = document.querySelector('.profile-avatar');
    let profileUser = document.querySelector('.profile-username');
    let countRepository = document.querySelector('.count_repository');
    let countFollowers = document.querySelector('.count_followers');
    let countFollowing = document.querySelector('.count_following');
    let profileLink = document.querySelector('.profile-link');

    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        let btn = this.querySelector('input').value;
        console.log(btn);
    
        if(btn.length >= 4){
            try{
                fetch(`https://api.github.com/users/${btn}`)
                .then(function(res) {
                    
                    return res.json();
                })
                .then(function(json){
                    if(!json.name){
                      throw new Error()
                    }
                    profileImage.src = json.avatar_url;
                    countFollowers.innerHTML = json.followers;
                    countFollowing.innerHTML = json.following;
                    countRepository.innerHTML = json.public_repos;
                    profileUser.innerHTML = '@' + json.login;
                    profileName.innerHTML = json.name;
                    profileLink.href = json.html_url;
                })
                .catch(function(){
                profileImage.src = 'https://via.placeholder.com/180x180';
                countFollowers.innerHTML = '0';
                countFollowing.innerHTML = '0';
                countRepository.innerHTML = '0';
                profileUser.innerHTML = '@' + 'User';
                profileName.innerHTML = 'Não encontrado';
                profileLink.href = 'https://www.github.com/';
                })
            }catch{
                console.log('aqui')
                profileImage.src = 'https://via.placeholder.com/180x180';
                countFollowers.innerHTML = json.followers;
                countFollowing.innerHTML = json.following;
                countRepository.innerHTML = json.public_repos;
                profileUser.innerHTML = '@' + json.login;
                profileName.innerHTML = json.name;
                profileLink.href = json.html_url;
            }
        }
    });
})
