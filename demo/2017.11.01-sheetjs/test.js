var importFile = function (req) {
  var promise = new Promise(function (resolve, reject) {
    var busboyObj = new Busboy({ headers: req.headers });
    var fileStream = {};
    var dataResult = {};
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
      file.on('data', function (data) {
        logging.debug('on....data' + data.length);
        dataResult = data;
      });
      file.on('end', function () {
        logging.debug('on....end' + dataResult.length);
      });
    });
    req.busboy.on('finish', function () {
      console.log('Done parsing form!' + dataResult.length);
      var xlsDataTable = getExcelData(dataResult);
      resolve('success');
    });

  });
  return promise;
};