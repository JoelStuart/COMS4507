<?php


session_start();

	include('connectMySQL.php'); //make sure the path is correct.
	$dbO = new MySQLDatabase(); //create a Database object
	$dbO->connect();
	
    $sql = "SELECT addr FROM var WHERE id = 0";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	
	echo $result->fetch_object()->addr;
    $dbO->disconnect();
	
}

?>