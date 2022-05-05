<?php
require_once "require_master.php";
//possivel de mudança, necessário tratar o dado do formulario para evitar supresas
if(isset($_POST['submit'])){
    switch($_POST['productSelect']){
        case 'book':
            createBook($_POST['sku'],$_POST['name'],$_POST['price'], $_POST['weight']);
        break;
        case 'forniture':
            createForniture($_POST['sku'], $_POST['name'], $_POST['price'], $_POST['height'], $_POST['width'], $_POST['length']);
            break;
        case 'dvd':
             createDvd($_POST['sku'],$_POST['name'],$_POST['price'],$_POST['size']);

    }


    
    
}
