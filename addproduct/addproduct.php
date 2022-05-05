
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
</head>

<body>

    <form action="/addproduct/processing/processing.php" method="POST">
        <input type="text" name="sku" placeholder="sku">
        <input type="text" name="name" placeholder="name">
        <input type="text" name="price" placeholder="price">
        <select name="productSelect" id="productSelect">
            <option value="product">Products</option>
            <option value="book">Book</option>
            <option value="forniture">Forniture</option>
            <option value="dvd">Dvd</option>
        </select>
        <div id = "optionsBook">
            <input type="text" name="weight" placeholder="weight">
        </div>
        <div id = "optionsForniture">
            <input type="text" name="height" placeholder="heig2th">
            <input type="text" name="length" placeholder="length">
            <input type="text" name="width" placeholder="width">
        </div>
        <div id = "optionsDvd">
            <input type="text" name="size" placeholder="size">
        </div>
        <input type="submit" name="submit">
    </form>
    <script type="text/javascript" src="script.js"></script>
</body>

</html>