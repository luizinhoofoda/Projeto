<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ProductModel extends Database
{
    public function getProducts()
    {
        return $this->select("SELECT `prodId`,`prodSku`, `prodName`, `prodPrice`, `propName`, `propValue` FROM `products` as A LEFT JOIN properties as B on a.id = b.prodId" );
    }
    public function deleteProducts($id)
    {
         return $this->delete("DELETE FROM products WHERE id = $id");
    }
}
?>