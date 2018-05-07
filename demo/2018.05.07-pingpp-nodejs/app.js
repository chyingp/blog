const express = require('express');
const path = require('path');
const TimeUtil = require('./time')
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

let order_no = 1; // 初始订单号
const APP_ID = 'app_Pqb9uLabLOyTPuLK'; // TODO 待金龙补充
const API_KEY = 'sk_test_znrPeTmzfnDG8Cmz1OqLK84C';
const CHANNEL = 'upacp_wap'; // 支付渠道，银联网页支付
const CLIENT_IP = '127.0.0.1';
const CURRENCY = 'cny';
const RESULT_URL = `http://127.0.0.1:${PORT}/pay_result`;

// 设置API-KEY
const pingpp = require('pingpp')(API_KEY);
// 设置私钥
pingpp.setPrivateKeyPath(path.join(__dirname, 'certs/RSA_Pri_PKCS1_2048.pem'));

function createCharge ({amount, subject, body}) {

  // 订单号，规则为 年月日时分秒 + 递增数字，比如 20180507101010-1
  let curOrderNo = TimeUtil.getFormattedDateString('%Y%M%D%h%m%s', new Date()) + (order_no++);
  let reqChargeParam = Object.assign({}, {amount, subject, body}, {
    app: { id: APP_ID },
    channel: CHANNEL,
    client_ip: CLIENT_IP,
    currency: CURRENCY,
    order_no: curOrderNo,
    extra: {result_url: RESULT_URL}
  }); 
  
  return new Promise((resolve, reject) => {
    pingpp.charges.create(reqChargeParam, function(err, charge) {
      if (err) {
        reject(err);
      } else {
        resolve(charge);
      }
    });
  });
}

// 视图
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/get_charge', async (req, res) => {
  let { amount, subject, body } = req.query;
  try {
    let charge = await createCharge({ amount, subject, body });
    let ret = {
      ret_code: '0', 
      ret_msg: 'ok',
      data: charge
    };
    res.json(ret);
  } catch (error) {
    let ret = {
      ret_code: '-1',
      ret_msg: error.message,
      data: JSON.stringify(error)
    };
    res.json(ret);
  } 
});

app.post('/pay_result', (req, res) => {
  res.render('pay_result', {
    result: JSON.stringify(req.body)
  });
});

app.listen(PORT);