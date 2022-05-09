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
$(".forniture").slick({
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



//render the json from the api, building a div with the products information and passing to the slick function to display the carousel
async function renderproducts() {
  let products = await getproducts();


  for (let i = 0; i < products.length; i++) {
    if (products[i].propName === "weight") {
      //build the block
      var htmlSegment = `<div class="product-box" id = ${products[i].prodId}>
                          <input type="checkbox" name="book" class = "delete-checkbox" id="delete-prod">
                          <h1>Sku: ${products[i].prodSku} </h1>
                          <h2>Name: ${products[i].prodName}</h2>
                          <h2>Price: ${products[i].prodPrice}</h2>
                          <h2>Weight: ${products[i].propValue} KG</h2>
                         
                      </div>`;
      //pass the block to the slic function 
      $(".book").slick("slickAdd", htmlSegment);
      
    } else if (products[i].propName === "size") {
      var htmlSegment = `<div class="product-box" id = ${products[i].prodId}>
                          <input type="checkbox" name="dvd" class = "delete-checkbox" id="delete-prod">
                          <h1>Sku: ${products[i].prodSku} </h1>
                          <h2>Name: ${products[i].prodName}</h2>
                          <h2>Price: ${products[i].prodPrice}</h2>
                          <h2>Size: ${products[i].propValue} MB</h2>
                          </div>`;
                      
      $(".dvd").slick("slickAdd", htmlSegment);
    } else {
        var htmlSegment = `<div class ="product-box" id = ${products[i].prodId}>
                          <input type="checkbox" name="forniture" class = "delete-checkbox" id = "delete-prod">
                          <h1>Sku: ${products[i].prodSku} </h1>
                          <h2>Nome: ${products[i].prodName}</h2>
                          <h2>Preco: ${products[i].prodPrice}</h2>
                          <h2>Dimension: ${products[i].propValue}x${products[i + 1].propValue}x${products[i + 2].propValue}</h2>
                          </div>`; 

      $(".forniture").slick("slickAdd", htmlSegment);
      i = i + 2;
    }
  }
}

renderproducts();
