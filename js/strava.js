function updateDays(){
    var target = 7500
    var numberOfDays = 365
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var startDate = new Date(2020, 11, 31, 23, 59, 59, 0); // 29th of Feb at noon your timezone
    var todaysDate = new Date() //Todays date/time

    var days = Math.round(Math.abs((startDate.getTime() - todaysDate.getTime()) / (oneDay)));
    //console.log(firstDate, "to", secondDate, "\nDifference: " + days + " day");
    
    var target = Math.round(target*days/numberOfDays)
    
    document.getElementById("numberOfDays").innerHTML = days
    document.getElementById("targetMiles").innerHTML = target
}


    