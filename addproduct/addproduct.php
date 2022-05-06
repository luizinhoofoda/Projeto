<?php 
require __DIR__."/processing/require_master.php";
//require_once "/MAMP/htdocs/addproduct/processing/functions.php";
$sku_error = $name_error = $price_error = $weight_error = $size_error = $height_error = $width_error = $length_error = $select_error    =  "";
if(isset($_POST['submit'])){


    //validateData($_POST);
    createProduct($_POST);
    header("Location: http://localhost");
}



?>
   
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
</head>
<body>
    <div>
<form action="" method="POST" id="product_form">
        <label for="sku" class="sku">Sku:</label>
        <input type="text" id="sku" name="sku" placeholder="sku">
        
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="name">
        
        <label for="price">Price:</label>
        <input type="text" id="price" name="price" placeholder="price">
       
        <label for="productType">Type Switcher</label>
        <select name="productType" id="productType">
            <option value="" disabled selected hidden>Products</option>
            <option value="book">Book</option>
            <option value="forniture">Forniture</option>
            <option value="dvd">Dvd</option>
        </select>
        
        <div id = "optionsBook">
            <label for="weight">Weight:</label>
            <input type="text" id="weight" name="weight" placeholder="weight">
            
            <p>Please provide the weight in Kg</p>
            
        </div>
        <div id = "optionsForniture">
            <label for="height">Height:</label>
            <input type="text" id = "height" name="height">
            
            <label for="width">Width:</label>
            <input type="text" id = "width" name="width" >
            
            <label for="length">Length:</label>
            <input type="text" id = "length" name="length">  
         
            <p>Please provide the dimensions in HxWxL format</p>
        </div>
        <div id = "optionsDvd">
            <label for="size">Size:</label>
            <input type="text" id = "size" name="size" placeholder="size">
            
            <p>Please provide the size in MB</p>
        </div>
        
    </form>
    </div>
    <div><input type="submit" form="product_form" name="submit"></div>
    <script type="text/javascript" src="script.js"></script>
    
    </body>

</html>

   
