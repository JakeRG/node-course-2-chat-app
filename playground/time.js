const moment = require('moment');

let date = moment().subtract(2, 'hours');
console.log(date.format('h:mm a'));