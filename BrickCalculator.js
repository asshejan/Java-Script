function brickCalculator(floor){
    if(floor<=10){
        return floor*15000;
    }
    else if(floor<=20){
        return floor*12000;
    }
    else{
        return floor*10000;
    }
}
console.log(brickCalculator(22))