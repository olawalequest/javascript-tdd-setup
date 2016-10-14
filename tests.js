'use strict'

var chai = require('chai');
var assert = chai.assert;
var sum;

var lib = require('./lib/sumofprimes.js');

describe("test that the sum of all prime numbers in n are computed correctly", function(){
  it("should give 5 for when n is 3", function(){
    assert(
        lib.sumofprimes(3),{sum:5});
  });

  it("should give 2 for when n is 2", function(){
    assert(
        lib.sumofprimes(2),{sum:2});
  });

  it("should give 17 for when n is 10", function(){
    assert(
        lib.sumofprimes(10),{sum:17});
  });

  it("should give 77 for when n is 20", function(){
    assert(
        lib.sumofprimes(20),{sum:77});
  });

  it("should give No prime number for when n is 0", function(){
    assert(
        lib.sumofprimes(0),"no prime number");
  });

  it("should give No prime number for when n is 1", function(){
    assert(
        lib.sumofprimes(0),"no prime number");
  });

});
