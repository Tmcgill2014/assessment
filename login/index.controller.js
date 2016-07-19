(function () {
    'use strict';
 
    angular
        .module('User')
        .controller('Login.IndexController', Controller);
 
    function Controller($location, authentication.service) {
        var vm = this;
 
        vm.login = login;
 
        initController();
 
        function initController() {
            // reset login status
            authentication.service.Logout();
        };
 
        function login() {
            authentication.service.Login(vm.userName, vm.password, function (result) {
                if (result === true) {
                    $location.path('/index.view.html');
                } else {
                    vm.error = 'Username or password is incorrect';
                }
            });
        };
    }
})();