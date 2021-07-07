const clock = document.querySelector('.clock');
const timeFormat = document.querySelectorAll('.btn-time-format');
const displayFormat = document.querySelector('.timeformat-display');
const greet = document.querySelector('.greetings')

var person = prompt("Please enter your name", "");

setInterval(generateTime, 1000);

function generateTime(){
    format = clock.getAttribute('time-format');
    var date = new Date;
    var hour = date.getHours();
    var mins = date.getMinutes();
    var  sec = date.getSeconds();
    var ampm = (hour >= 12) ? "PM" : "AM";

    if (hour < 12) {
        document.body.style.background = "url('images/sample_morning.jpg') no-repeat center center";
        greet.innerHTML = `<p>Good Morning! `+ person +`</p>`
    
    } else if (hour < 18) {
        document.body.style.background = "url('images/sample_noon.jpg') no-repeat center center";
        greet.innerHTML = `<p>Good Afternoon! `+ person +`<br>The time is:</p>`
    
    } else {
        document.body.style.background = "url('images/sample_evening.jpg') no-repeat center center";
        greet.innerHTML = `<p>Good Evening! `+ person +`<br> The time is:</p>`
    }

    //for displaying selected time format
    if (format === '12'){
        hour = (hour > 12) ? hour % 12: hour;
        displayFormat.innerHTML = `<p>Note: This is 12 hour Time Format</p>`
    }else{
        displayFormat.innerHTML = `<p>Note: This is 24 hour Time Format</p>`
    }
    


    //Display Format
    hour = (hour < 10) ? "0" + hour : hour;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;

    //Changing the html values
    clock.innerHTML = `<h1>${hour}:${mins}:${sec} ${ampm}</h1>`
}

//Change Clock Text color via button
document.getElementById("default").onclick = function () {
    document.getElementById("clock").style.color = 'white';
}
document.getElementById("cyan").onclick = function () {
    document.getElementById("clock").style.color = '#00FFFF';
}
document.getElementById("lightcoral").onclick = function () {
    document.getElementById("clock").style.color = '#F08080';
}
document.getElementById("orchid").onclick = function () {
    document.getElementById("clock").style.color = '#DA70D6';
}

// condition for time format buttons
timeFormat.forEach(button=>{
    button.addEventListener('click', ()=>{
        format = button.getAttribute('time-format');
        clock.setAttribute('time-format', format);
    })
})