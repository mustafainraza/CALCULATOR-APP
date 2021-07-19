let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let scval='';

for(item of buttons)
{
    item.addEventListener("click",(e)=>{
    buttonText = e.target.innerText;
    console.log("button text = ");
    if(buttonText=='X')
    {
        buttonText='*';
        scval+=buttonText;
        screen.value = scval;
    }
    else if(buttonText =='AC')
    {
        scval = '';
        screen.value = scval;
    }
    else if(buttonText =='=')
    {
        screen.value = eval(scval);
        scval=screen.value;
    }
    
    else
    {
        scval+=buttonText;
        screen.value = scval;
    }
})
}