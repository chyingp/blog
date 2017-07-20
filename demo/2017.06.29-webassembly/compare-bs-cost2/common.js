var query = function (key) {
    var search = location.search.replace('?', '');
    var opt = search.split('&').reduce(function (ret, keyValuePair) {
        var arr = keyValuePair.split('=');
        ret[arr[0]] = decodeURIComponent(arr[1]);
        return ret;
    }, {});
    return opt[key] || '';
};