// покажет текущее время отностительно запуска!
const start = performance.now();
setTimeout(() => {
	console.log(performance.now() - start);
	console.log('Прошла секунда');
}, 1000)

function myFunc(arg) {
	console.log(`Аргумент => ${arg}`);
};
setTimeout(myFunc, 1000, 'Классный'); // 3 параметр - аргумент функции myFunc
// setTimeout(() => myFunc('Классный'), 1000); // тоже самое!

const start2 = performance.now();
let count = 0;
const timerId = setInterval(logger, 1000);
function logger() {
	console.log(performance.now() - start2);
	console.log('Прошла секунда');
	count++;
	if (count === 10) {
		clearInterval(timerId);
	}
};

// setInterval  в браузере и в консоле работают по разному! В браузере отстование интервала не суммируется, в отличае от консоли, где со временем отстование будет рости!
const intervalId = setInterval(() => {
	console.log(performance.now());
}, 1000)

console.log('Перед');
setImmediate(() => { // мгновенное выполнение, но после всего!
	console.log('После всего');
})
console.log('После');

const timerId2 = setTimeout(() => {
	console.log('BOOM!');
}, 1000);
timerId2.unref(); // удалили ссылку на таймер, приложение больше не ждут таймер!
setImmediate(() => { 
	timerId2.ref(); // вернули ссылку!
})