const fs = require('fs');

console.log("Init");
setTimeout(() => {
	console.log(performance.now(), 'Timer 0');
}, 100);
setImmediate(() => {
	console.log('Immediate');
});
fs.readFile(__filename, (err, data) => {
	if (err) {
		console.log(err);
	}
	// console.log(data.toString());
	console.log('File readed');
});
setTimeout(() => {
	for (i = 0; i < 100000000; i++) {} 
	console.log('for');
	Promise.resolve().then(() => {
		console.log('Promise inside Timout');
	});
	process.nextTick(() => console.log('tick inside Timout'));
}, 0);
Promise.resolve().then(() => {
	console.log('Promise');
});
process.nextTick(() => console.log('tick'));
console.log("Final");
//Init => Final => tick => Promise => for => tick inside Timout => Promise inside Timout => Immediate => 345.0395998954773 Timer 0 => File readed