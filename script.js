const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


// set date input min with todays date

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

//populate countdown / complete UI
function updateDOM(){
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance', distance);
}

//take values from form input
function updateCountdown(e){
    
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle,countdownDate);
    //Get number version of current date updateDom
    countdownDate = new Date(countdownDate).getTime();
    console.log('countdown value:', countdownValue);
    updateDOM();
    e.preventDefault();
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
