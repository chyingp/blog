// 例子：有依赖次序的异步请求
var underlyingList = [
    {code: 'ag1706'}, 
    {code: 'ag1707'}
]
var underlyingDetails = [
    {code: 'ag1706', name: '白银1706', end_date: '20170630'}, 
    {code: 'ag1707', name: '白银1707', end_date: '20170731'}
];

var getUnderlyingList = () => new Promise((resolve, reject) => resolve(underlyingList));

var getUnderlyingDetail = (code) => new Promise((resolve, reject) => {
    var matchItem = underlyingDetails.find((item) => item.code === code);
    if ( matchItem ){ resolve(matchItem); }
    else { reject(new Error('标的不存在')); };
} );

var run = async function () {
    var underlyings = await getUnderlyingList();
    var code = underlyings[0].code;
    var underlyingDetail = await getUnderlyingDetail(code);

    console.log('code: %s, detail: %s', code, JSON.stringify(underlyingDetail));
};

run();

// code: ag1706, detail: {"code":"ag1706","name":"白银1706","end_date":"20170630"}