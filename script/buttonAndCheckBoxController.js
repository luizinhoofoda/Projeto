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
  