getMilage()

// Function to download data from Strava and extract the number of miles done so far this year.
async function getMilage(){
    // First we need to get an updated authorisation token to allow us to access Strava data
    const auth_link = "https://www.strava.com/oauth/token"
    const response_token = await fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            client_id: '61833',
            client_secret: '1dad36071eccfe7f6629c999a2beb7f70ab0cdd4',
            refresh_token: '1cf828f8c28705ded41344a36cd8ee38edc3d122',
            grant_type: 'refresh_token'
        })
    })
    const json_token = await response_token.json();
    console.log(response_token)
    
    // The response containing the new token is a json structure. Add the token to the url and fetch the data from Strava.
    const activities_link = 'https://www.strava.com/api/v3/athletes/266358/stats?access_token=' + json_token.access_token
    const response_activity = await fetch(activities_link, {});
    const json_activity = await response_activity.json();
    console.log(json_activity)
    
    // The activity info from Strava is another JSON structure. Extract the year-to-date distance and convert from m to miles.
    var distanceInMetres = json_activity.ytd_ride_totals.distance
    var distanceInMiles = Math.floor(distanceInMetres * 0.000621371192)
    console.log("Distance so far in miles: " + distanceInMiles)
    // Call the updateData function to update the web page.
    updateData(distanceInMiles)
}

// Function that gets passed the number of miles so far this year, does the calculations and updates the web page.
function updateData(milesToDate){
    var target = 7500 // Number of miles
    var numberOfDays = 365 // Number of days to achieve the target
    var oneDay = 24 * 60 * 60 * 1000; // Number of miliseconds in 24 hours (js counts time in ms)
    var startDate = new Date(2021, 0, 1, 0, 0, 0, 0); // Midnight at the start of the year
    var todaysDate = new Date() //Todays date/time

    // Calculate number of days since start date. Round up (ceil) so as soon as day starts, it gets added.
    var days = Math.ceil(Math.abs((startDate.getTime() - todaysDate.getTime()) / (oneDay)));
    
    // Calculate how many miles should have been done by now
    var dailyTarget = Math.round(target*days/numberOfDays)
    
    var differance = milesToDate - dailyTarget
    var dailyMilage = milesToDate / days

    document.getElementById("numberOfDays").innerHTML = days
    document.getElementById("targetMiles").innerHTML = dailyTarget
    document.getElementById("milesCycled").innerHTML = milesToDate
    document.getElementById("milesPerDay").innerHTML = dailyMilage.toFixed(2)
    document.getElementById("milesPerWeek").innerHTML = (dailyMilage*7).toFixed(2)
    document.getElementById("differance").innerHTML = Math.abs(differance)
    
    
    if (differance < 0){ // behind target
        document.getElementById("aheadOrBehind").innerHTML = "miles behind target"
        document.getElementById("result").style.backgroundColor="#ffb7ba";
        document.getElementById("differance").style.color="red";
        document.getElementById("aheadOrBehind").style.color="red";
    }
    else { // ahead of target
        document.getElementById("aheadOrBehind").innerHTML = "miles ahead of target"
        document.getElementById("result").style.backgroundColor="#cafdc8";
        document.getElementById("differance").style.color="green";
        document.getElementById("aheadOrBehind").style.color="green";
    }
    
    var percentComplete = Math.min(Math.floor((milesToDate/target)*100), 100)
    console.log("Completed: " + percentComplete +"%")
    document.getElementById("percent").innerHTML = ((milesToDate/target)*100).toFixed(1) + "%"
    document.getElementById("myBar").style.width=percentComplete+"%"
    var milesSinceLockdown = 7212 + milesToDate
    document.getElementById("milesCycledSinceLockdown").innerHTML = milesSinceLockdown
    var milesSinceChainChanged = milesToDate - 3948 // 3948 miles done this year when chain was last changed.
    if (milesSinceChainChanged > 1250){
        document.getElementById("milesSinceChainReplaced").style.color="red";
        document.getElementById("milesSinceChainReplaced").innerHTML = "******** " + milesSinceChainChanged + " ********"
    }
    else{
        document.getElementById("milesSinceChainReplaced").innerHTML = milesSinceChainChanged
    }
    
}




 
    
