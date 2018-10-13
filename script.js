function contactInfo() {

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var age = document.getElementById("age").value;


document.getElementById('displayName').innerHTML = "Thanks for stopping by " + firstName + " " + lastName + "!";
document.getElementById('displayAge').innerHTML = age;

}