
// const cookieStr = 'xhsTrackerId=c9f631d7-aa14-4c11-b157-d3d63317d83e; xhsTrackerId.sig=vcJQLpSqpCp4S7uhMAF_DnqwhSjH53mk2XlJjJBT24o; xsecappid=xhs-pc-web; a1=187f63d6adcq3wjn1wb2vene66ky03zs66ddn8pg550000370761; webId=d033be4c61f80c9081b8c2690e5723ea; gid=yYWiKqfWy8K8yYWiKqfK0KYUfSAqEVIyEDJhfk2dIdKKTf28v8quMI888qW8WKy8KyJ0yKDK; gid.sign=D7/VzvvuxP88aU+JOqXbe/m4X/k=; webBuild=2.17.8; web_session=0400697574d8abf5524de440f4364b889df42a; acw_tc=039cb1efb1a092a8795115a4a4e82ed3f55bd0bfcbfb244ecab5626b62c281ef; websectiga=10f9a40ba454a07755a08f27ef8194c53637eba4551cf9751c009d9afb564467; sec_poison_id=b18c8fe2-9cee-4bcf-a489-2afd8341f4da';

// // [['key', 'value'], ['key', 'value'], ...]
// const cookieList = cookieStr.split('; ').map(str => {
//   return str.split('=')
// });


// const cookies = cookieList.map((item, index) => {
//   return {
//     "domain": ".guozh.net",
//         "expirationDate": 1674570808,
//         "hostOnly": false,
//         "httpOnly": false,
//         "name": "__gads",
//         "path": "/",
//         "sameSite": "unspecified",
//         "secure": false,
//         "session": false,
//         "storeId": "0",
//         "value": "ID=bab08:S=ALNI_MbDbdXk1ZMUuekE9Jnow",
//         "id": 1
//   };
// });

const puppeteer = require('puppeteer');

// 使用chrome扩展导出cookie https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg 
// 参考：https://guozh.net/puppeteer-cookie-login/
const cookies = require('./cookies');




(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--start-maximized'],
  });
  const page = await browser.newPage()

  // 设置cookie
  for(let i = 0; i < cookies.length; i++){
    await page.setCookie(cookies[i]);
  }

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.xiaohongshu.com/user/profile/59783e1650c4b404d88f7fd5?m_source=pinpai');

  page.on('response', async function (response) {
        const url = response.url();
        const json = await response.json();

        console.log(`url is: ${url}, json is: ${json}`);
    }
  );

  // await browser.close()
})();