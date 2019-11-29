<?php
header('Access-Control-Allow-Origin: *');
    $c = new Mysqli("localhost", "root","madre","provincias");
    $c->query("SET NAMES utf8");

    $r = $c->query("SELECT id, provincia FROM provincias WHERE autonomia = ".$_GET['autonomia']." ORDER BY provincia");
    echo json_encode($r->fetch_all(MYSQLI_ASSOC));
    
?>