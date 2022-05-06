
//mudar, codigo horrivel péssimo
$('#productType').on('change',function(){
    var selection = $(this).val();
   switch(selection){
    case "book":
   $("#optionsBook").show()
   $("#optionsDvd").hide()
   $("#optionsForniture").hide()
  break;
  case "forniture":
    $("#optionsForniture").show()
    $("#optionsBook").hide()
    $("#optionsDvd").hide()
   break;
   case "dvd":
    $("#optionsDvd").show()
    $("#optionsBook").hide()
    $("#optionsForniture").hide()
   break;
   default:
   $("#optionsBook").hide()
   
   }
});
$(document).ready(function() {
  $("#product_form").validate({
  rules: {
  sku : {
    required: true,
  },
  name: {
    required: true,
  
  },
  price: {
  required: true,
  number: true,
  
  },
  productType: 
  {
    required: true
  },

  size: {
    required: {
    depends: function(elem) {
    return $("#productType").val() == "dvd"
    }
    },
    number: true,
    min: 1
    },
  weight: {
  required: {
  depends: function(elem) {
  return $("#productType").val() == "book"
  }
  },
  number: true,
  min: 1
  }
  }, 
  height: {
    required: {
    depends: function(elem) {
    return $("#productType").val() == "forniture"
    }
    },
    number: true,
    min: 1
    },
 
  width: {
      required: {
      depends: function(elem) {
      return $("#productType").val() == "forniture"
      }
      },
      number: true,
      min: 1
      },
  length: {
      required: {
      depends: function(elem) {
        return $("#productType").val() == "forniture"
        }
        },
      number: true,
      min: 1
        },

  
  messages:{
sku:{
  required: "Please, submit required data",
  
},
name:{
  required: "Please, submit required data",
  
},
price:{
  required: "Please, submit required data",
  number: "Please, the data must be a number"
},
productType:{
  required: "Please, select a product type",
  
},
size:{
  required: "Please, submit required data",
  number: "Please, the data must be a number",
  min: "Please, the data must be greater than zero"

},
weight:{
  required: "Please, submit required data",
  number: "Please, the data must be a number",
  min: "Please, the data must be greater than zero"

},
height:{
  required: "Please, submit required data",
  number: "Please, the data must be a number",
  min: "Please, the data must be greater than zero"

},
width:{
  required: "Please, submit required data",
  number: "Please, the data must be a number",
  min: "Please, the data must be greater than zero"

},
length:{
  required: "Please, submit required data",
  number: "Please, the data must be a number",
  min: "Please, the data must be greater than zero"

},
  },



  errorPlacement: function(error, element) {
    if (element.attr("name") == "sku" )
        error.insertAfter(".sku");
    else if  (element.attr("name") == "phone" )
        error.insertAfter(".some-other-class");
    else
        error.insertAfter(element);
}});
  });
  