//get the json from the api
async function getproducts() {
    let url = "http://localhost/api.php/product/list";
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log("erro");
    }
  }
  



  let i = 0;

/*block in which the product will be display, the names are not very good, but it made it easier to link with the DB and improved the hability to have 
new products by simply addig the main propertyName+Display as a function */ 
function weightDisplay(arrOfProducts){
  var htmlSegment = `<div class="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="book" class = "delete-checkbox" id="delete-prod">
  <h1>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice}</h2>
  <h2>${arrOfProducts[i].propValue} KG</h2>
  
</div>`;
i++

return $(".book").slick("slickAdd", htmlSegment);
}

function sizeDisplay(arrOfProducts){
  var htmlSegment = `<div class="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="dvd" class = "delete-checkbox" id="delete-prod">
  <h1>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice}</h2>
  <h2>${arrOfProducts[i].propValue} MB</h2>
  </div>`;
  i++
return $(".dvd").slick("slickAdd", htmlSegment);
}

function heightDisplay (arrOfProducts){
  var htmlSegment = `<div class ="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="furniture" class = "delete-checkbox" id = "delete-prod">
  <h1>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice}</h2>
  <h2>${arrOfProducts[i].propValue}x${arrOfProducts[i + 1].propValue}x${arrOfProducts[i + 2].propValue}</h2>
  </div>`; 
i++
$(".furniture").slick("slickAdd", htmlSegment);
i = i + 2;
}


async function renderproducts() {
  let products = await getproducts();

  while(i<products.length){
    let funcName = products[i].propName + "Display" 
  let  fn = window[funcName](products);
}
 
    
}
