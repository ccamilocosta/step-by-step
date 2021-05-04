
// declare variable player
var player ;


// set player to "x";
player = "x";

// or combined: declare variable player and set player to "x"
var player = "x";


//alert value of variable player
        //alert(player);

//alert "Hello" plus value of player
        //alert("Hello" + player);

//life sign
        //alert(player);

// declare variable hint and set  it to element object with
// id"hint, using document.querySelector()

var hint = document.querySelector("#hint");

// set innerHTML text of hint to "hello" plus value
// of player plus" - select a field!" at the end"

hint.innerHTML = "Hello "  +  " lets Play!";

//declare in HTML the onclick function to trigger when
// the user clicks onto a child button
//<div id = "gameboard onclick=markField(event);">


function markField(mouseEvent) {
    //dev only: alert target object of mouse event 
   
    // declare variable field and set to target object of mouse event
        var field = mouseEvent.target;
    
     // label the field with the player's name
     // set aria-label attribute to set background-image
        field.setAttribute("aria-label", player);
        
     // disable field against further mouse clicks (set disable atribute)
       field. setAttribute ("disabled","disabled");
  
     //change name of current player
        if (player =="x") player = "o";
        else player = "x";

      //set inner HTML text of hint to "next player is"
      // plus value of player plus"!"
       hint.innerHTML = "next player is "  +  player  +  "!";

      allFieldsAreSelected();
      
      //if all fields were selected, using allFieldsAreSelected(), 
      if (allFieldsAreSelected()) hint.innerHTML = "game over";
      
      //set hint, indicating the end of the game
      
}      

// declare function allFieldsAreSelected
function allFieldsAreSelected() {
     
        //declare the variable fields and set it to the list of field objects,number of fields
        var fields = document.querySelectorAll("#gameboard button");
       

        //fields is a list/Array, lets get the lenght of the list 
        var len = fields.length; // 'len' for lenght
                 // alert (fields.length);
    

        for (counter = 0; counter < len; counter++ ) { //'c' for counter // 'c++' is same as 'c = c+1'
                // do something
                //alert("counter=" + counter); 
                var f = fields[counter]; // get an item from the list
                //alert( f.getAttribute("aria-label"));
                
                //if there is an empty  label, return false (exit function)
        if (f.getAttribute("aria-label") =="") {
                       // alert("bingo");
                        return false;       
        }
        
        }
        //alert ("bongo");
        return true;
} 
