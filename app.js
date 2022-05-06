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

let deleteFromScreen = [];
let i  = 0; 
$(document).on("click", "#delete-prod", function () {
var isChecked = $(this).is(":checked");
if (isChecked == true){
//pega o nome do container e index que é gerado pelo slider e adiciona no array
  //deleteFromScreen[i] = $(this).attr('name');
  //i++
  deleteFromScreen[i] = $(this).closest('div').attr('id');
  i++
}
 else {
  for(let i = 0; i < deleteFromScreen.length; i++){
    //pega o index e nome do container da checkbox deselecionada e remove do array
    if ( deleteFromScreen[i] === $(this).closest('div').attr('id')  ) { 
    //&& deleteFromScreen[i+1] ===$(this).closest('div').attr('data-slick-index')
    deleteFromScreen.splice(i, 1)
    
  }
  }

}
});
$(".remove-slick").on("click", function () {
for(let i = 0; i < deleteFromScreen.length; i++){
  $('#'+deleteFromScreen[i]).remove()
  
  deleteproducts(deleteFromScreen[i])
 
}
deleteFromScreen.length = 0
});






$(".dvd").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false
});
$(".book").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false
});
$(".forniture").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false
});




async function getproducts() {
  let url = "http://localhost/index.php/product/list";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log("erro");
  }
}




async function renderproducts() {
  let products = await getproducts();


  for (let i = 0; i < products.length; i++) {
    if (products[i].propName === "weight") {
      //monta o bloco do produto
      var htmlSegment = `<div class="product-box" id = ${products[i].prodId}>
                          <input type="checkbox" name="book" id="delete-prod">
                          <h1>Sku: ${products[i].prodSku}" </h1>
                          <h2>Nome: ${products[i].propName}</h2>
                          <h2>Preco: ${products[i].prodPrice}</h2>
                          <h2>${products[i].propName}: ${products[i].propValue}</h2>
                         
                      </div>`;
      //adiciona no container book o bloco gerado a cima
      $(".book").slick("slickAdd", htmlSegment);
    } else if (products[i].propName === "size") {
      var htmlSegment = `<div class="product-box" id = ${products[i].prodId}>
                          <input type="checkbox" name="dvd" id=delete-prod>
                          <h1>Sku: ${products[i].prodSku}" </h1>
                          <h2>Nome: ${products[i].propName}</h2>
                          <h2>Preco: ${products[i].prodPrice}</h2>
                          <h2>${products[i].propName}: ${products[i].propValue}</h2>
                         
                      </div>`;
                      
      $(".dvd").slick("slickAdd", htmlSegment);
    } else {

      var htmlSegment = `<div class ="product-box" id = ${products[i].prodId}>
  <input type="checkbox" name="forniture" id = "delete-prod">
  <h1>Sku: ${products[i].prodSku}" </h1>
  <h2>Nome: ${products[i].propName}</h2>
  <h2>Preco: ${products[i].prodPrice}</h2>
  <h2>${products[i].propName}: ${products[i].propValue}</h2>
  <h2>${products[i + 1].propName}: ${products[i + 1].propValue}</h2>
  <h2>${products[i + 2].propName}: ${products[i + 2].propValue}</h2>
 
</div>`;

      $(".forniture").slick("slickAdd", htmlSegment);
      i = i + 2;
    }
  }
}

renderproducts();
