const calculator = require('./calculator.js');
describe('calculator.js', function() {
    //test or nested describes here
    test('using test', () => {
        expect(true).not.toBe(false);
    });
    it('should add two numbers', () => {
// const expected = 4;
// const actual = calculator.add(2, 2);
// //assertion
// expect(actual).toBe(expected);
//.toBeis a matched
expect(calculator.add(2, 2)).toBe(4);
expect(calculator.add(2, 3)).toBe(5);
    });

    it('should return the provided value if only one number gien', () => {
        expect(calculator.add(2)).toBe(2);
        expect(calculator.add(3)).toBe(3);
    });
    it('should return the sum of any number of values passed', () =>{
        expect(calculator.add(1, 2, 3)).toBe(6);
        expect(calculator.add(1, 0, 3)).toBe(4);
        expect(calculator.add(1, 0, 3,1,2,4)).toBe(11);
        expect(calculator.add(1)).toBe(1);
        expect(calculator.add(1, -1)).toBe(0);
    });
    it('should return 0 f caled with no arguments',() =>{
        expect(calculator.add()).toBe(0);
    });
})

//add two numbers
// passing only one value
//should return 0 if called with np arguments
//adding any number values passes seprated by comma
//sum an array of numbers