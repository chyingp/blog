const XLSX = require('xlsx');

function to_json(workbook) {
  let result = {};
  let sheetName = workbook.SheetNames[0];
  let sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}

var _label_list = [
  {key: 'index', label: '序号'},
  {key: 'option_code', label: '期权代码'},
  {key: 'put_id', label: '委托单号'}
];

function createItems ({labelList = []}) {  
  
  const labelToKeyMap = labelList.reduce((ret, item) => {
    ret[item.label] = item.key;
    return ret;
  }, {});
  
  const workbook = XLSX.readFile('./test.xlsx', {});
  let items = to_json(workbook);

  items = items.map( item => {
    return Object.keys(item).reduce((ret, label) => {
      let key = labelToKeyMap[label];
      ret[ key ] = item[label];
      return ret;
    }, {});
  });
  return items;
}

var items = createItems({labelList: _label_list});
console.log(items);