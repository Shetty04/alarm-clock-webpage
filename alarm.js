console.log("this is alarm project");

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm)
var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log("Setting alarm for ${alarmDate}");
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            ringBell();
        },timeToAlarm);
    }

}