const btnOn  = document.querySelector('#btnOn');
const btnOff = document.querySelector('#btnOff');
const fan    = document.querySelector('#fan');
let   fanOn;
let   rotate = 0;

const turnFanOn = () => {
    rotate += 75;
    fan.style.transform = `rotate(${(rotate%360)}deg)`;
    console.log(fan.style.tranform);
};

btnOn.addEventListener('click', () => {
    fanOn = setInterval(() => {turnFanOn()}, 1000)
    btnOff.disabled = false;
    btnOn.disabled = true;
});

btnOff.addEventListener('click', () => {
    clearInterval(fanOn);
    btnOn.disabled = false;
    btnOff.disabled = true;
});
