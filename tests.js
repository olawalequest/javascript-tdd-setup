'use strict'

var chai = require('chai');
var assert = chai.assert;
var sum;

var lib = require('./lib/sumofprimes.js');

describe("test that the sum of all prime numbers in n are computed correctly", function(){
  it("should give 5 for when n is 3", function(){
    assert(
        lib.sumOfPrimes(3)===5);
  });

  it("should return 2 for when n is 2", function(){
    assert(
        lib.sumOfPrimes(2)===2);
  });

  it("should return 17 for when n is 10", function(){
   assert(
       lib.sumOfPrimes(10) === 17);
  });

  it("should return 77 for when n is 20", function(){
    assert(
        lib.sumOfPrimes(20)===77);
  });

  it("should return 'No prime number' for when n is 0", function(){
    assert(
        lib.sumOfPrimes(0)==="no prime number");
  });

  it("should return 'No prime number' for when n is 1", function(){
    assert(
        lib.sumOfPrimes(1)==="no prime number");
  });

  it("should return Invalid input for when n is -10", function(){
    assert(
        lib.sumOfPrimes(-10)==="invalid input");
  });

  it("should return Invalid input for when n is wale", function(){
    assert(
        lib.sumOfPrimes("wale")==="invalid input");
  });

  it("should return Invalid input for when n is andela", function(){
    assert(
        lib.sumOfPrimes("andela")==="invalid input");
  });

  it("should return Invalid input for when n is ...", function(){
    assert(
        lib.sumOfPrimes("...")==="invalid input");
  });

  it("should return Invalid input for when n is -40", function(){
    assert(
        lib.sumOfPrimes(-40)==="invalid input");
  });

  it("should return 1060 for when n is 100", function(){
    assert(
        lib.sumOfPrimes(100)===1060);
  });

  it("should return 593823 for when n is 3000", function(){
    assert(
        lib.sumOfPrimes(3000)===593823);
  });

});
