var arr = [45,81,163,98,56,15];
var max = arr[0];
for( var i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        max = arr[i+1];
    }
}
console.log(max);