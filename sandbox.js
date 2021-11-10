//dates and times

// const now = new Date();

// console.log(now);
// console.log(typeof now);

//years, months, days, times

// console.log('Get full year: ', now.getFullYear());
// console.log('Get month: ', now.getMonth());
// console.log('Get Date: ', now.getDate());
// console.log('Get Day: ', now.getDay());
// console.log('Get Hours: ', now.getHours());
// console.log('Get Minutes: ', now.getMinutes());
// console.log('Get Seconds: ', now.getSeconds());

//timestamps

// console.log('timestamp: ', now.getTime());

//date strings

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//timestamps

const before = new Date('February 2 2021 7:30:59');
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);
const weeks = Math.floor(days/7);
const remainder = days%7;

if(remainder === 0) {
    console.log(`Been slacking for ${weeks} weeks`);
} else {
    console.log(`Been slacking for ${weeks} weeks and ${remainder} days`);
}

//converting timestamps into date object

const timestamp = 1213214543543122;
console.log(new Date(timestamp));

const futureDate = new Date(timestamp);
console.log(futureDate.getFullYear());