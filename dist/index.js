const num = document.querySelector('.number');

let button1 = document.querySelector('.button1')

let button2 = document.querySelector('.button2')

function reset(){
    
    num.innerText = 0;
}

button1.addEventListener('click',function(){
    
    let numb = parseInt(num.innerText);
    numb -=1;
    num.innerText = numb;

});
button2.addEventListener('click',function(){
    
    let numb = parseInt(num.innerText);
    numb +=1;
    num.innerText = numb;
});

