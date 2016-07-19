<?php
require_once "connect.php";

if(isset($_GET['read']))
    {
        $firstName=$_GET['firstName'];
        $lastName = $_GET['lastName'];
        $streetAddress = $_GET['streetAddress'];
        $city = $_GET['city'];
        $state = $_GET['state'];
        $zip = $_GET['zip'];
        $cellPhoneNumber = $_GET['cellPhoneNumber'];
        $favoriteCity = $_GET['favoriteCity'];
        $status = $_GET['status'];
        $userName = $_GET['userName'];
        $password = $_GET['password'];
        $employee = $_GET['employee'];
        $companyName = $_GET['companyName'];

        mysql_connect("localhost", "root", ""); 
        mysql_select_db("peak10"); 
        mysql_query("INSERT INTO User(firstName,lastName, streetAddress, city, state, zip, cellPhoneNumber, favoriteCity, status, userName, password, employee, companyName)
					"); 

       
    }


?>