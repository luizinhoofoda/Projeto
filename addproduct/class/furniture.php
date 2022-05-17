<?php 

require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
//include_once "/MAMP/htdocs/addproduct/class/product.php";
//set the furniture class, hers unique values and the save to db method
class Furniture extends Product{

    function set_height($height){
        $this->height = $height;
    }
    function set_width($width){
        $this->width = $width;
    }
    function set_length($length){
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