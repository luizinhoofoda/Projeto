<?php

namespace MyApp\ProductDisplay\Api\Controller;

use MyApp\ProductDisplay\Api\Controller\ProductController;

class UrlInputController
{
    public function getUrl()
    {
        //verify the url call and method, calls the right function
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $uri = explode('/', $uri);

        if ((isset($uri[2]) && $uri[2] != 'product') || !isset($uri[3])) {
            header("HTTP/1.1 404 Not Found");
            exit();
        }

        return $uri;
    }

    public function processInput($uri)
    {
        $objFeedController = new ProductController();
        if ($uri[3] === 'list') {
            $strMethodName = $uri[3] . 'Action';
            $objFeedController->{$strMethodName}();
        } else {
            $strMethodName = $uri[3] . 'Action';
            $objFeedController->{$strMethodName}($uri[4]);
        }
    }
}
