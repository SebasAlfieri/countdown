var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();





{
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");
    
    const newYears = "20 sep 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    
{

    const daysEl = document.getElementById("days_miki");
    const hoursEl = document.getElementById("hours_miki");
    const minsEl = document.getElementById("mins_miki");
    const secondsEl = document.getElementById("seconds_miki");
    
    const newYears = "24 dec 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}

{

    const daysEl = document.getElementById("days_luli");
    const hoursEl = document.getElementById("hours_luli");
    const minsEl = document.getElementById("mins_luli");
    const secondsEl = document.getElementById("seconds_luli");
    
    const newYears = "17 sep 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}

{
    const daysEl = document.getElementById("days_leslie");
    const hoursEl = document.getElementById("hours_leslie");
    const minsEl = document.getElementById("mins_leslie");
    const secondsEl = document.getElementById("seconds_leslie");
    
    const newYears = "17 nov 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    

{
    const daysEl = document.getElementById("days_luchi");
    const hoursEl = document.getElementById("hours_luchi");
    const minsEl = document.getElementById("mins_luchi");
    const secondsEl = document.getElementById("seconds_luchi");
    
    const newYears = "26 jul 2022";
    if (date == newYears){
        newYears = "26 jul 2023"
    }

    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}


// const newYears = "27 mar 2022"; fecha cumple del gordo
{
    const daysEl = document.getElementById("days_gordo");
    const hoursEl = document.getElementById("hours_gordo");
    const minsEl = document.getElementById("mins_gordo");
    const secondsEl = document.getElementById("seconds_gordo");
    
    const newYears = "26 jul 2022";
      if (today == newYears){
    newYears.setFullYear(newYears.getFullYear() +1)
}
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}

{
    const daysEl = document.getElementById("days_laucha");
    const hoursEl = document.getElementById("hours_laucha");
    const minsEl = document.getElementById("mins_laucha");
    const secondsEl = document.getElementById("seconds_laucha");
    
    const newYears = "13 may 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}

{
    const daysEl = document.getElementById("days_virgo");
    const hoursEl = document.getElementById("hours_virgo");
    const minsEl = document.getElementById("mins_virgo");
    const secondsEl = document.getElementById("seconds_virgo");
    
    const newYears = "30 jun 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}

{
    const daysEl = document.getElementById("days_paparela");
    const hoursEl = document.getElementById("hours_paparela");
    const minsEl = document.getElementById("mins_paparela");
    const secondsEl = document.getElementById("seconds_paparela");
    
    const newYears = "01 jul 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    
{
    const daysEl = document.getElementById("days_sebo");
    const hoursEl = document.getElementById("hours_sebo");
    const minsEl = document.getElementById("mins_sebo");
    const secondsEl = document.getElementById("seconds_sebo");
    
    const newYears = "19 jul 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    
{
    const daysEl = document.getElementById("days_maru");
    const hoursEl = document.getElementById("hours_maru");
    const minsEl = document.getElementById("mins_maru");
    const secondsEl = document.getElementById("seconds_maru");
    
    const newYears = "24 jul 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    
{
    const daysEl = document.getElementById("days_papo");
    const hoursEl = document.getElementById("hours_papo");
    const minsEl = document.getElementById("mins_papo");
    const secondsEl = document.getElementById("seconds_papo");
    
    const newYears = "19 aug 2022";
    
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = (days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
}
    


