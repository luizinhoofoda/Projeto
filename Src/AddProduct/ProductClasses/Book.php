<?php

namespace MyApp\AddProduct\ProductClasses;

require_once realpath("./vendor/autoload.php");
class Book extends Product
{
    public function __construct($sku, $name, $price, $weight)
    {
        parent::__construct($sku, $name, $price);
        $this->weight = $weight;
    }

    public function get_weight()
    {
        return $this->weight;
    }

    public function saveToDb()
    {
        $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                 VALUES('$this->sku', '$this->name', '$this->price');";
        $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                 VALUES('weight', '$this->weight', LAST_INSERT_ID());";
 
        $this->post($cadProd);
        $this->post($cadProp);
    }
}
