<?php

namespace MyApp\ProductAdd\ProductClasses;

class Furniture extends Product
{
    public function __construct($sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($sku, $name, $price);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    public function saveToDb()
    {
        $cadProd =  "INSERT INTO products (prodSku, prodName, prodPrice)
                      VALUES('$this->sku', '$this->name', '$this->price');";
        $cadProp =  "INSERT INTO properties (propName, propValue, prodId)
                     VALUES
                     ('height', '$this->height', LAST_INSERT_ID()),
                     ('width', '$this->width', LAST_INSERT_ID()),
                     ('length', '$this->length', LAST_INSERT_ID());";

        $this->post($cadProd);
        $this->post($cadProp);
    }
}
