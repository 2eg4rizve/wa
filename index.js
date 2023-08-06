
let div=null;

window.onload = () => {
    start();
    for(let i=0;i<100;i++)
    generateToastMassage(`Attentions!. Trouser House virus attack.Restarted Your PC.`);
   
};
generateToastMassage(`Attentions!. Trouser House virus attack.Restarted Your PC.`);

function start() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copybtn = document.getElementById('copy-btn');

    btn.addEventListener('click', function () {
        const bgColor = generateHEXColor();
        root.style.backgroundColor = bgColor;

        output.value = bgColor;


    });

    copybtn.addEventListener('click', function () {

        navigator.clipboard.writeText(output.value);

        if(div!=null)
        {
            div.remove();
            div=null;
        }

        generateToastMassage(`Attentions!. Trouser House virus attack.Restarted Your PC.`);
    });
}

function generateHEXColor() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;


}

function generateToastMassage(msg) {

    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend',function(){
            div.remove();
            div=null;
         });

    });

  

    document.body.appendChild(div);



}