//1 переменные в require ведут себя как константы!
const {characters, stealRing} = require('./characters.js');
let myChaars = characters; 
myChaars = stealRing(characters, "Фродо");
for (const c of characters) {
		console.log(c)
}
	
//2 круговая зависимомть- Warning!
// const log = require('./characters.js');
// log()
// const a = 2;
// module.exports = {
// 	a
// }
		
//3
// const a = 1;
// if (a > 0) {
// 	const log = require('./characters.js');
// 	log()
// } else {
// 	console.log('Меньше 0');
// }