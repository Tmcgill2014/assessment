(function () {
    'use strict';
 
    angular
        .module('User')
        .run(setupFakeBackend);
 
    // setup fake backend for backend-less development
    function setupFakeBackend($httpBackend) {
        var testUser = { userName: 'tmcgill', password: 'password', firstName: 'Tamera', lastName: 'McGill' };
 
        // fake authenticate api end point
        $httpBackend.whenPOST('RegistrationApp/api/createEmployee.php').respond(function Login(userName, password, callback) {
            // get parameters from post request
            var params = angular.JSON(data);
 
            // check user credentials and return fake jwt token if valid
            if (params.userName === testUser.userName && params.password === testUser.password) {
                return [200, { token: 'fake-jwt-token' }, {}];
            } else {
                return [200, {}, {}];
            }
        });
 
        // pass through any urls not handled above so static files are served correctly
        $httpBackend.whenGET(/^\w+.*/).passThrough();
    }
})();