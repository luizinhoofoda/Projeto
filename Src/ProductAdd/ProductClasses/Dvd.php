<?php

namespace MyApp\ProductAdd\ProductClasses;

class Dvd extends Product
{
    public function __construct($sku, $name, $price, $size)
    {
        parent::__construct($sku, $name, $price);
        $this->size = $size;
    }

    public function saveToDb()
    {
        $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                     VALUES('$this->sku', '$this->name', '$this->price');";
        $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                     VALUES('size', '$this->size', LAST_INSERT_ID());";

        $this->post($cadProd);
        $this->post($cadProp);
    }
}
