// get the json from the api
async function getproducts () {
  const url = 'http://localhost/api.php/product/list'
  try {
    const res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log('erro')
  }
}

let i = 0

/*  block in which the product will be display, the names are not very good, but it made it easier to link with the DB and improved the hability to have
new products by simply addig the main propertyName+Display as a function. Eslint was disable in the function declaration lines because the functions are called in a if or in another file,
causing a error that was not a error in this case */
// eslint-disable-next-line no-unused-vars
function weightDisplay (arrOfProducts) {
  const htmlSegment = `<div class="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="book" class = "delete-checkbox" id="delete-prod">
  <h2>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice} $</h2>
  <h2>Weight: ${arrOfProducts[i].propValue} KG</h2>
  
</div>`
  i++

  return $('.book').slick('slickAdd', htmlSegment)
}
// eslint-disable-next-line no-unused-vars
function sizeDisplay (arrOfProducts) {
  const htmlSegment = `<div class="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="dvd" class = "delete-checkbox" id="delete-prod">
  <h2>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice} $</h2>
  <h2>Size: ${arrOfProducts[i].propValue} MB</h2>
  </div>`
  i++
  return $('.dvd').slick('slickAdd', htmlSegment)
}
// eslint-disable-next-line no-unused-vars
function heightDisplay (arrOfProducts) {
  const htmlSegment = `<div class ="product-box" id = ${arrOfProducts[i].prodId}>
  <input type="checkbox" name="furniture" class = "delete-checkbox" id = "delete-prod">
  <h2>${arrOfProducts[i].prodSku} </h1>
  <h2>${arrOfProducts[i].prodName}</h2>
  <h2>${arrOfProducts[i].prodPrice} $</h2>
  <h2>Dimension: ${arrOfProducts[i].propValue}x${arrOfProducts[i + 1].propValue}x${arrOfProducts[i + 2].propValue}</h2>
  </div>`
  i++
  $('.furniture').slick('slickAdd', htmlSegment)
  i = i + 2
}
// eslint-disable-next-line no-unused-vars
async function renderproducts () {
  const products = await getproducts()

  while (i < products.length) {
    const funcName = products[i].propName + 'Display'
    window[funcName](products)
  }
}
