function primeCheck(num){
  if(num<2){
    return 'is not a prime number';
  }
  for(let i=2;i<=num/2;i++){
    if(num%i==0){
      return 'is not a prime number';
    }
  }
  return 'is a prime number';
}
let number = primeCheck(17);
console.log(number);