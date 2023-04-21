//1
export let characters = [
	{
		name: 'Фродо',
		hasRing: false
	},
	{
		name: 'Бильбо',
		hasRing: false
	}
];
export function stealRing(characters, owner) {
	return characters.map(c => {
		if (c.name == owner) {
			c.hasRing = true;
		} else {
			c.hasRing = false;
		}
	})
}
export default function log() {
	console.log('log');
}