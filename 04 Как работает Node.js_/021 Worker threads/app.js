const crypto = require('crypto');
const https = require('https');
const start = performance.now();

// CPU задача (Worker Thread)
// pbkdf2- стандарт формирования ключа (англ.) на основе пароля.
// process.env.UV_THREADPOOL_SIZE = 4;
// for (let i = 0; i < 50; i++) {
// 	crypto.pbkdf2('test', 'salt', 100_000, 64, 'sha512', () => {
// 		console.log(performance.now() - start);
// 	}); 
// }

// TCP задача (Сист асинхрон вызовы на уровне ядра)
for (let i = 0; i < 50; i++) {
	https.get('https://yandex.ru', (res) => {
		res.on('data', () => {});
		res.on('end', () => {
			console.log(performance.now() - start);
		});
	});
}