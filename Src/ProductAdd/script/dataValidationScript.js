// logic to validate the form, its using the Jquerry validate plugin
$(document).ready(function () {
  $('#product_form').validate({
    errorClass: 'my-error-class',
    // defines what would be check if when the submit button is pressed, if is required, if it is a number etc
    rules: {
      sku: {
        required: true
      },
      name: {
        required: true
      },
      price: {
        required: true,
        number: true
      },
      productType: {
        required: true
      },
      size: {
        required: {
          depends: function (elem) {
            return $('#productType').val() === 'Dvd'
          }
        },
        number: true,
        min: 1
      },
      weight: {
        required: {
          depends: function (elem) {
            return $('#productType').val() === 'Book'
          }
        },
        number: true,
        min: 1
      },
      height: {
        required: {
          depends: function (elem) {
            return $('#productType').val() === 'Furniture'
          }
        },
        number: true,
        min: 1
      },
      width: {
        required: {
          depends: function (elem) {
            return $('#productType').val() === 'Furniture'
          }
        },
        number: true,
        min: 1
      },
      length: {
        required: {
          depends: function (elem) {
            return $('#productType').val() === 'Furniture'
          }
        },
        number: true,
        min: 1
      }
    },
    // define the error messages that will shown when the data fail to pass the validation
    messages: {
      sku: {
        required: 'Please, submit required data'
      },
      name: {
        required: 'Please, submit required data'
      },
      price: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number'
      },
      productType: {
        required: 'Please, select a product type'
      },
      size: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number',
        min: 'Please, the data must be greater than zero'
      },
      weight: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number',
        min: 'Please, the data must be greater than zero'
      },
      height: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number',
        min: 'Please, the data must be greater than zero'
      },
      width: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number',
        min: 'Please, the data must be greater than zero'
      },
      length: {
        required: 'Please, submit required data',
        number: 'Please, the data must be a number',
        min: 'Please, the data must be greater than zero'
      }
    },
    // changes the place that the error message will be shown
    errorPlacement: function (error, element) {
      if (element.attr('name') == 'sku') {
        error.insertAfter('.sku')
      } else if (element.attr('name') == 'name') {
        error.insertAfter('.name')
      } else if (element.attr('name') == 'price') {
        error.insertAfter('.price')
      } else if (element.attr('name') == 'size') {
        error.insertAfter('.size')
      } else if (element.attr('name') == 'weight') {
        error.insertAfter('.weight')
      } else if (element.attr('name') == 'height') {
        error.insertAfter('.height')
      } else if (element.attr('name') == 'width') {
        error.insertAfter('.width')
      } else if (element.attr('name') == 'length') {
        error.insertAfter('.length')
      } else {
        error.insertAfter(element)
      }
    }
  })
})
