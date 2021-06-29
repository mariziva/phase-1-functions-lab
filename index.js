// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation) {
    return (Math.abs(pickupLocation - 42))
}

function distanceFromHqInFeet (pickupLocation) {
    return (distanceFromHqInBlocks(pickupLocation) * 264)
}

function distanceTravelledInFeet (pickupLocation, dropoffLocation) {
    return (Math.abs(pickupLocation-dropoffLocation)*264)
}

function calculatesFarePrice (pickupLocation, dropoffLocation) {
    if (distanceTravelledInFeet(pickupLocation, dropoffLocation)<= 400)
    return 0;

    else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) > 2500)
    return "cannot travel that far";
    
    else if (2000 >= (distanceTravelledInFeet(pickupLocation, dropoffLocation)))
    return (((distanceTravelledInFeet(pickupLocation, dropoffLocation))-400)*0.02);
    
    else if (2000 < distanceTravelledInFeet(pickupLocation, dropoffLocation) <= 2500)
    return 25;
    
    
}