var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log("Today is:" + daylist[day])
console.log(day)
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
console.log(today)
let prepand = (hour >= 12)? "PM": "AM";
hour = (hour >= 12)? hour - 12: hour;
if(hour === 0 && prepand === "PM")
{
if(minutes === 0 && seconds === 0)
{
hour = 12
prepand = "noone"
}else 
hour = 12;
prepand = "PM"
}
if( hour === 0 && prepand === "AM")
{
if( minutes === 0 && seconds === 0) 
{
    hour = 12;
    prepand = "Midnight"
}else {
hour = 12;
prepand = "AM"
}
}
console.log(`today is ${daylist[day]} and the time is ${hour}${prepand}: ${minutes}: ${seconds}`)