<?php

namespace MyApp\AddProduct\ProductClasses;
use MyApp\AddProduct\ProductController\Db;
require_once realpath("./vendor/autoload.php");
abstract class Product extends Db
{
    public function __construct($sku, $name, $price)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
    }

    public function get_sku()
    {
        return $this->sku;
    }
    
    public function get_name()
    {
        return $this->name;
    }

    public function get_price()
    {
        return $this->price;
    }
       
    public function saveToDb()
    {
        $cadProd = "INSERT INTO product (PRODUCT_SKU, PRODUCT_NAME, PRODUCT_PRICE)
                    VALUES('$this->sku', '$this->name', '$this->price');";
        $this->post($cadProd);
    }
}
