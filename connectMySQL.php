<?php
class MySQLDatabase
{
    var $link;

    function connect()
    {
		$connectionInfo = array("UID" => "stuuustuuu@server-js", "pwd" => "{your_password_here}", "Database" => "db", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
		$serverName = "tcp:server-js.database.windows.net,1433";
		$con = sqlsrv_connect($serverName, $connectionInfo);
        //$this->link = mysqli_connect('server-js.database.windows.net:1433', "stuuustuuu", "ComputerHorse1");
        /*if (!$this->link) {
            die('Not connected : ' . mysqli_error());
        }
        $db = mysqli_select_db($this->link, $database);
        if (!$db) {
            die ('Cannot use : ' . mysqli_error());
        }*/
		if( $conn === false ) {
		die( print_r( sqlsrv_errors(), true));
}
        return $conn;
    }

    function disconnect()
    {
        mysqli_close($this->link);
    }
}

?>