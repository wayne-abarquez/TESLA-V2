var users = [
    {
        username: 'admin',
        password: 'password123'
    },
    {
        username: 'Tesla',
        password: 'teslarocks!'
    }
];

function authenticate(username, password) {
    var isAuthenticated = false;
    users.forEach(function(u){
        if(u.username === username && u.password === password) {
            console.log('user ' + username + ' authenticated');
            isAuthenticated = true;
            return;
        }
    });
    return isAuthenticated;
}

function cacheUser (username) {
    localStorage.currentUser = String(username);
}

$("#login").click(function () {
    var username = $('#username').val();
    var password = $('#password').val();

    if (authenticate(username, password)) {
        cacheUser(username);
        window.location.href = "/TESLA-V2/"
    } else {
        $('#login-messages').fadeIn(300);
        setTimeout(function () {
            $('#login-messages').fadeOut(300);
        }, 3000);
    }
    return false;
});