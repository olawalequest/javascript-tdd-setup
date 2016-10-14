/*
Aladeusi Olawale
aladeusi.olawale@gmail.com
function that compute the sum of all prime numbers in N number

*/
'use strict'

module.exports = {
  sumofprimes: function(n) {

    if(n>1) {
      let sum= 0;
      var sieve = [], i, j, primes = [];
      for (i = 2; i <= n; ++i) {
        if (!sieve[i]) {
            sum = sum+i;
            for (j = i << 1; j <= n; j += i) {
                sieve[j] = true;
            }
        }
     }
      return sum;
    }

    else if(n==1||n==0){
      return "no prime number";
    }

    else if(n<0){
      return "invalid input";
    }

    else {
      return "invalid input";
    }
  }
}