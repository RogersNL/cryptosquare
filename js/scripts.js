$(document).ready(function(){
  var newString = "";
  function cryptoConvert(string) {
    //FUNCTION THAT DETERMINES LENGTH OF STRING
    var lengthString = string.split(" ").join("").length;

    //FUNCTION THAT SPLITS THE STRING INTO CHARACTERS IN AN ARRAY WITHOUT SPACES
    var arrayOfCharacters = string.split(" ").join("").split("");

    //FUNCTION THAT DETERMINES SIZE OF GRID
    var root = parseInt(Math.sqrt(lengthString));
    var row = root;
    var column = root;

    if (row*column < lengthString) {
    	row = row + 1;
    }
    if (row*column < lengthString) {
    	column = column + 1;
    }
    console.log(row);
    console.log(column);
    //FUNCTION THAT SEPARATES THE ARRAY OF CHARACTERS INTO ROWS IN ANOTHER ARRAY
    var arrayOfRows = [];
    for (i = 0; i < row; i++) {
       arrayOfRows.push(arrayOfCharacters.slice(i * row, (i+1)*row));
     }

    //FUNCTION THAT SEPARATES THE COLUMNS INTO AN ARRAY
    var arrayOfColumns = [];
   	for (b = 0; b < column; b ++) {
   		for (a = 0; a < row; a ++) {
       	arrayOfColumns.push(arrayOfRows[a][b]);
   		}
    }
    //FUNCTION THAT SPLITS THE NEW MESSAGE INTO 5 LETTER STRINGS SEPARATED BY A SPACE
    var arrayOfMessage = [];
    for (i = 0; i < arrayOfColumns.length / 5; i++) {
      arrayOfMessage.push(arrayOfColumns.slice(i * 5, (i+1)*5).join(""));
      arrayOfMessage.push(" ");
      }
    newString = arrayOfMessage.join(" ");
  }
  $("#form-cryptosquare").submit(function(event){
    event.preventDefault();
    var userInput = $("input#sentence").val();
    cryptoConvert(userInput);
    $("#crypto-conversion").text(newString);
  });
});
