var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=792bcf225eef8bfb79d70b8c1c2d4dd8&units=metric';

module.exports= function(callback) {
request({
    url:url,
    json:true
}, function (error, response, body){
    if (error){
        console.log('unable to fetch weather');
    }else{
        console.log('It\'s ' + body.main.temp + ' in '+ body.name + '!');
    }
});
}