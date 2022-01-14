const {polybius} = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius()', ()=>{
    describe('errors', ()=>{
    it('input is needed, please enter a valid input.', ()=>{
        const actual = polybius();
        expect(actual).to.be.false;
    })
    describe('when encoding', ()=>{
    it('should be able to return an encoded message of number pairs.', ()=>{
        const input = 'thinkful';
        const actual = polybius(input, encode = true);
        const expected = '4432423352125413'

        expect(actual).to.equal(expected);
    })
    it('should be able to encode "i" and "j" to 42.', ()=>{
        const input = 'jiggle';
        const actual = polybius(input, encode = true);
        const expected = '424222221351'

        expect(actual).to.equal(expected);
    })
    it('should be able to able to encode even with capital letters', ()=>{
        const input = 'Jiggle';
        const actual = polybius(input, encode = true);
        const expected = '424222221351'

        expect(actual).to.equal(expected);
    })
    it('should be able to able to leave space as it is.', ()=>{
        const input = 'hello world';
        const actual = polybius(input, encode = true);
        const expected = '3251131343 2543241341'

        expect(actual).to.equal(expected);
    })
    describe('when decoding', ()=>{
        it('should be able to return a decoded message.', ()=>{
            const input = '3251131343';
            const actual = polybius(input, encode = false);
            const expected = 'hello';
    
            expect(actual).to.equal(expected);
        })
        it('should be able to decode 42 to "i/j"', ()=>{
            const input = '424222221351';
            const actual = polybius(input, encode = false);
    
            expect(actual).to.include('j');
            expect(actual).to.include('i');
        })
        it('should return false if the length of input is 0', ()=>{
            const input = '42422222131';
            const actual = polybius(input, encode = false); 
    
            expect(actual).to.be.false;
        })
        it('should be able to able to leave space as it is.', ()=>{
            const input = '3251131343 2543241341';
            const actual = polybius(input, encode = false);
            const expected = 'hello world';
    
            expect(actual).to.equal(expected);
        })
    })
})
})
})
