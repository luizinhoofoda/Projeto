/// controll the selection option display
$('#productType').on('change', function () {
  const selection = $(this).val()
  switch (selection) {
    case 'Book':
      $('#optionsBook').show()
      $('#optionsDvd').hide()
      $('#optionsFurniture').hide()
      break
    case 'Furniture':
      $('#optionsFurniture').show()
      $('#optionsBook').hide()
      $('#optionsDvd').hide()
      break
    case 'Dvd':
      $('#optionsDvd').show()
      $('#optionsBook').hide()
      $('#optionsFurniture').hide()
      break
    default:
      $('#optionsBook').hide()
  }
})
// cancel button logic
$('#cancel').click(function () {
  window.location.href = 'http://localhost'
  return false
})
