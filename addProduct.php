<?php

require_once realpath("vendor/autoload.php");
use MyApp\ProductAdd\ProductController\ProductController;

if (isset($_POST['submit'])) {
    $prod = new ProductController();
    $prodType = "create" . $_POST['productType'];
    $prod->$prodType($_POST);
    $prod->redirect();
}

?>
   
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <link rel="stylesheet" href="Src/ProductAdd/style/style.css">
    <script type="text/javascript" src="Src/ProductAdd/script/script.js" defer></script>
    <script type="text/javascript" src="Src/ProductAdd/script/dataValidationScript.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
</head>
<body>
    <header>
        <h1>Product Add</h1>
       
        <button class="buttons headerButton" id="cancel" name="return">Cancel</button>
    </header>
    <div class="form-container">
    <form action="" method="POST" id="product_form">
        <label for="sku" class="sku">Sku:</label>
        <input type="text" id="sku" name="sku" placeholder="sku">
        
        <label for="name" class="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="name">
        
        <label for="price" class="price">Price:</label>
        <input type="text" id="price" name="price" placeholder="price">
       
        <label for="productType">Type Switcher</label>
        <select name="productType" id="productType">
            <option value="" disabled selected hidden>Products</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
            <option value="Dvd">DVD</option>
        </select>

        <div id = "optionsBook">
            <label for="weight" class="weight">Weight:</label>
            <input type="text" id="weight" name="weight">

            <p>Please provide the weight in KG</p>
            
        </div>
        <div id = "optionsFurniture">
            <label for="height" class="height">Height:</label>
            <input type="text" id = "height" name="height">
            
            <label for="width" class="width">Width:</label>
            <input type="text" id = "width" name="width" >
            
            <label for="length" class="length">Length:</label>
            <input type="text" id = "length" name="length">  
         
            <p>Please provide the dimensions in HxWxL format</p>

        </div>
        <div id = "optionsDvd">
            <label for="size" class="size">Size:</label>
            <input type="text" id = "size" name="size">
            
            <p>Please provide the size in MB</p>

        </div>
        <button class="buttons formButton" type="submit" form="product_form" name="submit">Save</button>
    </form>
    </div>
    <div></div>
    <footer><p>Scandiweb Test assignment</p></footer>
    
    
</body>

</html>
