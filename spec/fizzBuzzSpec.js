// describe("FizzBuzz Unit Tests", ()=>{
//     // it takes 2 args:
//     // 1. name of THIS test
//     // 2. function to run (which is THIS test)
//     it(`FizzBuzz must be defined`, ()=>{
//         expect(fizzBuzz).toBeDefined();
//     });
//     it(`should be 1 for passing fizzBuzz 1`, ()=>{
//         expect(fizzBuzz(1)).toBe(1)
//     });
//     it(`should be fizz for passing fizzBuzz 3`, ()=>{
//         expect(fizzBuzz(3)).toBe(`Fizz`)
//     });
//     it(`should be buzz for passing fizzBuzz 5`, ()=>{
//         expect(fizzBuzz(5)).toBe(`Buzz`)
//     });
// });
describe('palindromes', function() {
    it('Works with a single word', function() {
        expect(palindromes('racecar')).toEqual(true);
    });
    it('Works with an ! or other punctuation', function() {
        expect(palindromes('Racecar!')).toEqual(true);
    });
    it('Works with multiple words', function() {
        expect(palindromes('A car, a man, a maraca.')).toEqual(true);
    });
    it('Works with multiple words (test 2)', function() {
        expect(palindromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
    });
    it('Works when a non-palidrome is passed', function() {
        expect(palindromes('JavaScript and Java make the ultimate developer.')).toEqual(false);
    });

});