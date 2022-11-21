const decreaseBtn = document.getElementById('decrease')
const resetBtn = document.getElementById('reset')
const increaseBtn = document.getElementById('increase')
const step = document.getElementById('step')
const num = document.querySelector('.num')


decreaseBtn.addEventListener('click',()=>{
    num.value = num.value - step.value;
    num.innerText = num.value
})

increaseBtn.addEventListener('click',()=>{
    num.value = Number(num.value) + Number(step.value);
    num.innerText = num.value
})

resetBtn.addEventListener('click',()=>{
    num.value = 0;
    num.innerText = num.value;
})