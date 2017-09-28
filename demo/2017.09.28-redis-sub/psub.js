var redis = require("redis");
var sub = redis.createClient();
var msg_count = 0;
// var CHANNEL = 'hello';

sub.on("subscribe", function (channel, count) {
  // pub.publish("a nice channel", "I am sending a message.");
  // pub.publish("a nice channel", "I am sending a second message.");
  // pub.publish("a nice channel", "I am sending my last message.");
});

sub.on("pmessage", function (channel, realChannel, message) {
  console.log("sub channel " + realChannel + ": " + message);
  msg_count += 1;
  if (msg_count === 3) {
      sub.unsubscribe();
      sub.quit();
      // pub.quit();
  }
});

sub.psubscribe("java*");

// 在redix命令行下运行
// PUBLISH java java
// PUBLISH javascript javascript

// 输出：
// sub channel java*: java
// sub channel java*: javascript