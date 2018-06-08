$(document).ready(function(){
  var newString = "";
  var arrayOfRows = [];
  var arrayOfColumns = [];
  var arrayOfMessage = [];
  var row = 0;
  var column = 0;
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var filteredString = "";
  function cryptoConvert(string) {
    //FUNCTIONS THAT REMOVE THE SYMBOLS AND SPECIAL CHARACTERS FROM THE STRING
    filteredString = "";
    for (i = 0; i < string.length; i++) {
      if (alpha.includes(string.charAt(i))) {
        filteredString = filteredString + string.charAt(i);
      }
    }
    string = filteredString.toLowerCase();
    //FUNCTION THAT DETERMINES LENGTH OF STRING
    var lengthString = string.split(" ").join("").length;

    //FUNCTION THAT SPLITS THE STRING INTO CHARACTERS IN AN ARRAY WITHOUT SPACES
    var arrayOfCharacters = string.split(" ").join("").split("");

    //FUNCTION THAT DETERMINES SIZE OF GRID
    var root = parseInt(Math.sqrt(lengthString));
    row = root;
    column = root;

    if (row*column < lengthString) {
    	row = row + 1;
    }
    if (row*column < lengthString) {
    	column = column + 1;
    }
    console.log(row);
    console.log(column);
    //FUNCTION THAT SEPARATES THE ARRAY OF CHARACTERS INTO ROWS IN ANOTHER ARRAY
    // var arrayOfRows = [];
    for (i = 0; i < row; i++) {
       arrayOfRows.push(arrayOfCharacters.slice(i * column, (i+1)*column));
     }

    //FUNCTION THAT SEPARATES THE COLUMNS INTO AN ARRAY
    arrayOfColumns = [];
   	for (b = 0; b < column; b ++) {
   		for (a = 0; a < row; a ++) {
        if (arrayOfRows[a][b] !== undefined) {
       	arrayOfColumns.push(arrayOfRows[a][b]);
        }
      }
    }
    //FUNCTION THAT SPLITS THE NEW MESSAGE INTO 5 LETTER STRINGS SEPARATED BY A SPACE
    arrayOfMessage = [];
    for (i = 0; i < (arrayOfColumns.length / 5) + 1; i++) {
      arrayOfMessage.push(arrayOfColumns.slice(i * 5, (i+1)*5).join(""));
      arrayOfMessage.push(" ");
      }
    newString = arrayOfMessage.join(" ");
  }
  $("#form-cryptosquare").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    arrayOfRows = [];
    arrayOfColumns = [];
    arrayOfMessage =[];
    filteredString = "";
    cryptoConvert(userInput);
    // console.log(arrayOfRows);
    // console.log(arrayOfColumns);
    // console.log(arrayOfMessage);
    console.log(filteredString);
    $("#table-test").empty();
    for(i = 0; i < row; i++) {
      $("#table-test").append("<tr>");
      for (j = 0; j < column; j++) {
        if (arrayOfRows[i][j] !== undefined) {
        $("#table-test").append("<td>" + arrayOfRows[i][j] + "</td>");
        }
      }
      $("#table-test").prepend("</tr>");
    }
    $("#crypto-conversion").text(newString);
  });
});
