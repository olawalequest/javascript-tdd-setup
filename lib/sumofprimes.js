/*
Aladeusi Olawale
aladeusi.olawale@gmail.com
Javascript Application to compute the sum of all prime numbers in N number

*/
'use strict'

module.exports = {
  sumOfPrimes: function(number) {
    if(number>1) {
      let sum= 0;
      var sieve = [], i, j, primes = []; // defining and initiatlizing variable
      for (i = 2; i <= number; ++i) { //start of for loop
        if (!sieve[i]) {
            sum = sum+i;
            for (j = i << 1; j <= number; j += i) {
                sieve[j] = true;
            } //end of for loop
        } //end of if condition (!sieve[i])
     } //end of for loop
      return sum; 
    } // end of if condition (number>1)

    else if(number==1||number==0){
      return "no prime number";
    } //end of else if condition

    else if(number<0){
      return "invalid input";
    } //end of else if condition

    else {
      return "invalid input";
    } //end of else if condition
  } // end of function
}