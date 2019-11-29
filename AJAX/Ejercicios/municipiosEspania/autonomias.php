<?php
//Cabecera que sirve para permitir la entrada
header('Access-Control-Allow-Origin: *');
    //el PHP debe estar en el server donde se encuentre MySQL
    $c = new MySQLI("localhost", "root", "madre","provincias");
    $c->query("SET NAMES utf8");

    $r = $c->query("SELECT * FROM autonomias;");
    echo json_encode($r->fetch_all(MYSQLI_ASSOC));
?>