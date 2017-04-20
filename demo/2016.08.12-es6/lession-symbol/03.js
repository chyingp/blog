// 例子1：消除“魔术变量”
{
    let optionType = {
        CALL: Symbol('call'),
        PUT: Symbol('put')
    };

    let getDesc = (type) => type === optionType.CALL ? '认购' : '认沽';

    console.log( getDesc(optionType.CALL) );  // 认购
}