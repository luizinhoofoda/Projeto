<?php

require_once "/MAMP/htdocs/addproduct/processing/require_master.php";
//set the generic product class, the generic value and the base of the save to db method
abstract class Product{
    //public function __construct($sku, $name, $price) {
      //  $this->sku = $sku;
       // $this->name = $name;
       // $this->price = $price;    
     //  }

       function set_sku($sku){        
        $this->sku = $sku;
       }
    
       function set_name($name){
        $this->name = $name;
       }
    
       function set_price($price){   
        $this->price = $price;
       } 

       function get_sku(){    
        return $this->sku;
       }
    
       function get_name(){    
        return $this->name;
       }

       function get_price(){   
        return $this->price;
       }
       
       function saveToDb(){
        global $mysqli;
        $querry = "INSERT INTO product (PRODUCT_SKU, PRODUCT_NAME, PRODUCT_PRICE) VALUES('$this->sku', '$this->name', '$this->price');";
        mysqli_query($mysqli, $querry);
    }
    }
    
    
    ?>
    

    

    