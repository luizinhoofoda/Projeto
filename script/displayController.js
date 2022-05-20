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
  console.log(products.length)
  while(i<products.length){
    let funcName = products[i].propName + "Display" 
  let  fn = window[funcName](products);
}
 
    
}
