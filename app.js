//function that is call in the mass delete button and  receive the id and send id to be deleted via the api
function deleteProductsFromDB(id) {
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  fetch("http://localhost/api.php/product/delete/" + id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



//mass delete button logic, check all checkboxes, delete only the ones that are checked. initially i did a more focused idea but the AutoQa wasn't acepting
$(".remove-slick").on("click", function () {
  deleteFromScreen = []
  let y = 0
  checkboxes = document.getElementsByClassName('delete-checkbox');
  for (i=0; i<checkboxes.length;i++){
    var isChecked = $(checkboxes[i]).is(":checked");
     if (isChecked == true){
      checkbox = checkboxes[i]
   
      deleteFromScreen[y] = $(checkbox).closest('div').attr('id')
      y++

  
    }
}
//delete all checked boxes from the screen and DB
for(let i = 0; i < deleteFromScreen.length; i++){
   $('#'+deleteFromScreen[i]).remove()
   
  if(deleteFromScreen[i] != undefined)

   deleteProductsFromDB(deleteFromScreen[i])
   
 }
});



//add logic, simply go to another page
$('#addProductButton').click(function() {

  window.location.href = 'http://localhost/addproduct/addproduct.php';
  return false;
});


//define the settings for the slick slider, how much to show and scroll 
$(".dvd").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false
});
$(".book").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false
});
$(".furniture").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false
});



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
  <h1>Sku: ${arrOfProducts[i].prodSku} </h1>
  <h2>Name: ${arrOfProducts[i].prodName}</h2>
  <h2>Price: ${arrOfProducts[i].prodPrice}</h2>
  <h2>Weight: ${arrOfProducts[i].propValue} KG</h2>
  
</div>`;
i++
//pass the block to the slic function 
return $(".book").slick("slickAdd", htmlSegment);
}
function sizeDisplay(arrOfProducts){
  var htmlSegment = `<div class="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="dvd" class = "delete-checkbox" id="delete-prod">
  <h1>Sku: ${arrOfProducts[i].prodSku} </h1>
  <h2>Name: ${arrOfProducts[i].prodName}</h2>
  <h2>Price: ${arrOfProducts[i].prodPrice}</h2>
  <h2>Size: ${arrOfProducts[i].propValue} MB</h2>
  </div>`;
  i++
return $(".dvd").slick("slickAdd", htmlSegment);
}

function heightDisplay (arrOfProducts){
  var htmlSegment = `<div class ="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="furniture" class = "delete-checkbox" id = "delete-prod">
  <h1>Sku: ${arrOfProducts[i].prodSku} </h1>
  <h2>Nome: ${arrOfProducts[i].prodName}</h2>
  <h2>Preco: ${arrOfProducts[i].prodPrice}</h2>
  <h2>Dimension: ${arrOfProducts[i].propValue}x${arrOfProducts[i + 1].propValue}x${arrOfProducts[i + 2].propValue}</h2>
  </div>`; 
i++
$(".furniture").slick("slickAdd", htmlSegment);
i = i + 2;
console.log(i)
console.log(arrOfProducts[3].propName)
}


async function renderproducts() {
  let products = await getproducts();
  for (let y = 0; y < products.length; y++) {

  

  let funcName = products[i].propName + "Display" 
   let  fn = window[funcName](products);
  }
 
}

renderproducts();
