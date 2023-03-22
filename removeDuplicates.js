var arr = [45,81,163,98,81,56,15];
var unique = [];
for(var i=0;i<arr.length;i++){
    var index = unique.indexOf(arr[i]);
    if(index == -1){
        unique.push(arr[i]);
    }
}
console.log(unique);