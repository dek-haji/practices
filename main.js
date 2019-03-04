var date = new Date;
console.log(date)
var mm = date.getMonth()+ 1;
var dd = date.getDate()
var yy = date.getFullYear()
if (dd < 10){
    dd='0'+dd
}
if (mm <10){
    mm='0'+mm
}
today = mm+'-'+dd+'-'+yy;
console.log(today)
console.log(`${mm}-${dd}-${yy}`)