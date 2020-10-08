var small_pizza = Number(prompt("how much small pizza's do u want"));
var medium_pizza = Number(prompt("how much medium pizza's do u want"));
var large_pizza = Number(prompt("how much large pizza's do u want"));


const small_price = 5.50;
const medium_price = 8.25;
const large_price = 10.85;

document.write(small_pizza + "x" + "small pizza" + "$" + small_pizza * small_price);
document.write("<br>");
document.write(medium_pizza + "x" + "medium pizza" + "$" + medium_pizza * medium_price);
document.write("<br>");
document.write(large_pizza + "x" + "large pizza" + "$" + large_pizza * large_price);


var total_small = small_pizza  * small_price;
var total_medium = medium_pizza * medium_price;
var total_large = large_pizza  * large_price;
var final_total = ("Your final is" + "$" +(total_small + total_medium + total_large));

document.write("<hr>");

document.write(final_total);