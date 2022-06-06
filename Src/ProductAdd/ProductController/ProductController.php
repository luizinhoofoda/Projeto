<?php

namespace MyApp\ProductAdd\ProductController;

use MyApp\ProductAdd\ProductClasses\Book;
use MyApp\ProductAdd\ProductClasses\Dvd;
use MyApp\ProductAdd\ProductClasses\Furniture;

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
