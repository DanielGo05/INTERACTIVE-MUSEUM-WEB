let museum = new Museum();
museum.initializeTeams();

const soccerTeams = museum.getTeams();
let counterButton = 0;
let movementCounter = 0;

let mainLocation = window.pageYOffset; //0

window.addEventListener("scroll", function(){
    let currentOffset = window.pageYOffset; //180
    if(mainLocation >= currentOffset){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-120px"
    }
    mainLocation = currentOffset; //200
})

function changeTheInformationBySelection(){
    const option = document.getElementById("selection").value;
    if (option === "Options"){
        document.getElementById("textsInfoM").innerHTML = " ";
    }
    if (option === "History"){
        const infocomplete = soccerTeams[0].getHistory();
        document.getElementById("textsInfoM").innerHTML = infocomplete;
    }
    if (option === "Trophy"){
        const infocomplete = soccerTeams[0].getTrophy();
        document.getElementById("textsInfoM").innerHTML = infocomplete;
    }
};

function showInfoByClickButton(){
    counterButton++;
    if (counterButton === 1){
        const infohistory = soccerTeams[1].getHistory();
        document.getElementById("textInfoN").innerHTML = "Historia: " + infohistory;
    }
    if (counterButton === 2){
        const infotrophy = soccerTeams[1].getTrophy();
        document.getElementById("textInfoN").innerHTML = "Trofeos: " + infotrophy;
    }
    if(counterButton === 3){
        document.getElementById("textInfoN").innerHTML = " ";
        counterButton = 0
    }
};

function dragStart(event) {
    event.dataTransfer.setData("img", event.target.id);
    if (movementCounter === 0){
        document.getElementById("TextInfoTrophyA").innerHTML = " ";
    }
    if (movementCounter === 1){
        document.getElementById("TextInfoHistoryA").innerHTML = " ";
        movementCounter = 2;
    }
}
  
function allowDrop(event) {
    event.preventDefault(); 
}
  
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("img");
    event.target.appendChild(document.getElementById(data));  
    movementCounter++;
    if (movementCounter === 1){
        document.getElementById("TextInfoTrophyA").innerHTML = " ";
        const infohistory2 = soccerTeams[2].getHistory();
        document.getElementById("TextInfoHistoryA").innerHTML = infohistory2;
    }
    if (movementCounter === 3){
        const infotrophy2 = soccerTeams[2].getTrophy();
        document.getElementById("TextInfoTrophyA").innerHTML = infotrophy2;
        movementCounter = 0;
    } 
}

function ClickMouseButton(event) {
    const buttonType = event.button
    if (buttonType === 0){
        alert( "Historia: " + soccerTeams[3].getHistory() )
    }
    if (buttonType === 2){
        alert( "Trofeos: " + soccerTeams[3].getTrophy() )
    }
}

const infohistory4 = soccerTeams[4].getHistory();
document.getElementById("historyText").innerHTML = infohistory4;    
function changeColorHistory(x) {
    x.style.color = "white";
}

function normalColorHistory(x) {
    x.style.color = "red";
}

const infotrophy4 = soccerTeams[4].getTrophy();
document.getElementById("trophyText").innerHTML = infotrophy4;
function changeColorTrophy(x) {
    x.style.color = "white";
}

function normalColorTrophy(x) {
    x.style.color = "red";
}