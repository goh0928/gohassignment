questions();
function questions(){
 let name = String;
 let first,old = Number;
 name = prompt("What is your name?");
 first = prompt("How old are you when you first time used a  computer?");
 old = prompt("How old are you now?");
  let years = (old - first);
  document.getElementById("answer").innerHTML = (name +" ,you have used computer for "+ years +" years.");
}
