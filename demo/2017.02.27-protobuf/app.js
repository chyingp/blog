// https://github.com/dcodeIO/protobuf.js/issues/631
// 
var protobuf = require('protobufjs');

protobuf.parse.defaults.keepCase = true;

function run () {
    protobuf.load('./Thoth.UnitedMessage.proto')
            .then(loaded5) 
            .catch(function(e){
                console.log(e.message);
            });
}



    // int32 msg_type = 1;
    // int32 msg_id = 2;
    // int32 session_id = 3;
    // map<string, DataUnited> opaque_data = 4;
    // map<string, DataUnited> routing_key = 5;
    // google.protobuf.Any msg_body = 6;

// 测试：单独测试 DataUnited  -- ok
function loaded (UnitedMessageRoot) {

    console.log('loaded');

    var UnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.UnitedMessage');
    var DataUnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.DataUnited');

    var props = {
        str_value: 'hello'
        // int_value: 10,
    };

    var dataUnited = DataUnitedMessage.create(props);

    var message = DataUnitedMessage.encode(dataUnited).finish();

    var decoded = DataUnitedMessage.decode(message);

    console.log(decoded);
}

// 测试：UnitedMessage （嵌套的 oneof） -- ok
function loaded2 (UnitedMessageRoot) {
    
    console.log('loaded');
    
    var UnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.UnitedMessage2');
    var DataUnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.DataUnited');

    var props = {
        msg_type: 1,
        msg_id: 2,
        session_id: 3,
        str_value: 'hello'
    };

    var dataUnited = UnitedMessage.create(props);

    // dataUnited.opaque_data.guid.str_value = 'hello';

    var message = UnitedMessage.encode(dataUnited).finish();

    var decoded = UnitedMessage.decode(message);

    console.log(decoded);
}

// 测试：UnitedMessage3 （ 其中一个字段为 message 类型） -- ok
function loaded3 (UnitedMessageRoot) {
    
    console.log('loaded');
    
    var UnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.UnitedMessage3');
    var DataUnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.DataUnited');

    var props = {
        msg_type: 1,
        msg_id: 2,
        session_id: 3,
        du_3: {
            str_value: 'hello'
        }
    };

    var dataUnited = UnitedMessage.create(props);

    // dataUnited.opaque_data.guid.str_value = 'hello';

    var message = UnitedMessage.encode(dataUnited).finish();

    var decoded = UnitedMessage.decode(message);

    console.log(decoded);
}

// 测试：UnitedMessage4 （ 其中一个字段为 message 类型，且该message 包含了 oneof ） -- ok
function loaded4 (UnitedMessageRoot) {
    
    console.log('loaded');
    
    var UnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.UnitedMessage4');
    var DataUnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.DataUnited4');

    var props = {
        msg_type: 1,
        msg_id: 2,
        session_id: 3,
        du_4: DataUnitedMessage.create({
            str_value: 'hello',
            fuck: 3,
            you: 'you'
        })
    };

    var dataUnited = UnitedMessage.create(props);

    // dataUnited.opaque_data.guid.str_value = 'hello';

    var message = UnitedMessage.encode(dataUnited).finish();

    var decoded = UnitedMessage.decode(message);

    console.log(decoded);
}

// 测试：UnitedMessage5  -- ok
function loaded5 (UnitedMessageRoot) {
    
    console.log('loaded');
    
    var UnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.UnitedMessage5');
    var DataUnitedMessage = UnitedMessageRoot.lookup('Thoth.UnitedMessage.DataUnited5');

    var props = {
        msg_type: 1,
        msg_id: 2,
        session_id: 3,
        opaque_data: {
            guid: DataUnitedMessage.create({
                str_value: 'hello'
            })
        }
    };

    var dataUnited = UnitedMessage.create(props);

    // dataUnited.opaque_data.guid.str_value = 'hello';

    var message = UnitedMessage.encode(dataUnited).finish();

    var decoded = UnitedMessage.decode(message);

    console.log(decoded);
}


run();

