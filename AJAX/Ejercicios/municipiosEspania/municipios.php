<?php
header('Access-Control-Allow-Origin: *');
    $c = new Mysqli("localhost", "root","madre","provincias");
    $c->query("SET NAMES utf8");

    $r = $c->query("SELECT id, municipio FROM municipios WHERE provincia = ".$_GET['provincia']." ORDER by municipio");
    echo json_encode($r->fetch_all(MYSQLI_ASSOC));
    
?>