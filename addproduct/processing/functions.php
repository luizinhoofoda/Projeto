<?php
require_once __DIR__."/require_master.php";

function createDvd($sku, $name, $price,$size){

    $dvd = new Dvd;
    $dvd->set_sku($sku);
    $dvd->set_name($name);
    $dvd->set_price($price);
    $dvd->set_size($size);
   
    $dvd->saveToDb();
}
function createForniture($sku, $name, $price,$height, $length, $width){

    $forniture = new Furniture;
    $forniture->set_sku($sku);
    $forniture->set_name($name);
    $forniture->set_price($price);
    $forniture->set_height($height);
    $forniture->set_length($length);
    $forniture->set_width($width);
   
    $forniture->saveToDb();
}
function createBook($sku, $name, $price,$weight){

    $book = new Book;
    $book->set_sku($sku);
    $book->set_name($name);
    $book->set_price($price);
    $book->set_weight($weight);
   
    $book->saveToDb();
}

function createProduct($arr) 
    {
        
    switch($arr['productType']){
        case 'book':
            createBook($arr['sku'],$arr['name'],$arr['price'], $arr['weight']);
        break;
        case 'forniture':
            createForniture($arr['sku'], $arr['name'], $arr['price'], $arr['height'], $arr['width'], $arr['length']);
            break;
        case 'dvd':
             createDvd($arr['sku'],$arr['name'],$arr['price'],$arr['size']);
         echo "chegou até aqui";
    }
    
    
    
}


?>