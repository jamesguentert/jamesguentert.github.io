let chromatic = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25];
let Note = chromatic[0];
let temp = 12;
let tuning = 2;
let num;
let intonation = [1,16/15,9/8,6/5,5/4,4/3,45/32,3/2,8/5,5/3,9/5,15/8,2];
let semitone = [1,(9/8)**0.5,9/8,(9/8)**1.5,(9/8)**2,(9/8)**2.5,(9/8)**3,(9/8)**3.5,(9/8)**4,(9/8)**4.5,(9/8)**5,(9/8)**5.5,(9/8)**6,2];
let ratio = intonation;
let octave = 1;
let notedisp = '';
let notes = ['1', '#1', '2', '#2', '3', '4', '#4', '5', '#5', '6', '#6', '7', '1'];
let keyorig = 0;
let freq2 = Note;
let freq1 = Note;
let keycodes = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75];
let timbre = 'sine';
function setup() {
  createCanvas(400, 400);
  getAudioContext().suspend();
}
osc1 = new p5.Oscillator();
osc1.setType(timbre);
osc1.freq(freq1);
osc1.amp(0);
osc1.start();
osc2 = new p5.Oscillator();
osc2.setType(timbre);
osc2.freq(freq2);
osc2.amp(0);
osc2.start();
let key = keyorig;

function draw() {
  background(0);
  if (tuning==1) play1();
  else if(tuning==2){
    play1();
    play2();
  }
  else play2()
  if (tuning<3){
    fill(102, 119, 187)
    text("Osc1 = "+(int(freq1*100))/100 + "Hz", 40, 100);
}
  else {
    fill(255,100,100)
    text("Osc1 = OFF", 40, 100)
}
if (tuning>1){
  fill(72, 89, 227)
  text("Osc2 = "+(int(freq2*100))/100 + "Hz", 40, 300);
}
else {
  fill(255,80,80)
  text("Osc2 = OFF", 40, 300)
}
    textSize(40);
    osc1.freq(freq1);
    osc2.freq(freq2);
}

function play1() {
  if (keyIsDown(keycodes[0])) {
    freq1 = ((2 ** (1 / temp)) ** 0) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[1])) {
    freq1 = ((2 ** (1 / temp)) ** 1) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[2])) {
    freq1 = ((2 ** (1 / temp)) ** 2) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[3])) {
    freq1 = ((2 ** (1 / temp)) ** 3) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[4])) {
    freq1 = ((2 ** (1 / temp)) ** 4) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[5])) {
    freq1 = ((2 ** (1 / temp)) ** 5) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[6])) {
    freq1 = ((2 ** (1 / temp)) ** 6) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[7])) {
    freq1 = ((2 ** (1 / temp)) ** 7) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[8])) {
    freq1 = ((2 ** (1 / temp)) ** 8) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[9])) {
    freq1 = ((2 ** (1 / temp)) ** 9) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[10])) {
    freq1 = ((2 ** (1 / temp)) ** 10) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[11])) {
    freq1 = ((2 ** (1 / temp)) ** 11) * Note / octave
    osc1.amp(1)
  } else if (keyIsDown(keycodes[12])) {
    freq1 = ((2 ** (1 / temp)) ** 12) * Note / octave
    osc1.amp(1)
  } else {
    osc1.amp(0)
  }
  }

function play2() {
    if (keyIsDown(keycodes[0])) {
      freq2 = (ratio[0]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[1])) {
      freq2 = (ratio[1]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[2])) {
      freq2 = (ratio[2]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[3])) {
      freq2 = (ratio[3]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[4])) {
      freq2 = (ratio[4]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[5])) {
      freq2 = (ratio[5]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[6])) {
      freq2 = (ratio[6]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[7])) {
      freq2 = (ratio[7]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[8])) {
      freq2 = (ratio[8]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[9])) {
      freq2 = (ratio[9]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[10])) {
      freq2 = (ratio[10]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[11])) {
      freq2 = (ratio[11]) * Note / octave
      osc2.amp(1)
    } else if (keyIsDown(keycodes[12])) {
      freq2 = (ratio[12]) * Note / octave
      osc2.amp(1)
    } else {
      osc2.amp(0)
    }
    }

    document.addEventListener('keyup',function(e){
      userStartAudio();
    });
    let tuningEle = document.getElementById('tuning');
    let ratioEle = document.getElementById('ratio');
    let tempramentEle = document.getElementById('temprament');
    let timbreEle = document.getElementById('timbre');
    let noteOffsEle = document.getElementById('noteOffs');
    let octaveEle = document.getElementById('octave');

    tuningEle.addEventListener('change',function(event){
      tuning = event.target.selectedIndex + 1;
      switch(tuning){
        case 1:
          ratioEle.disabled = true;
          tempramentEle.disabled = false;
          break;
        case 2:
          ratioEle.disabled = false;
          tempramentEle.disabled = false;
            break;
        case 3:
          ratioEle.disabled = false;
          tempramentEle.disabled = true;
          break;
      }
    });
    tempramentEle.addEventListener('change',function(event){
    temp = tempramentEle.value;
    });

    ratioEle.addEventListener('change',function(event){j
      if (ratioEle.value=='semitone') ratio = semitone;
      if (ratioEle.value=='intonation') ratio = intonation;

    });
    timbreEle.addEventListener('change',function(event){
    osc1.setType(timbreEle.value);
    osc2.setType(timbreEle.value);
    });

    noteOffsEle.addEventListener('change',function(event){
      Note=chromatic[noteOffsEle.value]
    });

    octaveEle.addEventListener('change',function(event){
    octave = octaveEle.value;
    console.log(octaveEle.value)
    console.log(octave.value)
    });
