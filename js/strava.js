function updateDays(){
    var target = 7500 // Number of miles
    var numberOfDays = 365 // Number of days to achieve the target
    var oneDay = 24 * 60 * 60 * 1000; // Number of miliseconds in 24 hours (js counts time in ms)
    var startDate = new Date(2021, 0, 1, 0, 0, 0, 0); // Midnight at the start of the year
    var todaysDate = new Date() //Todays date/time

    // Calculate number of days since start date. Round up (ceil) so as soon as day starts, it gets added
    var days = Math.ceil(Math.abs((startDate.getTime() - todaysDate.getTime()) / (oneDay)));
    
    // Calculate how many miles should have been done by now
    var target = Math.round(target*days/numberOfDays)
    
    var milesToDate = 1150 // ***************** TODO This needs to be obtained from Strava ********************
    var differance = milesToDate - target

    
    document.getElementById("numberOfDays").innerHTML = days
    document.getElementById("targetMiles").innerHTML = target
    document.getElementById("milesCycled").innerHTML = milesToDate
    document.getElementById("differance").innerHTML = Math.abs(differance)
    
    
    if (differance < 0){ // behind target
        document.getElementById("aheadOrBehind").innerHTML = "behind target"
        document.getElementById("result").style.backgroundColor="#ffb7ba";
        document.getElementById("differance").style.color="red";
        document.getElementById("aheadOrBehind").style.color="red";
    }
    else {
        document.getElementById("aheadOrBehind").innerHTML = "ahead of target"
        document.getElementById("result").style.backgroundColor="#cafdc8";
        document.getElementById("differance").style.color="green";
        document.getElementById("aheadOrBehind").style.color="green";
    }
}

 
    