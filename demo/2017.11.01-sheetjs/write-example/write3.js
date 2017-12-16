var XLSX = require('xlsx');

var _label_list = [
  {key: 'index', label: '序号'},
  {key: 'option_code', label: '期权代码'},
  {key: 'put_id', label: '委托单号'}
];

var _items = [
  {
      "index": "1",
      "option_code": "CU1710-0914C50530",
      "put_id": "150155819800000000"
  },
  {
      "index": "2",
      "option_code": "CU1710-0914C50530",
      "put_id": "150155819800000001"
  }
];

/**
 * 将 labelList 转成指定的格式
 * @param {Array} labelList 比如 [ {key: 'index', label: '序号'}, {key: 'option_code', label: '期权代码'} ]
 * @returns {Object} 比如 { A1: { v: '序号' }, B1: { v: '期权代码' }, C1: { v: '委托单号' } }
 */
function getHeader (labelList) {
  let ret = {};
  labelList.forEach( (labelItem, index) => {
    let position = String.fromCharCode(65 + index) + '1';
    let label = labelItem.label;
    ret[position] = { v: label };
  });
  return ret;
}

/**
 * 将 dataItems 转成指定的格式
 * @param {Array} dataItems 比如 [ {"index":"1","option_code":"CU1710-0914C50530"}, {"index":"2","option_code":"CU1710-0914C50530"} ]
 * @param {Array} labelList 比如 [ {key: 'index', label: '序号'}, {key: 'option_code', label: '期权代码'} ]
 * @returns {Object} 比如 { A2: { v: '1' }, B2: { v: 'CU1710-0914C50530' }, A3: { v: '2' }, B3: { v: 'CU1710-0914C50530' } }
 */
function getData (dataItems, labelList) {
  let ret = {};
  dataItems.forEach( (dataItem, dataIndex) => {
    let subPosition = dataIndex + 2;    

    labelList.forEach( (labelItem, labelIndex) => {
      let key = labelItem.key;
      let value = dataItem[key];
      let aplanat = String.fromCharCode(65 + labelIndex); // 字母，比如A、B
      let position = aplanat + subPosition;
      ret[position] = { v: value };
    });
  });
  return ret;
}

// console.log( getHeader(_label_list) );
// console.log( getData(_items, _label_list) );

function createConf ({labelList = [], dataItems = [], sheetName = 'default'}) {
  var headers = getHeader(labelList);
  var datas = getData(dataItems, labelList);
  var output = Object.assign({}, headers, datas);
  var outputPos = Object.keys(output);
  var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
  var wb = {
    SheetNames: [sheetName],
    Sheets: {
        [sheetName]: Object.assign({}, output, { '!ref': ref })
    }
  };
  return wb;
}

function createExportStream ({labelList = [], dataItems = [], sheetName = 'default', outputFileName = 'output.xlsx'}) {
  var wbConf = createConf({labelList, dataItems, sheetName});
  var wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };
  var stream = XLSX.write(wbConf, wopts);
  console.log(stream);
}

createExportStream({
  labelList: _label_list,
  dataItems: _items,
  sheetName: 'test-sheet',
  outputFileName: 'test-output.xlsx'
});