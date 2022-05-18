<?php
require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
require_once "/MAMP/htdocs/addproduct/processing/db.php";
class ProductProcessing extends Db

{

function createDvd($arr){

    $dvd = new Dvd($arr['sku'],$arr['name'],$arr['price'],$arr['size']);
    $dvd->saveToDb();
}
function createFurniture($arr){

    $forniture = new Furniture($arr['sku'], $arr['name'], $arr['price'], $arr['height'], $arr['width'], $arr['length']);
    $forniture->saveToDb();
}
 function createBook($arr){

    $book = new Book($arr['sku'],$arr['name'],$arr['price'], $arr['weight']);
    $book->saveToDb();
}

function redirect()
{
    $string = '<script type="text/javascript">';
    $string .= 'window.location = "http://localhost/"';
    $string .= '</script>';

    echo $string;
}

}

?>