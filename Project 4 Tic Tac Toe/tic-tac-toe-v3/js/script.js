player1 = {
    isTurn: true,
    won: false
}

player2 = {
    isTurn: false,
    won: false
}
$('#player1').attr('class', 'players active');

let hoverBoxClass = null;
let clickedBoxId = null;
let hoverBoxId = ".box";





$(".box").click(function (event) {
    clickedBoxId = "#" + event.target.id;
    if (player1.isTurn) {
       
            $(clickedBoxId).attr('class', 'box box-filled-1');
            $(clickedBoxId).attr('id', clickedBoxId + 'filled');
            player1.isTurn = false;
           player2.isTurn = true;
            $('#player1').attr('class', 'players ');
            $('#player2').attr('class', 'players active ');

        
    } else if(player2.isTurn) {
        $(clickedBoxId).attr('class', 'box box-filled-2');
        $(clickedBoxId).attr('id', clickedBoxId + 'filled');
        player1.isTurn = true;
        player2.isTurn = false;
        $('#player2').attr('class', 'players ');
        $('#player1').attr('class', 'players active');

    }
});




    $(".box").hover(event => {
        hoverBoxId =  event.target.id;
        hoverBoxClass = event.target.class;   
        {
            if (player1.isTurn) { 
                if (hoverBoxId === "box0"||
                hoverBoxId === "box1"||
                hoverBoxId === "box2"||
                hoverBoxId === "box3"||
                hoverBoxId === "box4"||
                hoverBoxId === "box5"||
                hoverBoxId === "box6"||
                hoverBoxId === "box7"||
                hoverBoxId === "box8")
                $('#'+ hoverBoxId).attr('class', 'box box1');
            }else if(player2.isTurn){
                if (hoverBoxId === "box0"||
                hoverBoxId === "box1"||
                hoverBoxId === "box2"||
                hoverBoxId === "box3"||
                hoverBoxId === "box4"||
                hoverBoxId === "box5"||
                hoverBoxId === "box6"||
                hoverBoxId === "box7"||
                hoverBoxId === "box8")
                $('#'+ hoverBoxId).attr('class', 'box box2');

            }
        };  
    });
