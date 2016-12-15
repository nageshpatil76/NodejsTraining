console.log('starting password manager');

var storage=require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
    username: "Nagesh",
    balance:100
}]);

var accounts=storage.getItemSync('accounts');
accounts.push({
    username:"Arush",
    balance:200
});
storage.setItemSync('accounts', accounts);
console.log(accounts);

//var accounts=storage.getItemSync(accounts);
