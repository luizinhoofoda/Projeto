<?php
namespace MyApp\ProductDisplay\Api\Controller;
class BaseController
{
 
  //called when we want to send the reponse to the user
    protected function sendOutput($data, $httpHeaders=array())
    {
        header_remove('Set-Cookie');
 
        if (is_array($httpHeaders) && count($httpHeaders)) {
            foreach ($httpHeaders as $httpHeader) {
                header($httpHeader);
            }
        }
 
        echo $data;
        exit;
    }
}
