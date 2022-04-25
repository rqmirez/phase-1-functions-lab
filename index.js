const hq = 42
const pickup = 50
const feet = 264

function distanceFromHqInBlocks(pickup){
    if (pickup >= 43)
    {return (pickup - hq)}
    if (pickup <= 42)
    {return (hq - pickup)}
}

function distanceFromHqInFeet(pickup) {
    distanceFromHqInBlocks(pickup);
    return (distanceFromHqInBlocks(pickup) * 264);
}

function distanceTravelledInFeet(start, destination) {
    if(start > destination){
    return (start - destination) * 264    
    }else if(start < destination){
        return(destination - start) * 264
    }

}
console.log(distanceTravelledInFeet(42, 50))

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination)< 2000){
        return .02 * (distanceTravelledInFeet(start, destination)-400);  
    }
    else if (distanceTravelledInFeet(start,destination) > 2000 
    && distanceTravelledInFeet(start,destination) < 2500){
        return 25;
    }

else if (distanceTravelledInFeet(start,destination) > 2500) { return 'cannot travel that far';
}
}