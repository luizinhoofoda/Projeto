<?php 

require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
//set the DVD class, her unique value and the save to db method
class Dvd extends Product{
    
    public function __construct($sku, $name, $price, $size) {
        parent::__construct($sku, $name, $price);
        $this->size = $size;  
     
    }
        
       
       function get_size(){
        return $this->size;
       }
    
    function saveToDb(){


        $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                     VALUES('$this->sku', '$this->name', '$this->price');";
        $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                     VALUES('size', '$this->size', LAST_INSERT_ID());";
                     
                     $this->post($cadProd);
                     $this->post($cadProp);
    }

}
?>