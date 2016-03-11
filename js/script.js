	/*FUNCTION NAMES*/
"use strict";
var arr = [];

  for (var i = 0; i < 5; i++) {
  arr.push ( prompt('Enter names') );
}

var userName = prompt('Enter your name', '');
	
for (var i = 0; i < arr.length; i++) {
  if (userName == arr[i]){
  var succesLogin = true;
  var login = arr[i];
  }
}

  if (succesLogin == true) { 
  alert(login + ', ' + ' ' + 'Вы успешно вошли');
} else {
   alert('Имя - ' + userName + ' ' + 'не существует.');
}

	/*FUNCTION POW*/
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt('Enter x', '');
var n = prompt('Enter n', '');

if (n<=0){
  alert( 'Степень должны быть > 0 и не равна 0');
}else{
  alert( pow(x, n) );
  console.log( 'pow(x, n) = ', ( pow(x, n) ));
}
