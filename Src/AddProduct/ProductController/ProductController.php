<?php

namespace MyApp\AddProduct\ProductController;

use MyApp\AddProduct\ProductClasses\Book;
use MyApp\AddProduct\ProductClasses\Dvd;
use MyApp\AddProduct\ProductClasses\Furniture;
require_once realpath("./vendor/autoload.php");

class ProductController extends Db
{
    public function createDvd($arr)
    {
        $dvd = new Dvd($arr['sku'], $arr['name'], $arr['price'], $arr['size']);
        $dvd->saveToDb();
    }

    public function createFurniture($arr)
    {
        $forniture = new Furniture(
            $arr['sku'],
            $arr['name'],
            $arr['price'],
            $arr['height'],
            $arr['width'],
            $arr['length']
        );
        $forniture->saveToDb();
    }

    public function createBook($arr)
    {
        $book = new Book($arr['sku'], $arr['name'], $arr['price'], $arr['weight']);
        $book->saveToDb();
    }

    public function redirect()
    {
        $string = '<script type="text/javascript">';
        $string .= 'window.location = "http://localhost/"';
        $string .= '</script>';

        echo $string;
    }
}
