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
    
    // The activity info from Strava is another JSON structure. Extract the year-to-date data and convert units.
    var numberOfRides  = json_activity.ytd_ride_totals.count
    var elevationInMetres = json_activity.ytd_ride_totals.elevation_gain   
    var distanceInMetres = json_activity.ytd_ride_totals.distance
    var timeInSeconds = json_activity.ytd_ride_totals.moving_time
    
    var elevationInFeet = Math.floor(elevationInMetres * 3.280839895)
    elevationInFeet += " ft"
    var distanceInMiles = Math.floor(distanceInMetres * 0.000621371192)
    distanceInMiles += " miles"
    console.log("Distance so far in miles: " + distanceInMiles)
    console.log("Elevation so far in feet: " + elevationInFeet)
    console.log("Number of rides: " + numberOfRides)
    console.log("Time in seconds: " + timeInSeconds)

    document.getElementById("miles-cycled").innerHTML = distanceInMiles
    document.getElementById("count").innerHTML = numberOfRides
    document.getElementById("elevation").innerHTML = elevationInFeet
    document.getElementById("time").innerHTML = convertSecondsToHoursAndMinutes(timeInSeconds)
    
    // Same four variables but for the 2024 European trip
    document.getElementById("euro-miles-cycled").innerHTML = 0 //distanceInMiles - x
    document.getElementById("euro-count").innerHTML = 0 // numberOfRides - x
    document.getElementById("euro-elevation").innerHTML = 0 // elevationInFeet -
    document.getElementById("euro-time").innerHTML = 0 //convertSecondsToHoursAndMinutes(timeInSeconds - )
}

function convertSecondsToHoursAndMinutes(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    return hours + " h " + minutes + " m";
}




 
    
