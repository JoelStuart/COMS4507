<?php



if(isset($_GET['str'])) {
    $addr = $_GET['str'];

	include('connectMySQL.php'); //make sure the path is correct.
	$dbO = new MySQLDatabase(); //create a Database object
	$dbO->connect();
	
    //$sql = "SELECT password FROM signup WHERE username = '".$username."'";
	echo $addr;
	$sql = "INSERT INTO var (id, addr) VALUES(4, '$addr') ON DUPLICATE KEY UPDATE id=4, addr='$addr'";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
    $dbO->disconnect();
	
}

?>