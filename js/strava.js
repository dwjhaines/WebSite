MilageChallenge()

function updateDays(milesToDate){
    var target = 7500 // Number of miles
    var numberOfDays = 365 // Number of days to achieve the target
    var oneDay = 24 * 60 * 60 * 1000; // Number of miliseconds in 24 hours (js counts time in ms)
    var startDate = new Date(2021, 0, 1, 0, 0, 0, 0); // Midnight at the start of the year
    var todaysDate = new Date() //Todays date/time

    // Calculate number of days since start date. Round up (ceil) so as soon as day starts, it gets added
    var days = Math.ceil(Math.abs((startDate.getTime() - todaysDate.getTime()) / (oneDay)));
    
    // Calculate how many miles should have been done by now
    var target = Math.round(target*days/numberOfDays)
    
    var differance = milesToDate - target

    document.getElementById("numberOfDays").innerHTML = days
    document.getElementById("targetMiles").innerHTML = target
    document.getElementById("milesCycled").innerHTML = milesToDate
    document.getElementById("differance").innerHTML = Math.abs(differance)
    
    
    if (differance < 0){ // behind target
        document.getElementById("aheadOrBehind").innerHTML = "behind target."
        document.getElementById("result").style.backgroundColor="#ffb7ba";
        document.getElementById("differance").style.color="red";
        document.getElementById("aheadOrBehind").style.color="red";
    }
    else {
        document.getElementById("aheadOrBehind").innerHTML = "ahead of target."
        document.getElementById("result").style.backgroundColor="#cafdc8";
        document.getElementById("differance").style.color="green";
        document.getElementById("aheadOrBehind").style.color="green";
    }
}

async function MilageChallenge(){
    // First we need to get an updated authorisation token to allow us to access Strava data
    const auth_link = "https://www.strava.com/oauth/token"
    fetch(auth_link,{
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
    }).then((res) => res.json())
        .then(res => getDistance(res))
}

async function getDistance(res){
    // ToDo - Need to get all of this into above function and get the combined function to return distance in miles
    console.log(res)
    const activities_link = 'https://www.strava.com/api/v3/athletes/266358/stats?access_token=' + res.access_token
    
    const response = await fetch(activities_link, {});
    const json = await response.json();
    console.log(json)
    
    var distanceInMetres = json.ytd_ride_totals.distance
    var distanceInMiles = Math.floor(distanceInMetres * 0.000621371192)
    console.log("Distance so far in miles: " + distanceInMiles)
    updateDays(distanceInMiles)
}




 
    
