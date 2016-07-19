<?
$sqlinsert = 'UPDATE User set firstName=:thefirst, lastName=thelast, streetAddress=theaddress, 
city=:thecity, state=:thestate, zip=:thezip, cellPhoneNumber=:thephone,email=:theemail, favoriteCity=:thefavorite, status=:thestatus, userName=:theuserName, password=:thepass, employee=:theemployee, companyName=:thecompanyName
                WHERE id = :ID';
            
            //Prepares the SQL Statement for execution
            $stmtinsert = $db->prepare($sqlinsert);
            //Binds our associative array variables to the bound
            //variables in the sql statement
            $stmtinsert->bindvalue(':ID', $formfield['id']);
            $stmtinsert->bindvalue(':thefirst', $formfield['firstName']);
            $stmtinsert->bindvalue(':thelast', $formfield['lastName']);
            $stmtinsert->bindvalue(':theaddress', $formfield['streetAddress']);
            $stmtinsert->bindvalue(':thecity', $formfield['city']);
            $stmtinsert->bindvalue(':thestate', $formfield['state']);
            $stmtinsert->bindvalue(':thezip', $formfield['zip']);
            $stmtinsert->bindvalue(':thephone', $formfield['cellPhoneNumber']);
            $stmtinsert->bindvalue(':theemail', $formfield['email']);
            $stmtinsert->bindvalue(':thefavorite', $formfield['favoriteCity']);
            $stmtinsert->bindValue(':thestatus', $formfield['status']);
            $stmtinsert->bindvalue(':theuserName', $formfield['userName']);
            $stmtinsert->bindvalue(':thepass', $formfield['password']);
            $stmtinsert->bindvalue(':theemployee', $formfield['employee']);
            $stmtinsert->bindvalue(':thecompanyName', $formfield['companyName']);
        
            //Runs the insert statement and query
            $stmtinsert->execute();
            
            echo "Update Successful!";
 ?>
