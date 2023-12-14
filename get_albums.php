<?php

header('Content-Type: application/json');

$jsonContent = file_get_contents('dischi.json');

echo $jsonContent;

?>