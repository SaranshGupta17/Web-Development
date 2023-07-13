var score = 0
var time = 60

function Play(){
    
    createBubble()
    hitTarget()   
    timerCount()
    handleclick()

}

function hitTarget(){
    hit = Math.floor(Math.random()*10+1)
    document.querySelector("#hit").textContent = hit
}

function createBubble(){
    document.querySelector("#bottom").innerHTML = ""
    for(var i = 1;i<161;i++){
        var rn = Math.floor(Math.random()*10+1)
        document.querySelector("#bottom").innerHTML += `<div class = "bubble">${rn}</div>`
    }
}

function timerCount(){

    document.querySelector("#timer").textContent = time
    
    setInterval(function(){
        if(time>0){
            time--
            document.querySelector("#timer").textContent = time
        }
        else{
            document.querySelector("#bottom").innerHTML = `<h1>Game Over!</h1><br>`
            document.querySelector("#bottom").innerHTML += `<h2>Your score${score}</h2>`
        }
    },1000)
    
}

function increaseScore(){
    score += 10
    document.querySelector("#score").textContent = score
}

function handleclick(){
    document.querySelector("#bottom").addEventListener("click",function(dets){
        if(Number(dets.target.textContent) === hit){
            increaseScore()
            createBubble()
            hitTarget()
        }
    })
}



document.querySelector("#replaybutton").addEventListener("click",function(){
    location.reload()
})        

Play()

