const newYear = `${new Date().getFullYear() + 1}-01-01T00:00:00`;

const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");


function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

   let years = newYearDate.getFullYear() - currentDate.getFullYear();
   let months = newYearDate.getMonth() - currentDate.getMonth();
   let days = newYearDate.getDate() - currentDate.getDate();
   let hours = newYearDate.getHours() - currentDate.getHours();
   let minutes = newYearDate.getMinutes() - currentDate.getMinutes();
   let seconds = newYearDate.getSeconds() - currentDate.getSeconds();

   if(seconds < 0 ){
    seconds = seconds + 60;
    minutes--;
   }
   if(minutes < 0 ){
    minutes = minutes + 60;
    hours--;
   }
   if(hours < 0 ){
    hours = hours + 24;
    days--;
   }
   if(days < 0 ){
    let previousMonthDays = new Date(newYearDate.getFullYear(),newYearDate.getMonth(),0).getDate();
    days = days + previousMonthDays;
    months--;
   }
   if(months < 0 ){
    months = months + 12;
    years--;
   }

   monthEl.textContent = months >9 ? months : "0"+months;
   dayEl.textContent = days>9? days : "0" + days;
   hourEl.textContent = hours>9 ?hours: "0" + hours;
   minEl.textContent = minutes > 9? minutes : "0"+ minutes;
   secondEl.textContent = seconds>9 ? seconds : "0"+seconds ;

}






setInterval(countdown,1000);