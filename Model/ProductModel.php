<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ProductModel extends Database
{
    public function getProducts($limit)
    {
        return $this->select("SELECT `prodId`,`prodSku`, `prodName`, `prodPrice`, `propName`, `propValue` FROM `products` as A LEFT JOIN properties as B on a.id = b.prodId LIMIT ?", ["i", $limit]);
    }
}