/*show the number from 1 to 30, 
if the number can be devided by 3, show 'fizz', 
if the number can be devided by 5, show 'buzz', 
if can be devided by both, show 'fizzbuzz'*/

var i = 1;
while (i < 31) {
	if (i % 15 == 0){
		console.log ("fizzbuzz");
	} else if (i % 3 == 0){
		console.log ("fizz");
	} else if (i % 5 == 0){
		console.log ("buzz");
	} else {
		console.log ("%d", i);
	}
	i = i + 1;
}