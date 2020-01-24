<?php
    require "conexion.php";
    $con = new MySQLi($host,$user,$passwd,$db);
    $con->query("SET NAMES utf8");

    $datos = json_decode(file_get_contents("php://input"));
    
    if (isset($datos->nombre) && isset($datos->fecha_nacimiento)){
        $nombre = htmlspecialchars($datos->nombre);
        $fecha_nacimiento = htmlspecialchars($datos->fecha_nacimiento);
        $sql = "INSERT INTO gato VALUES (NULL, '$nombre', '$fecha_nacimiento', NULL)";
        if($con->query($sql) == TRUE){
            echo json_encode(['success' => 'Registro insertado']);
        }
        else{
            echo json_encode(['success' => 'Registro NO insertado']);
        }
    }
    else{
        echo json_encode(['error' => 'Datos no válidos']);
    }
?>