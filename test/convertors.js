/* eslint-env node, mocha */

var expect = require('chai').expect;
var Exonum = require('..');

describe('Convert data from one type to another', function() {

    describe('Check Exonum.hexadecimalToUint8Array', function() {
        it('should convert valid hexadecimal into Uint8Array', function() {
            var data = require('./data/convertors/hexadecimalToUint8Array.json');
            expect(Exonum.hexadecimalToUint8Array(data.from)).to.deep.equal(new Uint8Array(data.to));
        });

        it('should return undefined when convert invalid hexadecimal into Uint8Array', function() {
            [null, false, 42, new Date(), {}, [], '0438082601f8b38ae010a621a48f4b4cd021c4e6e69219e3c2d8abab482039ez'].forEach(function(value) {
                try {
                    expect(Exonum.hexadecimalToUint8Array(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });
    });

    describe('Check Exonum.stringToUint8Array', function() {
        it('should convert valid string into Uint8Array', function() {
            var data = require('./data/convertors/stringToUint8Array.json');
            expect(Exonum.stringToUint8Array(data.from)).to.deep.equal(new Uint8Array(data.to));
        });

        it('should return undefined when convert invalid string into Uint8Array', function() {
            [null, false, 42, new Date(), {}, []].forEach(function(value) {
                try {
                    expect(Exonum.stringToUint8Array(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });
    });

    describe('Check Exonum.binaryStringToUint8Array', function() {
        it('should convert valid binaryString into Uint8Array', function() {
            var data = require('./data/convertors/binaryStringToUint8Array.json');
            expect(Exonum.binaryStringToUint8Array(data.from)).to.deep.equal(new Uint8Array(data.to));
        });

        it('should return undefined when convert wrong binaryString into Uint8Array', function() {
            [null, false, new Date(), {}, [], 42].forEach(function(value) {
                try {
                    expect(Exonum.binaryStringToUint8Array(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });

        it('should return undefined when convert invalid binaryString into Uint8Array', function() {
            ['102'].forEach(function(value) {
                try {
                    expect(Exonum.binaryStringToUint8Array(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(RangeError);
                }
            });
        });
    });

    describe('Check Exonum.uint8ArrayToHexadecimal', function() {
        it('should convert valid Uint8Array into hexadecimal', function() {
            var data = require('./data/convertors/uint8ArrayToHexadecimal.json');
            expect(Exonum.uint8ArrayToHexadecimal(new Uint8Array(data.from))).to.equal(data.to);
        });

        it('should return undefined when convert invalid Uint8Array into hexadecimal', function() {
            [null, false, 42, new Date(), {}, 'Hello world', [4,56]].forEach(function(value) {
                try {
                    expect(Exonum.uint8ArrayToHexadecimal(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });
    });

    describe('Check Exonum.binaryStringToHexadecimal', function() {
        it('should convert valid binaryString into hexadecimal', function() {
            var data = require('./data/convertors/binaryStringToHexadecimal.json');
            expect(Exonum.binaryStringToHexadecimal(data.from)).to.deep.equal(data.to);
        });

        it('should return undefined when convert binaryString of wrong type into hexadecimal', function() {
            [null, false, 42, new Date(), {}, []].forEach(function(value) {
                try {
                    expect(Exonum.binaryStringToHexadecimal(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });

        it('should return undefined when convert invalid binaryString into hexadecimal', function() {
            ['102'].forEach(function(value) {
                try {
                    expect(Exonum.binaryStringToHexadecimal(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(RangeError);
                }
            });
        });
    });

    describe('Check Exonum.hexadecimalToBinaryString', function() {
        it('should convert valid hexadecimal into BinaryString', function() {
            var data = require('./data/convertors/hexadecimalToBinaryString.json');
            expect(Exonum.hexadecimalToBinaryString(data.from)).to.equal(data.to);
        });

        it('should return undefined when convert invalid hexadecimal into BinaryString', function() {
            [null, false, 42, new Date(), {}, [], 'az'].forEach(function(value) {
                try {
                    expect(Exonum.hexadecimalToBinaryString(value)).to.be.undefined;
                } catch (error) {
                    expect(error).to.be.an.instanceof(TypeError);
                }
            });
        });
    });

});
