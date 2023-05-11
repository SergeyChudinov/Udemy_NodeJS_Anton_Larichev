const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();
const logDnConnection = () => {
	console.log('DB connected');
}

myEmmiter.addListener('connected', logDnConnection);
myEmmiter.on('msg', (data) => {
	console.log(`Получил: ${data}`);
})
myEmmiter.prependListener('msg', (data) => { // так мы добавил листенер в начало массива лисенеров!
	console.log(`Prepend`);
})
myEmmiter.once('off', () => { // вызовется один раз и затем удалится!
	console.log('Я вызвался один раз!')
})

myEmmiter.emit('connected');
myEmmiter.emit('msg', 'просто текст!');
myEmmiter.emit('off');

myEmmiter.removeListener('connected', logDnConnection); // нужно передать функцию
myEmmiter.off('connected', logDnConnection); // тоже самое
myEmmiter.removeAllListeners('connected');

console.log(myEmmiter.getMaxListeners());// изначально их 10
myEmmiter.setMaxListeners(1); // задали макс число лисенеров для данного еммитера!
console.log(myEmmiter.getMaxListeners());// теперь 1
console.log(myEmmiter.listenerCount('msg')); // сколько лисенеров на 'msg' => 2
console.log(myEmmiter.listenerCount('off')); // 'off' => 0, так как он сработал и удалился => once 
console.log(myEmmiter.listeners('msg')); // выведит саму функцию => [ [Function (anonymous)] ] 
console.log(myEmmiter.eventNames()); // покажет текущие события! =>  [ 'msg' ]

myEmmiter.on('error', (err) => { // будет работать без этого кода!
	console.log(`Произошла ошибка: ${err.message}`);
});
myEmmiter.emit('error', new Error('BOOOM!'));

const target = new EventTarget();
const logTarget = () => {
	console.log('Connected to target');
}
target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));