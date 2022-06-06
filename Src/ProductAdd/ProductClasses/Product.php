<?php

namespace MyApp\ProductAdd\ProductClasses;

use MyApp\ProductAdd\ProductController\Db;

abstract class Product extends Db
{
    public function __construct($sku, $name, $price)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
    }
    public function saveToDb()
    {
        $cadProd = "INSERT INTO product (PRODUCT_SKU, PRODUCT_NAME, PRODUCT_PRICE)
                    VALUES('$this->sku', '$this->name', '$this->price');";
        $this->post($cadProd);
    }
}
