const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Jim';
        let text = 'Hi there';
        let message = generateMessage(from, text);

        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
        expect(typeof message.createdAt).toBe('number');
    });
});