player1 = {
    isTurn: true,
    won: false
}

player2 = {
    isTurn: false,
    won: false
}

let tieGame = false;
$('#player1').attr('class', 'players active');


let box0 = null;
let box1 = null;
let box2 = null;
let box3 = null;
let box4 = null;
let box5 = null;
let box6 = null;
let box7 = null;
let box8 = null;
let box9 = null;

$(".box").click(function (event) {
    if (player1.isTurn && !this.className.includes('box-filled')) {
        $(this).addClass('box-filled-1');
        player1.isTurn = false;
        player2.isTurn = true;
        $('#player1').attr('class', 'players ');
        $('#player2').attr('class', 'players active ');
        box0 = $("#box0").attr('class');
        box1 = $("#box1").attr('class');
        box2 = $("#box2").attr('class');
        box3 = $("#box3").attr('class');
        box4 = $("#box4").attr('class');
        box5 = $("#box5").attr('class');
        box6 = $("#box6").attr('class');
        box7 = $("#box7").attr('class');
        box8 = $("#box8").attr('class');
        box9 = $("#box9").attr('class');
        checkPlayer1Win();
        if (player1.won) {
            gameOver();
        }else if(tieGame === true){
            gameOver();
        }

    } else if (player2.isTurn && !this.className.includes('box-filled')) {
        $(this).addClass('box-filled-2');
        player1.isTurn = true;
        player2.isTurn = false;
        $('#player2').attr('class', 'players ');
        $('#player1').attr('class', 'players active');
        box0 = $("#box0").attr('class');
        box1 = $("#box1").attr('class');
        box2 = $("#box2").attr('class');
        box3 = $("#box3").attr('class');
        box4 = $("#box4").attr('class');
        box5 = $("#box5").attr('class');
        box6 = $("#box6").attr('class');
        box7 = $("#box7").attr('class');
        box8 = $("#box8").attr('class');
        box9 = $("#box9").attr('class');
        checkPlayer2Win();
            if (player2.won) {
                gameOver();
            }else if(tieGame === true){
                gameOver();
            }
    } else if (this.className.includes('box-filled')) {
        alert('That Spot Is Taken!!')
    }
    

    
});



$(".box").hover(
    function () {

        if (player1.isTurn) {
            $(this).addClass('box1');
        } else if (player2.isTurn) {
            $(this).addClass('box2');
        };
    }, function () {
        $(this).removeClass('box1');
        $(this).removeClass('box2');
    }

);


function checkPlayer1Win() {
    if ((box0.includes("box-filled-1") && box1.includes("box-filled-1") && box2.includes("box-filled-1")) ||
        (box0.includes("box-filled-1") && box3.includes("box-filled-1") && box6.includes("box-filled-1")) ||
        (box0.includes("box-filled-1") && box4.includes("box-filled-1") && box8.includes("box-filled-1")) ||
        (box1.includes("box-filled-1") && box4.includes("box-filled-1") && box7.includes("box-filled-1")) ||
        (box2.includes("box-filled-1") && box5.includes("box-filled-1") && box8.includes("box-filled-1")) ||
        (box2.includes("box-filled-1") && box4.includes("box-filled-1") && box6.includes("box-filled-1")) ||
        (box3.includes("box-filled-1") && box4.includes("box-filled-1") && box5.includes("box-filled-1")) ||
        (box6.includes("box-filled-1") && box7.includes("box-filled-1") && box8.includes("box-filled-1")))
        player1.won = true;
}

function checkPlayer2Win() {
    if (
        (box0.includes("box-filled-2") && box1.includes("box-filled-2") && box2.includes("box-filled-2")) ||
        (box0.includes("box-filled-2") && box3.includes("box-filled-2") && box6.includes("box-filled-2")) ||
        (box0.includes("box-filled-2") && box4.includes("box-filled-2") && box8.includes("box-filled-2")) ||
        (box1.includes("box-filled-2") && box4.includes("box-filled-2") && box7.includes("box-filled-2")) ||
        (box2.includes("box-filled-2") && box5.includes("box-filled-2") && box8.includes("box-filled-2")) ||
        (box2.includes("box-filled-2") && box4.includes("box-filled-2") && box6.includes("box-filled-2")) ||
        (box3.includes("box-filled-2") && box4.includes("box-filled-2") && box5.includes("box-filled-2")) ||
        (box6.includes("box-filled-2") && box7.includes("box-filled-2") && box8.includes("box-filled-2"))) {
        player2.won = true;
    }}
    function checkTie() {
        if (
            (box0.includes("box-filled") && box1.includes("box-filled") && box2.includes("box-filled")) &&
            (box0.includes("box-filled") && box3.includes("box-filled") && box6.includes("box-filled")) &&
            (box0.includes("box-filled") && box4.includes("box-filled") && box8.includes("box-filled")) &&
            (box1.includes("box-filled") && box4.includes("box-filled") && box7.includes("box-filled")) &&
            (box2.includes("box-filled") && box5.includes("box-filled") && box5.includes("box-filled")) &&
            (box2.includes("box-filled") && box4.includes("box-filled") && box6.includes("box-filled")) &&
            (box3.includes("box-filled") && box4.includes("box-filled") && box5.includes("box-filled")) &&
            (box6.includes("box-filled") && box7.includes("box-filled") && box8.includes("box-filled"))) {
            tieGame = true;
        };
    }
        

    function gameOver() {
            if
            (player1.won) {
                $("#finish").addClass('screen-win-one');
                MultiScreen.switch_screens({ target_id: 'finish' });
            } else if (player2.won) {
                $("#finish").addClass('screen-win-two');
                MultiScreen.switch_screens({ target_id: 'finish' });
            }else if (tieGame === true) {
                $("#finish").addClass('screen-win-tie');
                 MultiScreen.switch_screens({ target_id: 'finish' });
            }
        }


        function newGame() {
            box0 = null;
            box1 = null;
            box2 = null;
            box3 = null;
            box4 = null;
            box5 = null;
            box6 = null;
            box7 = null;
            box8 = null;
            box9 = null;
            $("#box0").attr('class', 'box');
            $("#box1").attr('class', 'box');
            $("#box2").attr('class', 'box');
            $("#box3").attr('class', 'box');
            $("#box4").attr('class', 'box');
            $("#box5").attr('class', 'box');
            $("#box6").attr('class', 'box');
            $("#box7").attr('class', 'box');
            $("#box8").attr('class', 'box');
            player1.won = false;
            player2.won = false;
            player1.isTurn = true;
            $('#player1').attr('class', 'players active');
            $('#player2').attr('class', 'players');
            $("#finish").removeClass('screen-win-one');
            $("#finish").removeClass('screen-win-two');
            $("#finish").removeClass('screen-win-tie');
            }
