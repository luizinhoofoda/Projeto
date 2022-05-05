
//mudar, codigo horrivel péssimo
$('#productSelect').on('change',function(){
    var selection = $(this).val();
   switch(selection){
   case "product":
   $("#optionsBook").hide()
   $("#optionsDvd").hide()
   $("#optionsForniture").hide()
   break;
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