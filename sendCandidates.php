<?php



if(isset($_GET['str'])) {
    //$str = json_decode($_GET['str']);
	//$c = serialize(str);
    $c = $_GET['str'];
	

	include('connectMySQL.php'); //make sure the path is correct.
	$dbO = new MySQLDatabase(); //create a Database object
	$dbO->connect();
	
    //$sql = "SELECT password FROM signup WHERE username = '".$username."'";
	echo $c;
	$sql = "INSERT INTO candidates (id, c) VALUES(2, '$c') ON DUPLICATE KEY UPDATE id=0, c='$c'";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
    $dbO->disconnect();
	
}

?>