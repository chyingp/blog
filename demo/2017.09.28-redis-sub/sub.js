var redis = require("redis");
var sub = redis.createClient();
var msg_count = 0;
// var CHANNEL = 'hello';

sub.on("subscribe", function (channel, count) {
  // pub.publish("a nice channel", "I am sending a message.");
  // pub.publish("a nice channel", "I am sending a second message.");
  // pub.publish("a nice channel", "I am sending my last message.");
});

sub.on("message", function (channel, message) {
  console.log("sub channel " + channel + ": " + message);
  msg_count += 1;
  if (msg_count === 3) {
      sub.unsubscribe();
      sub.quit();
      // pub.quit();
  }
});

sub.subscribe("animal");
sub.subscribe("fruit");

// 在redix命令行下运行
// PUBLISH fruit apple
// PUBLISH animal cat

// 输出：
// sub channel fruit: apple
// sub channel animal: cat