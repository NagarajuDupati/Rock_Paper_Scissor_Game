let userscore=0;
let computerscore=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getcomputerchoice(){
     const choice=["r","p","s"];
     return choice[(Math.floor(Math.random()*3))]
}

function word(letter){
     if (letter==="r") return "ROCK";
     if (letter==="p") return "PAPER";
     return "SCISSOR";
}

function win(userchoice,computerchoice){
     userscore++;

     userscore_span.innerHTML=userscore;
     compscore_span.innerHTML=computerscore;

     const userword=word(userchoice).fontsize(4).sup()
     const compword=word(computerchoice).fontsize(4).sup()

     result_p.innerHTML=`  ${userword} USER  beats ${word(computerchoice) } COMPUTER. you win!...... "`;


}

function loose(userchoice,computerchoice){
     computerscore++;
     userscore_span.innerHTML=userscore;
     compscore_span.innerHTML=computerscore;

     const userword=word(userchoice).fontsize(4).sup()
     const compword=word(computerchoice).fontsize(4).sup()
    
     result_p.innerHTML=`${compword} COMPUTER   beats  ${userword} USER . you loose.!!!"`;

}
function draw(userchoice,computerchoice){
     const userword="USER".fontsize(3).sup()
     const compword="COMP".fontsize(3).sup()

     result_p.innerHTML=`${word(userchoice)}  ${userword} draws ${word(computerchoice)} ${compword}. ~~try again~~`;
}


function game(userchoice){
     const computerchoice=getcomputerchoice();
     switch(userchoice+computerchoice){
          case "rs":
          case "sp":
          case "pr":
               win(userchoice,computerchoice);
               break;
          case "rp":
          case "ps":
          case "sr":
               loose(userchoice,computerchoice);
               break;
          case "rr":
          case "pp":
          case "ss":
               draw(userchoice,computerchoice);
               break;
     }

}


function main(){
     rock_div.addEventListener("click",function(){
          game("r");
     })
     paper_div.addEventListener("click",function(){
          game("p");
     })

     scissor_div.addEventListener("click",function(){
          game("s");
     })
}

main();