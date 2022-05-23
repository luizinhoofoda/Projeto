<?php
require __DIR__ . "/inc/bootstrap.php";

$urlInputController = new urlInputController();

$urlInputController->processInput($urlInputController->getUrl());

?>