```javascript
pingpp.charges.create({
  order_no:  "123456789",
  app:       { id: "APP_ID" },
  channel:   'wx_pub',
  amount:    100,
  client_ip: "127.0.0.1",
  currency:  "CNY",
  subject:   "Your Subject",
  body:      "Your Body",
  // extra:     extra
}, function(err, charge) {
  // YOUR CODE
  console.log(err);
  console.log(charge);
});
```