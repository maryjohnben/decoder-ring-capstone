const {substitution} = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution()', ()=>{
    describe('errors', ()=>{
    it('alphabet cannot be empty, please enter a valid alphabet.', ()=>{
        const input = 'christopher cat'
        const actual = substitution(input);
        expect(actual).to.be.false
    })
    it('input is needed, please enter a valid input.', ()=>{
    
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const actual = substitution(alphabet);
        expect(actual).to.be.false;
    })
    it('please enter alphabet that is exactly 26 characters long.', ()=>{
        const input = 'thinkful'
        const alphabet = 'xoyqmcgrukswaf';
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    it('please enter an alphabet that contains unique characters.', ()=>{
        const input = 'thinkful'
        const alphabet = 'xoyymcgrukswaflnthdjjzibvv';
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    })
    describe('when encoding', ()=>{
        it('capital letters should not affect encoding.', ()=>{
        const input = 'Thinkful';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const actual = substitution(input, alphabet, encode = true);
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
        })
        it('should be able to encode an input.', ()=>{
        const input = 'thinkful';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const actual = substitution(input, alphabet, encode = true);
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
        })
        it('should be able to encode with any kind of alphabets icluding unique characters.', ()=>{
        const input = 'thinkful';
        const alphabet = 'xoyqmcgrukswaflnthd&pzibev';
        const actual = substitution(input, alphabet, encode = true);
        const expected = '&rufscpw';
        expect(actual).to.equal(expected);
        })
        it('should be able to encode and leave space as it is.', ()=>{
        const input = 'my message';
        const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
        const actual = substitution(input, alphabet, encode = true);
        const expected = 'yp ysii.rs';
        expect(actual).to.equal(expected);
        })
    })
    describe('when decoding', ()=>{
        it('capital letters should not affect decoding.', ()=>{
            const input = 'jrufscpw';
            const alphabet = 'xoyqmcgrukswaflnthdJpzibev';
            const actual = substitution(input, alphabet, encode = false);
            const expected = 'thinkful';
            expect(actual).to.equal(expected);
            })
        it('should be able to decode an input.', ()=>{
        const input = 'jrufscpw';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const actual = substitution(input, alphabet, encode = false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
        })
        it('should be able to decode with any kind of alphabets including unique characters.', ()=>{
        const input = '&rufscpw';
        const alphabet = 'xoyqmcgrukswaflnthd&pzibev';
        const actual = substitution(input, alphabet, encode = false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
        })
        it('should be able to decode and leave space as it is.', ()=>{
        const input = 'yp ysii.rs';
        const alphabet = '.waeszrdxtfcygvuhbijnokmpl';
        const actual = substitution(input, alphabet, encode = false);
        const expected = 'my message';
        expect(actual).to.equal(expected);
        })
    })
})
})
