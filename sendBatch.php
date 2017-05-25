<?php

include('connectMySQL.php'); //make sure the path is correct.
$dbO = new MySQLDatabase(); //create a Database object
$dbO->connect();
	

if(isset($_GET['addr'])) {
    $addr = $_GET['addr'];

	$sql = "INSERT INTO var (id, addr) VALUES(0, '$addr') ON DUPLICATE KEY UPDATE id=0, addr='$addr'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
}

if(isset($_GET['question'])) {
    $question = $_GET['question'];

	
	$sql = "INSERT INTO var (id, addr) VALUES(5, '$question') ON DUPLICATE KEY UPDATE id=5, addr='$question'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
}

if(isset($_GET['mode'])) {
    $mode = $_GET['mode'];

	
	$sql = "INSERT INTO var (id, addr) VALUES(4, '$mode') ON DUPLICATE KEY UPDATE id=4, addr='$mode'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
}

if(isset($_GET['regTime'])) {
    $v = $_GET['regTime'];

	
	$sql = "INSERT INTO var (id, addr) VALUES(1, '$v') ON DUPLICATE KEY UPDATE id=1, addr='$v'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
}

if(isset($_GET['voteTime'])) {
    $v = $_GET['voteTime'];

	
	$sql = "INSERT INTO var (id, addr) VALUES(2, '$v') ON DUPLICATE KEY UPDATE id=2, addr='$v'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
}

if(isset($_GET['state'])) {
    $v = $_GET['state'];

	
	$sql = "INSERT INTO var (id, addr) VALUES(3, '$v') ON DUPLICATE KEY UPDATE id=3, addr='$v'";
	$result = mysqli_query($dbO->link, $sql);
	if (!$result){
		die('Could not query:' . mysql_error());
	}
	
}
$dbO->disconnect();
?>