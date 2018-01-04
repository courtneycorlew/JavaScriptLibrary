'use strict';
if ("0") {
    alert( 'Hello' );
  }
  //Will the above alert be shown? Yes, because there is a value.
 let value = prompt('What is the "official" name of JavaScript?', '');
 if (value === 'ECMAScript') {
     alert('Right!');
 } else {
     alert("You don'tknow? ECMAScript!");
 };

 let number = prompt('Type a number', 0);
 if (number > 0) {
     alert( 1 );
 } else if (number < 0) {
     alert ( - 1 );
 } else {
     alert( 0 );
 };

 let userLogin = prompt("Who's there?", "");
 if  (userLogin == 'Admin') {
     let pass = prompt('Passsword', '');
     if (pass == 'TheMaster') {
         alert( 'Welcome!' );
     } else if (pass == null) {
         alert ('Canceled.');
     } else {
         alert('Wrong password');
     }
 } else if (userLogin == null) {
     alert( 'Canceled');
 } else {
     alrt ("I don't know you");
 };

 /*
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
 */
result = (a + b < 4) ? 'Below' : 'Over';

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
let message = (login == 'Employee') ? 'Hello':
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'';