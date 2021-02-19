//create a future date when countdown complete var new Date and .getTime
let countdownEnd = new Date("Feb 19, 2021 12:30:00").getTime();
//create var with setInterval function and update time specified
let update = setInterval(function() {
//create var with the current date and time
    let now = new Date().getTime();
//create a var which holds distance from future date to current date
    let timeGap = countdownEnd - now;
//create vars with the calculations
    

//calculate years
    let years = Math.floor(timeGap / (1000 * 60 * 60 * 24 * 30.5 * 12));
//calculate months
    let months = Math.floor(timeGap / (1000 * 60 * 60 * 24 * 30.5));
//calculate days
    let days = Math.floor(timeGap / (1000 * 60 * 60 * 24));


//calculate hours
    let hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//calculate minutes
    let minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
//calculate seconds
    let seconds = Math.floor((timeGap % (1000 * 60)) / 1000);
//output result document.getElementById('...').innerHTML = how I want countdown viewed
    document.getElementById('timer').innerHTML = years + 'y ' + months + 'm ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
//set up If statement for when countdown timer ends at 0 --- clearInterval also
    if (timeGap < 0) {
//output result document.getElementById('...').innerHTML = some action when timer 0
        clearInterval(update);
        document.getElementById('timer').innerHTML = 'Countdown Complete';
    }
}, 1000);