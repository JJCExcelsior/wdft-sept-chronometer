const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes() 
  printSeconds()
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = min[0]
  minUni.innerHTML = min[1]
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds()) 
  secDec.innerHTML = sec[0]
  secUni.innerHTML = sec[1]
}

// ==> BONUS
function printMilliseconds() {
  let mil = chronometer.twoDigitsNumber(chronometer.currentMilTime) 
  milDec.innerHTML = mil[0]
  milUni.innerHTML = mil[1]
}

function printSplit() {
  let time = chronometer.splitClick()
  let li = document.createElement('li')
  li.innerText = time
  splits.appendChild(li)        
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.classList.contains('start')) {
      setStopBtn()
      setSplitBtn()
      chronometer.startClick( printTime, printMilliseconds )
    }
    else {
      setStartBtn()
      setResetBtn()
      chronometer.stopClick()

    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
      if (btnRight.classList.contains('split')) {
          printSplit()       
      } 
      else {
        chronometer.resetClick();
        splits.innerHTML = ''
        minDec.innerHTML = 0
        minUni.innerHTML = 0
        secDec.innerHTML = 0
        secUni.innerHTML = 0
        milDec.innerHTML = 0
        milUni.innerHTML = 0
      }
});

