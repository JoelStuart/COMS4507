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
	
	$ret = $result->fetch_object()->addr;
	$batch->addr = $ret;
	
	$sql = "SELECT addr FROM var WHERE id = 1";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	$ret = $result->fetch_object()->addr;
	$batch->regTime = $ret;
	
	$sql = "SELECT addr FROM var WHERE id = 1";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	$ret = $result->fetch_object()->addr;
	$batch->voteTime = $ret;
	
    $sql = "SELECT addr FROM var WHERE id = 3";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	$ret = $result->fetch_object()->addr;
	$batch->state = $ret;
	
	
	$sql = "SELECT addr FROM var WHERE id = 4";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	$ret = $result->fetch_object()->addr;
	$batch->mode = $ret;
	
	$sql = "SELECT addr FROM var WHERE id = 5";
	//var query = "INSERT INTO var (id, addr) VALUES(0, '".$addr."') ON DUPLICATE KEY UPDATE";
	$result = mysqli_query($dbO->link, $sql);
	//	$result = mysqli_query($dbO->link, $sql)->fetch_object()->password;
    //$result = $conn->query($sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
	$ret = $result->fetch_object()->addr;
	$batch->question = $ret;
	
	$JSON = json_encode($batch);
	echo $JSON;
    $dbO->disconnect();
	

?>