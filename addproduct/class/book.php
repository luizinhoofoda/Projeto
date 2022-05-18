<?php 
require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
require_once "/MAMP/htdocs/addproduct/class/product.php";
//set the book class, her unique value and the save to db method
class Book extends Product{
    
    
    public function __construct($sku, $name, $price, $weight) {
        parent::__construct($sku, $name, $price);
        $this->weight = $weight;   

       }

       function get_weight(){
           
        return $this->weight;
       }

function saveToDb(){

    $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                 VALUES('$this->sku', '$this->name', '$this->price');";
    $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                 VALUES('weight', '$this->weight', LAST_INSERT_ID());";
 
   $this->post($cadProd);
   $this->post($cadProp);
}


}
?>