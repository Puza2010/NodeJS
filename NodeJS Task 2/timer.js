var os = require('os');

function time(uptime) {
	if(uptime >= 60 && uptime < 3600) {
		console.log('Uptime: ', (uptime / 60).toFixed(0), 'min ', (uptime % 60).toFixed(0), 'sec');
	} else if(uptime >=3600) {
		console.log('Uptime: ', (uptime / 3600).toFixed(0), 'h ', (uptime % 3600 / 60).toFixed(0), 'min ', (uptime % 60).toFixed(0), 'sec');
	} else {
		console.log('Uptime: ', (uptime), 'sec');
	}
}

exports.print = time;