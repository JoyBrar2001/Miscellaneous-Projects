const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const reset = document.querySelector('.reset');
const num = document.querySelector('#num');

num.innerHTML = 0;

btnLeft.addEventListener('click', ()=> {
    num.innerHTML++;
});
btnRight.addEventListener('click', ()=> {
    num.innerHTML--;
});
reset.addEventListener('click', ()=> {
    num.innerHTML = 0;
});