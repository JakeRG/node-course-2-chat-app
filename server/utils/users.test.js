const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'John',
            room: 'Room'
        }, {
            id: '2',
            name: 'Jim',
            room: 'Room'
        }, {
            id: '3',
            name: 'Bob',
            room: 'Room 2'
        }];
    });

    it('should add new user', () => {
        let users = new Users();

        let user = {
            id: '12345',
            name: 'Jake',
            room: 'The Darkroom'
        };

        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
        expect(user).toEqual(resUser);
    });

    it('should remove a user', () => {
        let removedUser = users.removeUser('3');

        expect(users.users.length).toBe(2);
        expect(removedUser.name).toBe('Bob');
        expect(users.users).toEqual([{
            id: '1',
            name: 'John',
            room: 'Room'
        }, {
            id: '2',
            name: 'Jim',
            room: 'Room'
        }]);
    });

    it('should not remove user', () => {
        // Non-existing id
        let unremovedUser1 = users.removeUser('4');
        expect(users.users.length).toBe(3);
        expect(unremovedUser1).toBe(undefined);

        // Invalid id
        let unremovedUser2 = users.removeUser(1);
        expect(users.users.length).toBe(3);
        expect(unremovedUser2).toBe(undefined);
    });

    it('should find user', () => {
        let user = users.getUser('1');

        expect(user).toEqual({
            id: '1',
            name: 'John',
            room: 'Room'
        });
    });

    it('should not find user', () => {
        let user = users.getUser('4');

        expect(user).toBe(undefined);
    });

    it('should return names for room \'Room\'', () => {
        let userList = users.getUserList('Room');

        expect(userList).toEqual(['John', 'Jim']);
    });

    it('should return names for room \'Room 2\'', () => {
        let userList = users.getUserList('Room 2');

        expect(userList).toEqual(['Bob']);
    });
});