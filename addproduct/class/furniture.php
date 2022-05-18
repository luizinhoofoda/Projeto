<?php 

require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
//include_once "/MAMP/htdocs/addproduct/class/product.php";
//set the furniture class, hers unique values and the save to db method
class Furniture extends Product{
    public function __construct($sku, $name, $price, $height, $width, $length) {
        parent::__construct($sku, $name, $price);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;    
       }

    function saveToDb(){

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
?>