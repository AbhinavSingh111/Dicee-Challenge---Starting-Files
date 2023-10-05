const p1 = Math.floor(Math.random()*6 + 1)
const p2 = Math.floor(Math.random()*6 + 1)

let players = document.querySelectorAll(".dice");
const s1 = "./images/dice"+p1+".png";
players[0].lastElementChild.setAttribute("src",s1);
const s2 = "./images/dice"+p2+".png";
players[1].lastElementChild.setAttribute("src",s2);

if(p1 > p2){
    document.getElementsByTagName("h1")[0].textContent="Player 1 wins !";
}
else if(p2 > p1)
{
    document.getElementsByTagName("h1")[0].textContent="Player 2 wins !";
}
else{
    document.getElementsByTagName("h1")[0].textContent="Its a draw !";
}
