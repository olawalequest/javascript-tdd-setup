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
      var sieve = [], i, j, primes = [];
      for (i = 2; i <= number; ++i) {
        if (!sieve[i]) {
            sum = sum+i;
            for (j = i << 1; j <= number; j += i) {
                sieve[j] = true;
            }
        }
     }
      return sum;
    }

    else if(number==1||number==0){
      return "no prime number";
    }

    else if(number<0){
      return "invalid input";
    }

    else {
      return "invalid input";
    }
  }
}