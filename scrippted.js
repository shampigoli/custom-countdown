const inputContainer=document.getElementById('input-container')
const countDownForm=document.getElementById('countdownForm');
const dtaeEl=document.getElementById('date-picker')
const countDownEl=document.getElementById('countdown')
const countDownElTitle=document.getElementById('countdown-title')
const countDownBtn=document.getElementById('countdown-button')
const timeElements=document.querySelectorAll('span');
const completeEl=document.getElementById('complete')
const completeInfo=document.getElementById('complete-info')
const completeBtn=document.getElementById('complete-button')


let countDownTitle='';
let countDownDate='';
let countDownValue=Date;
let countDownActive;

const second= 1000;
const minute = second * 60;
const hour =minute *  60;
const day=hour  * 24;

// date input with min and max Today'a date
const today=new Date().toISOString().split('T')[0];
dtaeEl.setAttribute('min', today)

function updateDom(){
    countDownActive =setInterval( ()=>{
        const now= new Date().getTime();
        console.log(now)
        const distance= countDownValue - now;
        console.log( distance)
    
        const days=Math.floor(distance / day);
        const hours=Math.floor((distance % day) / hour)
        const minutes=Math.floor((distance % hour) / minute)
        const seconds=Math.floor((distance % minute) / second)

        inputContainer.hidden=true;
    if(distance < 0){
        countDownEl.hidden=true;
        clearInterval(countDownActive);
       completeInfo.textContent=`${countDownTitle} finished on ${countDownDate}`
       completeEl.hidden=false;
    }
    else{
        countDownElTitle.textContent=`${countDownTitle}`
        timeElements[0].textContent=`${days}`
        timeElements[1].textContent=`${hours}`
        timeElements[2].textContent=`${minutes}`;
        timeElements[3].textContent=`${seconds}`
    completeEl.hidden=true;
    countDownEl.hidden=false    
    }
    },second ) 
}
function updateCountDown(e){
    e.preventDefault();
    countDownTitle=e.srcElement[0].value;
    countDownDate=e.srcElement[1].value;
if(countDownDate === ''){
    alert("Please enter a valid date")
}else{
    countDownValue=new Date(countDownDate).getTime();
    updateDom();
    
}
}

function reset(){
    countDownEl.hidden=true;
    completeEl.hidden=true;
    inputContainer.hidden=false;
    clearInterval(countDownActive);

}
countDownForm.addEventListener('submit', updateCountDown)
countDownBtn.addEventListener('click', reset)
completeEl.addEventListener('click',reset)