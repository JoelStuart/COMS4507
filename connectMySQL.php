<?php
class MySQLDatabase
{
    var $link;

    function connect()
    {
        $this->link = mysqli_connect('au-cdbr-azure-east-a.cloudapp.net:3306', 'b29e7b95b07dc3', '7e940f05');
        if (!$this->link) {
            die('Not connected : ' . mysqli_error());
        }
        $db = mysqli_select_db($this->link, "db_s");
        if (!$db) {
            die ('Cannot use : ' . mysqli_error());
        }
		echo('Connected to server');
        return $this->link;
    }

    function disconnect()
    {
        mysqli_close($this->link);
    }
}

?>