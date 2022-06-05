<?php

namespace MyApp\AddProduct\ProductController;

define("DB_HOST", "localhost");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "root");
define("DB_DATABASE_NAME", "loginapp");

class Db
{
    private $_conn = null;
    public function getConnection()
    {
        if (!is_null($this->_conn)) {
            return $this->_conn;
        }
        $this->_conn = false;
        try {
            return$this->_conn = new \mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
        } catch (\Exception $e) {
              echo $e; 
        }
        return $this->_conn;
    }

    public function post($query = "")
    {
        try {
            $stmt = $this->executeStatement($query);
            $stmt->close();
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
        return false;
    }
    
    private function executeStatement($query = "")
    {
        try {
            $connection = $this->getConnection();
            $stmt = $connection->prepare($query);
 
            if ($stmt === false) {
                throw new \Exception("Unable to do prepared statement: " . $query);
            }

            $stmt->execute();
 
            return $stmt;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }
}
