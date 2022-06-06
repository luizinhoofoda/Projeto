<?php

require_once realpath("vendor/autoload.php");
use MyApp\ProductDisplay\Api\Controller\UrlInputController;

$urlInputController = new UrlInputController();
$urlInputController->processInput($urlInputController->getUrl());
