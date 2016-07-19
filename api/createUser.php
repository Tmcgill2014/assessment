<?php
include_once "connect.php";
$database = new Database();
$db = $database->getConnection();


$user = new newUser($db);
$data = json_decode(file_get_contents("php://input")); 


function create(){
     
    // query to insert record
    $query = ("INSERT INTO User(firstName,lastName, streetAddress, city, state, zip, cellPhoneNumber, favoriteCity, status, userName, password, employee, companyName)
values
(:firstName,:lastName, :streetAddress, :, :state, :zip, :cellPhoneNumber, :favoriteCity, :status, :userName, :password, :employee, :companyName)
        ");
     
    // prepare query
    $stmt = $this->conn->prepare($query);
 

 
    // bind values
    $stmt->bindParam(":firstName", $this->firstName);
    $stmt->bindParam(":lastName", $this->lastName);
    $stmt->bindParam(":streetAddress", $this->streetAddress);
    $stmt->bindParam(":state", $this->state);
    $stmt->bindParam(":zip", $this->zip);
    $stmt->bindParam(":cellPhoneNumber", $this->cellPhoneNumber);
    $stmt->bindParam(":favoriteCity", $this->favoriteCity);
    $stmt->bindParam(":status", $this->status);
    $stmt->bindParam(":userName", $this->userName);
    $stmt->bindParam(":password", $this->password);
    $stmt->bindParam(":employee", $this->employee);
    $stmt->bindParam(":companyName", $this->companyName);
    $stmt->bindParam(":created", $this->created);
     
    // execute query
    if($stmt->execute()){
        // return true;
        echo "Success";
    }else{
        echo "<pre>";
            print_r($stmt->errorInfo());
        echo "</pre>";
 
        return false;
    }
}
if(isset($_POST['submit']))
    {
        $firstName=$_POST['firstName'];
        $lastName = $_POST['lastName'];
        $streetAddress = $_POST['streetAddress'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip'];
        $cellPhoneNumber = $_POST['cellPhoneNumber'];
        $favoriteCity = $_POST['favoriteCity'];
        $status = $_POST['status'];
        $userName = $_POST['userName'];
        $password = $_POST['password'];
        $employee = $_POST['employee'];
        $companyName = $_POST['companyName'];


        Print "Your information has been successfully added to the database."; 
    }


?>