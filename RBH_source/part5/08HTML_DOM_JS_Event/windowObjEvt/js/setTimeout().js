let count = 0;

function start_clock() {
    count+=1;
    console.log(count);
    
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();

    if (minutes < 10)
        minutes = "0" + minutes;

    if (hours < 12)
        minutes = minutes + " AM ";
    else if (hours >= 12)
        minutes = minutes + " PM ";

    if (hours == 0)
        hours = hours + 12;

    else if (hours > 12)
        hours = hours - 12;

    time = hours + ":" + minutes;

    document.time_form.clock.value = time;
    setTimeout(function(){start_clock()}, 1000);
}