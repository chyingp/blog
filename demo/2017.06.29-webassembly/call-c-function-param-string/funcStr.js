// $0为字符串"hello"
(function($0) {
    var stack = Runtime.stackSave();
    var str = $0;
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        
        // 分配内存空间，并返回起始地址
        ret = Runtime.stackAlloc(len); 
        
        // 字符串存到内存里
        stringToUTF8(str, ret, len); 
    };
    // $0赋值为内存空间起始地址
    $0 = (ret);
    
    // cfunc为wasm模块实际导出的方法，参数是数值
    var ret = cfunc($0);
    
    if (typeof EmterpreterAsync === 'object') { 
    	assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') 
    }
    Runtime.stackRestore(stack);
    return ret
})

