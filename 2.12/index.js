alert( null || 2 || undefined );
// The answer will be 2. It's the first truthy value.
alert( alert(1) || 2 || alert(3) );
// The answer will be 1, and then 2. 
alert( 1 && null && 2 );
//The answer will show null.
alert( alert(1) && alert(2) );
//The answer will return 1 and then undefined. 
alert( null || 2 && 3 || 4 );
//The answer will be 3, because it's the first truthy value. It will do && first before ||.
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);
if (-1 || 0) alert( 'first' ); // truthy, will execute.
if (-1 && 0) alert( 'second' ); // falsy, won't execute. 
if (null || -1 && 1) alert( 'third' ); // 1, will execute. 

