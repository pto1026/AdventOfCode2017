describe(`Part One`, () => {
    test(`Sum of 3`, () => {
        expect(require('./InverseCaptcha').inverseCaptcha('1122')).toBe(3);
    })
    test(`Sum of 4`, () => {
        expect(require('./InverseCaptcha').inverseCaptcha('1111')).toBe(4);
    })
    test(`Sum of 0`, () => {
        expect(require('./InverseCaptcha').inverseCaptcha('1234')).toBe(0);
    })
    test(`Sum of 9`, () => {
        expect(require('./InverseCaptcha').inverseCaptcha('91212129')).toBe(9);
    })
})
describe('Part Two', () => {
    test(`Sum of 6`, () => {
        expect(require('./InverseCaptcha').inverseCaptchaPartTwo('1212')).toBe(6);
    })
    test(`Sum of 0`, () => {
        expect(require('./InverseCaptcha').inverseCaptchaPartTwo('1221')).toBe(0);
    })
    test(`Sum of 4`, () => {
        expect(require('./InverseCaptcha').inverseCaptchaPartTwo('123425')).toBe(4);
    })
    test(`Sum of 12`, () => {
        expect(require('./InverseCaptcha').inverseCaptchaPartTwo('123123')).toBe(12);
    })
    test(`Sum of 4`, () => {
        expect(require('./InverseCaptcha').inverseCaptchaPartTwo('12131415')).toBe(4);
    })
})