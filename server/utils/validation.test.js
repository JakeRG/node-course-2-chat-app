const expect = require('expect');

const {isRealString} = require('./validation')

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(123)).toBe(false);
        expect(isRealString(false)).toBe(false);
        expect(isRealString(true)).toBe(false);
        expect(isRealString({text: 'string'})).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('   ')).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        expect(isRealString('Jimmy')).toBe(true);
        expect(isRealString('This is a sentence with spaces')).toBe(true);
        expect(isRealString('  This is a sentence with leading and trailing spaces   ')).toBe(true);
        expect(isRealString('This_is+one%with#strange!characters')).toBe(true);
    });
});