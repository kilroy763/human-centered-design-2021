console.log('hi');

audio =  document.getElementById("oneU2")


window.addEventListener("keypress", (event) => { 
    console.log(event)
    if (event.key === "1"){
        console.log("1")
        audio.play();    
        audio.volume = 0.05
    } else{
        audio.pause();    
        
    }
    })


