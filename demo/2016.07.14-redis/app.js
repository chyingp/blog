var redis = require('redis');
var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("myNick", "- -b", redis.print);
client.get("myNick", function(err, reply){
	console.log(reply);
});