// Function to generate random colors

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let colorValue = "#";
    for(let i = 0; i<6; i++){
      colorValue += hex[Math.floor(Math.random()*16)]  
    }
    return colorValue
}
let intervalId;
const startChange = function(){
    if(!intervalId){
         intervalId = setInterval(colorChange,500)
    }
    function colorChange(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChange = function(){
    clearInterval(intervalId)
    intervalId = null;

}

document.querySelector('#start').addEventListener('click',startChange);

document.querySelector('#stop').addEventListener('click',stopChange);


