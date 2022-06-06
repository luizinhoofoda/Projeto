// function that is call in the mass delete button and  receive the id and send id to be deleted via the api
function deleteProductsFromDB (id) {
  const requestOptions = {
    method: 'POST',
    redirect: 'follow'
  }
  fetch('http://localhost/api.php/product/delete/' + id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}

// mass delete button logic, check all checkboxes, delete only the ones that are checked. initially i did a more focused idea but the AutoQa wasn't acepting
$('.remove-slick').on('click', function () {
  const deleteFromScreen = []
  let y = 0
  const checkBoxes = document.getElementsByClassName('delete-checkbox')
  /* I actually didn't understand this logic after coming back a few days later so I will explain it better,we are selectin all of the checkboxes in the screen
    and passing to checkboxes as a array, then I am interating this array and verifying if the checkbox is checked, if she is, then its id(that is the
      product id itself) is passed to deleteFromScreen, a array, in which later we iterate this array and delete all ids in it from the db and screen */
  for (let i = 0; i < checkBoxes.length; i++) {
    const isChecked = $(checkBoxes[i]).is(':checked')
    if (isChecked === true) {
      const checkBox = checkBoxes[i]

      deleteFromScreen[y] = $(checkBox).closest('div').attr('id')
      y++
    }
  }
  // delete all checked boxes from the screen and DB
  for (let i = 0; i < deleteFromScreen.length; i++) {
    $('#' + deleteFromScreen[i]).remove()

    if (deleteFromScreen[i] !== undefined) { deleteProductsFromDB(deleteFromScreen[i]) }
  }
})

// add logic, simply go to another page
$('#addProductButton').click(function () {
  window.location.href = 'http://localhost/addproduct.php'
  return false
})
