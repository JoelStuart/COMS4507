<?php


session_start();

if(isset($_REQUEST['str'])) {
    $addr = $_REQUEST['str'];

	include('connectMySQL.php'); //make sure the path is correct.
	$dbO = new MySQLDatabase(); //create a Database object
	$dbO->connect();
	
    //$sql = "SELECT password FROM signup WHERE username = '".$username."'";
	$sql = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
    $dbO->disconnect();
	
}

?>