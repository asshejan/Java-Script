
var nam = ["rahim", "rahi", "sadadd", "rad", "billalAhmed", "pad"];
var min = nam[0].length;
var small = nam[0];
for (var i=0;i<nam.length;i++){
    if(nam[i].length<min){
        min = nam[i].length;
        small = nam[i];
    }
}
console.log(small);


