(function(){
'use strict';

angular.module('teslaBase')
    .controller('baseController', [baseController]);

    function baseController () {
        var vm = this;

        vm.currentUser = '';

        vm.initialize = initialize;
        vm.logout = logout;

        vm.initialize();

        /* Controller Functions here */

        function initialize () {
            vm.currentUser = localStorage.currentUser;

            if (!vm.currentUser) {
                redirectLogin();
            }
        }

        function logout () {
            localStorage.removeItem('currentUser');
            redirectLogin();
        }

        function redirectLogin() {
            window.location.href = "/TESLA-V2/login.html";
        }
    }
}());