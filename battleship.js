var view = {
   displayMessage:function(msg) {
var messageArea = document.getElementById("messageArea");
messageArea.innerHTML = msg;
   },
   displayHit: function(location){
      var cell = document.getElementById(location);
      cell.setAttribute("class","hit");
   },
   displayMiss:function(location){
      var cell = document.getElementById(location);
      cell.setAttribute("class","miss");
   },

};

var model = {
   boardSize: 7,
   numShips: 3,
   shipsSunk: 0,
   shipsLength: 3,
   ships: [ {locations:["06","16","26"],hits: ["","",""]},
                   {locations:["24","34","44"],hits: ["","",""]},
                   {locations:["10","11","12"],hits: ["","",""]} ],
   fire: function(guess){
      for (var i = 0; i < this.numShips; i++) {
         var ship = this.ships[i];
         location = ship.location;
      }
   }               
};