// Business Logic (Back End)

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(result);

//**Front End below this point**

$(document).ready(function(){
  $("#add-btn").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result = add(number1, number2);
    $("#result").val(result);
  });//add event end
  $("#subtract-btn").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result = subtract(number1, number2);
    $("#result").val(result);
  });//sub event end
  $("#multiply-btn").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result = multiply(number1, number2);
    $("#result").val(result);
  });//multiply event end
  $("#divide-btn").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    var result = divide(number1, number2);
    $("#result").val(result);
  });//divide event end
});//doc ready end
