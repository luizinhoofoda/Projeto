<?php 
require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
require_once "/MAMP/htdocs/addproduct/class/product.php";
class Book extends Product{

function set_weight($weight){
    $this->weight = $weight;
}
function saveToDb(){
    global $mysqli;
    $cadProd =   "INSERT INTO products (prodSku, prodName, prodPrice)
                 VALUES('$this->sku', '$this->name', '$this->price');";
    $cadProp =  "INSERT INTO properties (propName, propValue, prodId) 
                 VALUES('weight', '$this->weight', LAST_INSERT_ID());";
    mysqli_query($mysqli, $cadProd);
    mysqli_query($mysqli, $cadProp);
}


}
?>