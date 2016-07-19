var User = angular.module('User', []) 

User.controller('MainCtrl', function($scope){

	//VARIABLES & ARRAYS
	$scope.categories = [
			{"id": 0, "name": "Employee"},
			{"id": 1, "name": "Customer"}
			
	];

	$scope.users = [
		{"id": 0, "firstName": "Tamera", "lastName": "McGill", "streetAddress": "123 Manning St.", "city": "Marion", "state": "SC", "zip": "29571", "cellPhoneNumber": "843-999-0987", "favoriteCity": "Charlotte", "status": "employee", "userName": "tmcgill", "password": "password", "employee": "1001", "companyName": ""},
		{"id": 1, "firstName": "Misty", "lastName": "Bruce", "streetAddress": "123 Manning St.", "city": "Mullins", "state": "SC", "zip": "29574", "cellPhoneNumber": "843-999-0387", "favoriteCity": "Charlotte", "status": "employee", "userName": "mistyb", "password": "password", "employee": "1002", "companyName": ""},
		{"id": 2, "firstName": "Henry", "lastName": "Cock", "streetAddress": "123 Manning St.", "city": "Charlotte", "state": "NC", "zip": "28205", "cellPhoneNumber": "704-999-0387", "favoriteCity": "Charlotte", "status": "Customer", "userName": "henryc", "password": "password", "employee": "", "companyName": "Peak10"}
		
	
	];

	//SET UP CURRENT CATEGORY
	$scope.currentCategory = null;

	function setCurrentCategory(category){
		$scope.currentCategory = category;

		cancelCreating();
		cancelEditing();
	}

	function isCurrentCategory(category){
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}
//Binding to scope the object which gives access.
	$scope.setCurrentCategory = setCurrentCategory;
	$scope.isCurrentCategory = isCurrentCategory;

////////////////////////////////////////////////////////////////////////
//CREATING AND EDITING STATES

	$scope.isCreating = false;
	$scope.isEditing = false;

	function shouldShowCreating(){
		return $scope.currentCategory && !$scope.isEditing;
	}

	function startCreating(){
		$scope.isCreating = true;
		$scope.isEditing = false;
		resetCreateForm();
	}

	function cancelCreating(){
		$scope.isCreating = false;
	}

	$scope.shouldShowCreating = shouldShowCreating;
	$scope.startCreating = startCreating;
	$scope.cancelCreating = cancelCreating;



	function shouldshowEditing(){
		return $scope.isEditing && !$scope.isCreating;
	}

	function startEditing(){
		$scope.isEditing = true;
		$scope.isCreating = false;
	}

	function cancelEditing(){
		$scope.isEditing = false;

		$scope.editedUser = null;
	}

	$scope.shouldshowEditing = shouldshowEditing;
	$scope.startEditing = startEditing;
	$scope.cancelEditing = cancelEditing;

	////////////////////////////////////////////////////////////////////
	//CRUD CREATE_READ_UPDATE_DESTROY
	function resetCreateForm(){
		$scope.newUser = {
			firstName: '',
			lastName: '',
			streetAddress: '',
			city: '',
			state: '',
			zip: '',
			cellPhoneNumber: '',
			favoriteCity: '',
			status: '',
			userName: '',
			password: '',
			employee: '',
			companyName: '',
			category: $scope.currentCategory.name
		}; 
	}

	function createUser(user){

		$scope.createUser = function(){
         
    // fields in key-value pairs
    $http.post('/api/createUser.php', {
            'firstName' : $scope.firstName, 
            'lastName' : $scope.lastName, 
            'streetAddress' : $scope.streetAddress, 
            'city' : $scope.city, 
            'state' : $scope.state,
            'zip' : $scope.zip,
            'cellPhoneNumber' : $scope.cellPhoneNumber,
            'favoriteCity' : $scope.favoriteCity,
            'status' : $scope.status,
            'userName' : $scope.userName,
            'password' : $scope.password,
            'employee' : $scope.employee,
            'companyName' : $scope.companyName,
        }
    ).success(function (data) {
        console.log(data);
        // tell the user new product was created
        Materialize.toast(data, 4000);
         
       
        $scope.getAll();
    });
}

		resetCreateForm();




	}

	$scope.createUser = createUser;

	$scope.editedUser = null;

	function setEditedUser(user) {
		$scope.editedUser = angular.copy(user);
	}

		$scope.setEditedUser = setEditedUser;

		function updateUser(user){
			var index = _.findIndex($scope.users, function (u){
				return u.id == user.id;
			});

			$scope.users[index] = user;

			$scope.editedUser = null;
			$scope.isEditing = false;
		}

		$scope.updateUser = updateUser;


		function deleteUser(user){
			_.remove($scope.users, function (u){
				return u.id == user.id;
			});
		}

		$scope.deleteUser = deleteUser;






});

















