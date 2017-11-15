var os = require('os');
var timer = require('./timer');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log(colors.green('System:', type));
	console.log(colors.grey('Release:', release));
	console.log(colors.yellow('CPU model:', cpu));
	timer.print(uptime);
	console.log(colors.blue('User name:', userInfo.username));
	console.log(colors.red('Home dir:', userInfo.homedir));
}

exports.print = getOSinfo;