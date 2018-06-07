var someString = "hello world this is a compute"
var lengthString = someString.split(" ").join("").length;
var inputString = someString.split(" ").join("").split("");

var root = parseInt(Math.sqrt(lengthString));
var arr = [];



row = root;
column = root;

if (row*column < lengthString) {
	row = row + 1;
}
if (row*column < lengthString) {
	column = column + 1;
}


for (i = 0; i < row; i++) {
   arr.push(inputString.slice(i * row, (i+1)*row));
document.getElementById("test").innerHTML = arr;
 }


  var testArr = [];
 for (b = 0; b < column; b ++) {
 for (a = 0; a < row; a ++) {
     testArr.push(arr[a][b]);
 }
//for (b = 0; b < column; b ++) {

   }


 document.getElementById("test2").innerHTML = testArr.join("");
