var storage=require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a new user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here',
				type: 'string'
			},
			city: {
				demand: true,
				alias: 'ci',
				description: 'Your city goes here',
				type: 'string'
			},
			country: {
				demand: true,
				alias: 'co',
				description: 'Your country goes here',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Get an existing user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'User name (eg. First Name)',
				type: 'string'
			}
		}).help('help');
	})

	.help('help')
	.argv;
var command = argv._[0];

function createUser (user) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(user);
	storage.setItemSync('accounts', accounts);

	return user;
}

function getUser (userName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === userName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

if (command === 'create') {
	var createdAccount = createUser({
		name: argv.name,
		lastname: argv.lastname,
		city: argv.city,
		country: argv.country
	});
	console.log('Account created!');
	console.log(createdAccount);
} else if (command === 'get') {
	var fetchedAccount = getUser(argv.name);

	if (typeof fetchedAccount === 'undefined') {
		console.log('User not found');
	} else {
		console.log('User found!');
		console.log(fetchedAccount);
	}
}

/*
console.log(argv);

if (command === 'adduser' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined' && typeof argv.city !== 'undefined' && typeof argv.country !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.lastname + ' ' + argv.city + ' ' + argv.country + '!');	
} else if (command === 'adduser' && typeof argv.name !== 'undefined' && typeof argv.city !== 'undefined') {
	console.log('Hello ' + argv.name + ' ' + argv.city + '!');
} else if (command === 'adduser' && typeof argv.name !== 'undefined') {
	console.log('Hello ' + argv.name + '!');
} else if (command === 'adduser') {
	console.log('Hello world!');
}*/