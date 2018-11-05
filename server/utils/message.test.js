const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message', () => {
        let from = 'Jim';
        let text = 'Hi there';
        let message = generateMessage(from, text);

        expect(message.from).toEqual(from);
        expect(message.text).toEqual(text);
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message', () => {
        let from = 'Jim'
        let latitude = '123456';
        let longitude = '876321';
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        let locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.url).toEqual(url);
        expect(typeof locationMessage.createdAt).toBe('number');
    });
});