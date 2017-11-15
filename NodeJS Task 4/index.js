var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, files) {
	if (err) throw err;
	console.log('W katalogu, znajdują się następujące pliki: ');
	console.log(files);
	fs.appendFile('./', 'cokolwiek.txt', function(err, file){
			console.log('Dołączono plik: "cokolwiek.txt"');
		});	
	fs.writeFile('./cokolwiek.txt', files, function(err, data) {
		if (err) throw err;
		console.log('Dane zapisane do pliku.');
	});
});
