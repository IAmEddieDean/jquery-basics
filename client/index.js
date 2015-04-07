'use strict';

$(document).ready(init);

function init(){
  //$('#go').click(go);
  //$('#equals').click(equals);
  $('.article').click(setText);
  $('.noun').click(setText);
  $('.verb').click(setText);
  $('.adjective').click(setText);
  $('#clear').click(clear);
}

function clear(){
  $('#sentence').text('');
}
function setText(){
  var old = $('#sentence').text();
  var text = $(this).text();
  var newText = old + ' ' + text;
  $('#sentence').text(newText);
}




/*function go(){
  var numbers = $('#numbers').val();
  numbers = numbers.split(',');
  numbers = numbers.map(function(n){
    return n * 1;
  });

  var sum = numbers.reduce(function(old, curr){
    return old + curr;
  });

  var product = 1;
  for(var i = 0; i < numbers.length; i++){
    product = product * numbers[i];
  }

  $('#sum').text(sum);
  $('#product').text(product);


}

function equals() {
  var num1 = $('#x').val();
  var num2 = $('#y').val();
  var op = $('#operator').val();
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  var result = [];
  switch(op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
  }
  $('#outcome').text(result);

}
*/
