<?php 

require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
//set the DVD class, her unique value and the save to db method
class Dvd extends Product{
    
    function set_size($size){
        $this->size = $size;
       }
       
       function get_size(){
        return $this->size;
       }
    
    function saveToDb(){
        global $mysqli;
        $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                     VALUES('$this->sku', '$this->name', '$this->price');";
        $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                     VALUES('size', '$this->size', LAST_INSERT_ID());";
                     
        mysqli_query($mysqli, $cadProd);
        mysqli_query($mysqli, $cadProp);
    }

}
?>