var jugactual = 0;
var pos = [0, 1];

document.querySelector("#current-0").innerHTML = 0;
document.querySelector("#score-0").innerHTML = 0;
document.querySelector("#current-1").innerHTML = 0;
document.querySelector("#score-1").innerHTML = 0;
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".player-"+jugactual+"-panel").classList.remove("winner");



current = parseInt(document.querySelector("#current-"+jugactual).innerHTML);

document.querySelector(".btn-roll").onclick = function(dice){

    var a = Math.floor((Math.random() * 6) + 1);
    img = "dice-"+a+".png"
    document.querySelector(".dice").src = img;
    
    if (a!=1){
        current  = current +a;
        console.log(current);
        document.querySelector("#current-"+jugactual).innerHTML = current ;
    }else{
        
        current  = 0;
        score = 0;
        console.log(current);
        document.querySelector(".player-"+jugactual+"-panel").classList.remove("active");
        document.querySelector("#current-"+jugactual).innerHTML = current ;  
        document.querySelector("#score-"+jugactual).innerHTML = score ;  
        
        jugactual = jugactual+1;
        if(jugactual>1){jugactual = 0}  
        document.querySelector(".player-"+jugactual+"-panel").classList.add("active");
        pos[jugactual];  
        }
    
    
}


    document.querySelector(".btn-hold").onclick = function(hold){
        
        
  //  document.querySelector(".player-"+jugactual+"-panel").classList.add("active");

    // Obtenemos valores de current y score, parseamos y lo asignamos a variables.
    current = parseInt(document.querySelector("#current-"+jugactual).innerHTML);
    score = parseInt(document.querySelector("#score-"+jugactual).innerHTML);
                
    //Sumamos el score al current
    score  = score + current;
    
        
    // Colocamos los nuevos valores en su botón   
    document.querySelector("#score-"+jugactual).innerHTML = parseInt(score) ;  
    document.querySelector("#current-"+jugactual).innerHTML = 0;
        
    document.querySelector(".player-"+jugactual+"-panel").classList.remove("active");
        
        if(score>30){
            document.querySelector(".player-"+jugactual+"-panel").classList.add("winner");
        }
        
    // Reiniciamos
    current = 0;
    jugactual = jugactual+1;
        
    if (jugactual > 1){jugactual = 0}   
    pos[jugactual] = score;
        
        
    document.querySelector(".player-"+jugactual+"-panel").classList.add("active");


        
}
    

    
document.querySelector(".btn-new").onclick = function(newgame){
document.querySelector(".player-"+jugactual+"-panel").classList.remove("winner");
document.querySelector("#current-0").innerHTML = 0;
document.querySelector("#score-0").innerHTML = 0;
document.querySelector("#current-1").innerHTML = 0;
document.querySelector("#score-1").innerHTML = 0;
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
       }