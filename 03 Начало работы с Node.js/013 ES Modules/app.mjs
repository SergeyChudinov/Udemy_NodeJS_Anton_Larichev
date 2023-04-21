//1 переменные в require ведут себя как константы!
import log, {characters, stealRing as stealRingFunc} from './characters.mjs';
let myChaars = characters; 
myChaars = stealRingFunc(characters, "Фродо");
for (const c of characters) {
	console.log(c)
}
log();

//2
// import log, * as char from './characters.mjs'; // * -это все!
// let myChaars = char.characters;
// myChaars = char.stealRing(char.characters, "Фродо");
// for (const c of char.characters) {
// 	console.log(c)
// }
// log();

//3 так пишется асинхронная функция! можем использ. try, catch
async function main() {
	try{
		const {characters, stealRing} = await import('./characters.mjs')
		let myChaars = characters;
		myChaars = stealRing(characters, "Фродо");
		for (const c of characters) {
			console.log(c)
		}
	} catch(e) {
		console.log(e.message)
	}
}
main();