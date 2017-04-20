{
    let obj = new Proxy({}, {
        set: function (target, key, value, receiver) {
            console.log(`setting ${key} to ${value}`);
            Reflect.set(target, key, value, receiver);
        },
        get: function (target, key, value, receiver) {
            console.log(`getting ${key}`);
            return Reflect.get(target, key, receiver);
        }
    });

    obj.count = 1;
    // setting count to 1

    obj.count++;
    // getting count
    // setting count to 2
}

{
    let obj = new Proxy({}, {
        get: function (target, key) {
            return 10;
        }
    });
    console.log(obj.nick);  // 10
    console.log(obj.age);  // 10
}