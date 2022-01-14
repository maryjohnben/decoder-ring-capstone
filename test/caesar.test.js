const {caesar} = require('../src/caesar');
const expect = require('chai').expect;

describe('caesar()', ()=>{
    describe('errors', ()=>{
    it('shift cannot be empty, please enter a valid number.', ()=>{
        const input = 'christopher cat'
        const actual = caesar(input);
        expect(actual).to.be.false
    })
    it('input is needed, please enter a valid input.', ()=>{
    
        const shift = 5;
        const actual = caesar(shift);
        expect(actual).to.be.false;
    })
    it('shift cannot be 0, it needs to be either positive or negative number.', ()=>{
        const message = 'christopher cat';
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it('please enter a shift value higher than -25', ()=>{
        const message = 'christopher cat';
        const shift = -27;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it('please enter a shift value lower than 25', ()=>{
        const message = 'christopher cat';
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
})
    describe('when encoding', ()=>{
        it('capital letters should not affect encoding.', ()=>{
        const message = 'Thinkful';
        const shift = 3;
        const actual = caesar(message, shift, encode = true);
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    })
    it('should be able to return an encoded message.', ()=>{
        const message = 'thinkful';
        const shift = 3;
        const actual = caesar(message, shift, encode = true);
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    })
    it('should be able to handle letters even when shift extends past the alphabet.', ()=>{
        const message = 'zebra magazine';
        const shift = 3;
        const actual = caesar(message, shift, encode = true);
        const expected = 'cheud pdjdclqh';
        expect(actual).to.equal(expected);
    })
    it('should be able to maintain special characters and spaces as it is.', ()=>{
        const message = 'the cat :)';
        const shift = 1;
        const actual = caesar(message, shift, encode = true);
        const expected = 'uif dbu :)';
        expect(actual).to.equal(expected);
    })
    it('should be able to handle negative shift.', ()=>{
        const message = 'the cat';
        const shift = -1;
        const actual = caesar(message, shift, encode = true);
        const expected = 'sgd bzs';
        expect(actual).to.equal(expected);
    })
    })
    describe('when decoding', ()=>{
        it('capital letters should not affect decoding.', ()=>{
            const message = 'Wklqnixo';
            const shift = 3;
            const actual = caesar(message, shift, encode = false);
            const expected = 'thinkful' ;
            expect(actual).to.equal(expected);
    })
    it('should be able to return a decoded message.', ()=>{
        const message = 'wklqnixo';
        const shift = 3;
        const actual = caesar(message, shift, encode = false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
    it('should be able to handle letters even when shift extends past the alphabet.', ()=>{
        const message = 'cheud pdjdclqh';
        const shift = 3;
        const actual = caesar(message, shift, encode = false);
        const expected = 'zebra magazine';
        expect(actual).to.equal(expected);
    })
    it('should be able to maintain special characters and spaces as it is.', ()=>{
        const message = 'uif dbu :)';
        const shift = 1;
        const actual = caesar(message, shift, encode = false);
        const expected = 'the cat :)';
        expect(actual).to.equal(expected);
    })
    it('should be able to handle negative shift.', ()=>{
        const message = 'sgd bzs';
        const shift = -1;
        const actual = caesar(message, shift, encode = false);
        const expected = 'the cat';
        expect(actual).to.equal(expected);
    })
    })
})
