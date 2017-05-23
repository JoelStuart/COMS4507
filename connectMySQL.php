<?php
class MySQLDatabase
{
    var $link;

    function connect()
    {
        $this->link = mysqli_connect('server-js.database.windows.net:3306', "stuuustuuu", "ComputerHorse1");
        if (!$this->link) {
            die('Not connected : ' . mysqli_error());
        }
        $db = mysqli_select_db($this->link, $database);
        if (!$db) {
            die ('Cannot use : ' . mysqli_error());
        }
        return $this->link;
    }

    function disconnect()
    {
        mysqli_close($this->link);
    }
}

?>