<?php
    $nombre = $_GET["p"];
    $intentos = $_GET["n"];
    $file = fopen("ranking.txt", "a");

    fwrite($file, $nombre . "     " . $intentos . "\n");
    fclose($file);
?>