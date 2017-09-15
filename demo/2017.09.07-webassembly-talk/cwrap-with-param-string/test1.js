function test1($0) {
    var stack = Runtime.stackSave();
    var str = $0;
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        // str.length << 2 相当于 str.length * 4
        // (5).toString(2) ==> 00000101
        // 相当于 1 * Math.pow(2,2) + 1 * Math.pow(2, 0)
        // >> 2 后，变成 00010100
        // 相当于 1 * Math.pow(2,2) * 2 * 2 + 1 * Math.pow(2, 0) * 2 * 2
        // 相当于 4 * (1 * Math.pow(2,2) + 1 * Math.pow(2, 0))
        // 相当于 4 * str.length
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
    };
    $0 = (ret);
    var cfunc = function() {
        return Module["asm"]["_test"].apply(null, arguments)
    };
    var ret = cfunc($0);
    if (typeof EmterpreterAsync === 'object') {
        assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap')
    }
    Runtime.stackRestore(stack);
    return ret
}