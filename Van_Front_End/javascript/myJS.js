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
/*
function addition(){
//document.write(linebreak); // this is for newline
result= one + two;
//document.write('addition result is: ' + result);
    
 glue to the HTML page
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

function addition(){
    result = one + two; // this will perform addition
    
    document.getElementById("resultArea").innerHTML=
        "<p>Addition Result &nbsp;" 
        +result +
        "</p>";
}

function substraction(){
    
    result = one - two; // this will perform addition
    
    document.getElementById("resultArea").innerHTML=
        "<p>Substraction Result &nbsp;" 
        +result +
        "</p>";

}

function multiplication(){
    result = one * two; // this will perform addition
    
    document.getElementById("resultArea").innerHTML=
        "<p>Multiplication Result &nbsp;" 
        +result +
        "</p>";
}

function backendJS(){
    document.getElementById("resultArea").innerHTML=
        "<h1> JavaScript Page</h1>"+
        "<p> This paragraph/div is updating from JS</p>";
}


/* User Object */

var user={
    /*properties*/
    /*Key value pair*/
    name: 'Nafi',
    
    email: 'kwnafi@yahoo.com',
    status: 'instructor',
    information: function() {
        return one + 12;
    }
    
};

function userInfor(){
    
    
    document.getElementById('userInfo').innerHTML= 
        "<p>"+
        "User "+ user.name + " &nbsp;"
    + "Email " + user.email + " &nbsp;"
    + "Status " + user.status + " &nbsp;"
    + "<br>Function Output " + user.information 
        +"</p>";
    
}


function results(){
        var x = document.getElementById('varone').value;
        //var val = x.elements[0].value;
        
        
    /*
    Decision Structure
    */
    
    if(x < 60){
        document.getElementById('res').innerHTML="<p> Fail </p>";
    }
    else{
        document.getElementById('res').innerHTML="<p> Pass </p>";
    }
    
}











