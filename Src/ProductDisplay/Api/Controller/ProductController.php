<?php
namespace MyApp\ProductDisplay\Api\Controller;
require_once realpath("./vendor/autoload.php");
use MyApp\ProductDisplay\Api\Controller\BaseController;
use MyApp\ProductDisplay\Api\Model\ProductModel;
class ProductController extends BaseController
{
    public function set_id($id)
    {
        $this->id=$id;
    }
    //list action, should be call to have acess to a json file containing the products from the database
    public function listAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $productModel = new ProductModel();
                $arrUsers = $productModel->getProducts();
                $responseData = json_encode($arrUsers);
            } catch (\Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong!';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
 
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(
                json_encode(array('error' => $strErrorDesc)),
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }
    //delete action to delete one or more products from the db
    public function deleteAction($id)
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $productModel = new productModel();
                $productModel->deleteProducts($id);
            } catch (\Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong!';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
    }
}
