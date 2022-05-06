<?php
require_once __DIR__."/require_master.php";

function createDvd($sku, $name, $price,$size){

    $dvd = new DVD;
    $dvd->set_sku($sku);
    $dvd->set_name($name);
    $dvd->set_price($price);
    $dvd->set_size($size);
   
    $dvd->saveToDb();
}
function createForniture($sku, $name, $price,$height, $length, $width){

    $forniture = new Forniture;
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

function validateData($arr){
    if(empty($arr["sku"])){
        return $sku_error = "Required";
    }
    if(empty($arr["name"])){
        $name_error = "Required";
    }
    if(empty($arr["price"])){
        $price_error = "Required";
    }
    else if(!is_numeric($arr["price"])){
        $price_error = "Invalid type of data";
    }

    if(empty($arr["productType"]))
    {
        $select_error = "Please select a product type";
    }
    else{

    
    switch($arr['productType']){
        case 'book':
            if(empty($arr['weight'])){
                $weight_error = "Required";
            }
            else if(!is_numeric($arr['weight'])){
                $weight_error = "Invalid type of data";
            };
        break;
        case 'forniture':
            
            if(empty($arr['height'])){
                $weight_error = "Required";
            }
            else if(!is_numeric($arr['height'])){
                $weight_error = "Invalid type of data";
            };
            if(empty($arr['width'])){
                $width_error = "Required";
            }
            else if(!is_numeric($arr['width'])){
                $width_error = "Invalid type of data";
            };
            if(empty($arr['length'])){
                $length_error = "Required";
            }
            else if(!is_numeric($arr['length'])){
                $length_error = "Invalid type of data";
            };
            break;
        case 'dvd':
            if(empty($arr['size'])){
                $size_error = "Required";
            }
            else if(!is_numeric($arr['size'])){
                $size_error = "Invalid type of data";
            };
         
    }
}
}
?>