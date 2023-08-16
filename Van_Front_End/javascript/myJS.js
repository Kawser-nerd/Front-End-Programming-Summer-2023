/* This section will work with the JavaScript variables, Operators and increment and decrement operation with linebreak*/

var one=7; // varibales in javascript are immutable. That means the value of the variables will be updated if you change it once. Except const variable, which is mutable, others are always immutable.
var two=5;
var result=0;
const linebreak="<br>"; // this is const variable the value of this variable can not be changed throughout the program. it will always be fixed.


/* Arithmatic Operations */
document.write("variable one value " + "&nbsp; &nbsp;" + one); // this is string concatenation
document.write("        "); // this is to put spaces

document.write("variable two value " + "&nbsp; &nbsp;" + two); // this is string concatenation
document.write("        "); // this is to put spaces

// Addition
function addition(){
//document.write(linebreak); // this is for newline
result= one + two;
//document.write('addition result is: ' + result);
    
// glue to the HTML page
document.getElementById("resultArea").innerHTML="<p> Addition Result is "+ result + "</p>";
}
// horizontal line
//document.write('<hr>');
// substraction
function substraction(){
//document.write(linebreak); // this is for newline
result= one - two;
//document.write('substraction result is: ' + result);
document.getElementById("resultArea").innerHTML="<p> Substraction "
}
// horizontal line
//document.write('<hr>');
// multiplication
function multiplication(){
document.write(linebreak); // this is for newline
result= one * two;
document.write('multiplication result is: ' + result);
}

/*document.write("Welcome to JS");// document is the object which holds the full html/css page. We need to call that object to hold the entities of html pages.*/


/* Functions in JavaScript */
function sayHello(){
    
    //document.write(linebreak);
    //document.write('<hr>');
    alert("Welcome to JavaScript");
    //document.write();
    
}














