    const decresebtn = document.getElementById("decrease"); 
    const increasebtn = document.getElementById("increase"); 
    const resetbtn = document.getElementById("reset"); 
    const countlable= document.getElementById("mylabel"); 
    count=0;

    decresebtn.onclick=function(){
        count--;;
        countlable.textContent=count;
    }
    
    increasebtn.onclick=function(){
        count++;
        countlable.textContent=count;
    }
    resetbtn.onclick=function(){
        count=0;
        countlable.textContent=count;
    }