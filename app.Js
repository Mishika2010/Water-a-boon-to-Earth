// Setting time interval
setInterval(checkBackground,200);

function checkBackground(){
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

//Generating random color

function generateRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// Changing background color

function changeBackgroundColor(){
    let colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
}
// Changing background text

function changeBackgroundText(){
    let textbg = document.getElementById("text-bg");
    if(textbg.innerHTML=='Water is a precious resource')
    textbg.innerHTML='Conserve water, conserve life.';
    if(textbg.innerHTML=='Conserve water, conserve life.')
    textbg.innerHTML='Save water, and it will save you.';
    else if(textbg.innerHTML=='Save water, and it will save you.')
    textbg.innerHTML='It takes a lot of blue to stay green';
    else if(textbg.innerHTML=='It takes a lot of blue to stay green')
    textbg.innerHTML='Conserve water, conserve life.';
    }