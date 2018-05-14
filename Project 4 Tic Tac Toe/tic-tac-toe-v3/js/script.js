player1= {
isTurn : true,
won : false
}

player2= { 
isTurn : false,
won : false
}

let boxes = [
 "box0",
 "box1", 
 "box2", 
 "box3", 
 "box4", 
 "box5", 
 'box6', 
 "box7", 
 "box8"]

turnSelector = function(){
if (player1.isTurn) {
 

}else{
   
}}

let clickedBox= $(".box").click(function (event) {
            let clickedBoxId = "#"+event.target.id;
            if (player1.isTurn) {
                $(clickedBoxId).attr('class', 'box box-filled-1')
                player1.isTurn = false;
                $('#player1').attr('class', 'players active');
                $('#player2').attr('class', 'players ');
            } else {
                $(clickedBoxId).attr('class', 'box box-filled-2')
                player1.isTurn = true;
                $('#player2').attr('class', 'players active');
                $('#player1').attr('class', 'players ');

            }
             });

        
 

            // if(player1.isTurn){
            //     $("#"+clickedBox.toString()).attr('class', 'box box-filled-1')
            //     }else {
            //         $("#"+clickedBox).attr('class', 'box box-filled-2')
            //     }; 