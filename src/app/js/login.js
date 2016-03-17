$('#login-messages').hide();

$("#login").click(function () {
    var username = $('#username').val();
    var password = $('#password').val();

    if (username != 'Tesla' || password != 'teslarocks!') {
        $('#login-messages').fadeIn(300);
        setTimeout(function () {
            $('#login-messages').fadeOut(300);
        }, 3000);
    } else {
        window.location.href = "/TESLA-V2/"
    }

    return false;
});