//function that is call in the mass delete button and  receive the id and send id to be deleted via the api
function deleteproducts(id) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  fetch("http://localhost/index.php/product/delete/" + id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//check box logic
//setup of variables
let deleteFromScreen = [];
let i  = 0; 
//verify is the check box is selected
$(document).on("click", "#delete-prod", function () {
var isChecked = $(this).is(":checked");
if (isChecked == true){
//then gets the id of the product from the div id and adds it to the array
  deleteFromScreen[i] = $(this).closest('div').attr('id');
  i++
}
 else {
  for(let i = 0; i < deleteFromScreen.length; i++){
  //when unselect remove the id from the array
    if ( deleteFromScreen[i] === $(this).closest('div').attr('id')  ) { 
    deleteFromScreen.splice(i, 1)
  }
  }

}
});



//two buttons logic
//mass delete button logic, get all the ids from the array and pass it to a function that will send it to the api
$(".remove-slick").on("click", function () {
for(let i = 0; i < deleteFromScreen.length; i++){
  $('#'+deleteFromScreen[i]).remove()
  
  deleteproducts(deleteFromScreen[i])
 
}
deleteFromScreen.length = 0
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
  let url = "http://localhost/index.php/product/list";
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
                          <input type="checkbox" name="dvd" class = "delete-checkbox" id=delete-prod>
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
