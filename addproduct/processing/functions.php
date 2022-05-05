<?php
require_once "/MAMP/htdocs/addproduct/processing/require_master.php";

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