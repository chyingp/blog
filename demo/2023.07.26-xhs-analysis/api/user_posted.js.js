var request = require('request');

const options = {
  url: 'https://edith.xiaohongshu.com/api/sns/web/v1/user_posted?num=30&cursor=61af40d900000000010081b0&user_id=59783e1650c4b404d88f7fd5',
  headers: {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-b3-traceid": "e8e8b1c460739673",
    "x-s": "XYW_eyJzaWduU3ZuIjoiNTEiLCJzaWduVHlwZSI6IngxIiwiYXBwSWQiOiJ4aHMtcGMtd2ViIiwic2lnblZlcnNpb24iOiIxIiwicGF5bG9hZCI6IjQyNTQ4M2RiNDM3ZDQzY2YzYmJlMmYwN2IzNWYwNTQwNGVlZTI2NjA0ZmIyYzk0ZDI3MzMwNWFjZTI2NWExODU3MWZkN2UzNzBkMTQxODJlODFjMDk0OGZkMTMxMzFhMWM5ZTNiZmRhMWZhYTFlYjkwZDc0YWEzMWI1NGM3MmNkMGQ3NGFhMzFiNTRjNzJjZGFjNDg5YjlkYThjZTVlNDhmNGFmYjlhY2ZjM2VhMjZmZTBiMjY2YTZiNGNjM2NiNWNlZWYzYWQzZDM1MDFhYzlkNjM0M2Y0MzkzYmViNzA3Njg2NzIwYjFkNDliM2NiZTM5MWNhOWVkNWZlNDg5YzNlMDAzMWIzNTQ0MWM4MzlkZjcwZDcyYTVjZTJhYTI5YTNlYTRjNDhhYjJkZjMyYzM4MWEwNjkxOTA1YWYxNTI4YmUxZDA2MDE2MTlmMDFhM2JmMjcwZGE5ODBiMTRhMjUyNjcwOTZhOWJjZGJiYjgyYjAwZWMwMWZjM2ExMTQ2NiJ9",
    "x-s-common": "2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0P1+jhIHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjHUN0r7N0WjNsQh+aHCH0rh+9G9P9c9Gnz0q/+7yfhl49HU4fp18/G9y7DIP7kA+08D8BhhqBqM+/ZIPeZA+AZ7+0rjNsQh+jHCP/GEPeP7+AW7+eHEwsIj2eqjwjQGnp4K8gSt2fbg8oppPMkMank6yLELznSPcFkCGp4D4p8HJo4yLFD9anEd2rSk49S8nrQ7LM4zyLRka0zYarMFGF4+4BcUpfSQyg4kGAQVJfQVnfl0JDEIG0HFyLRkagYQyg4kGF4B+nQownYycFD9ankz2LELL/z+PSQk/Dz+PMkrLgk8PSSCnnMtJrMTng4wPDSC/S484FELLg4wzM8VnSzQPDExc/myJLSEngk3Pbkra/++2DM7/S4BySkLa/QwpFph/FzpPFMgnfTwPSpC/dksyFMLLgYOzrkV/FzByDMryAmOzMk3/pz+2rMCzfY+pFFMnSzwypkTLfY+pMkinpzBJbSxy74yzBPInp4b2DMga/bwzFFA/nMwyFMoL/+wzF8i/gkByLELLfkw2DkxnD4ByDEr8Ap8yfl3npziySkLpflwzBYT/D4BJpSxJBY8PSkx//QnyrMxnfMyprQk/nk8PSSLnfSwzFEx//QwyLEg/flypMSCnp4z2Skr//b+zr8ingkVyFEx//m+PSDI/gk32SSTpfSw2DrA/fkdPDECag48yD83/DzVyLFU/fSyprFM/p4wyrRgpfTwpMkV/Dzd+pSC/fl+zrbC/p4Q2DELL/m+pFFF/gkVyMkxG74yzB+EnpznySkLafY8prDMnpzwJbSLLfkwzBYinnktyMkx/gS82DFF/p4b4FExy7YOprrlnp482rELa/z8JpphnDzmPDMrz/Q+pBlT/LzByrFUafM+yf+7nD4b+LRrcfS+pbQi/nkp2LExG74Opbki/M4tySkoafS8yf4Ennkm4Mkg/g4+pMkx//Qb2rMLL/QwyLiEHjIj2eWjwjQQPAYUaBzdq9k6qB4Q4fpA8b878FSet9RQzLlTcSiM8/+n4MYP8F8LagY/P9Ql4FpUzfpS2BcI8nT1GFbC/L88JdbFyrSiafp/JDMra7pFLDDAa7+8J7QgabmFz7Qjp0mcwp4fanD68p40+fp8qgzELLbILrDA+9p3JpHlLLI3+LSk+d+DJfRAyfRL+gSl4bYlqg48qDQlJFShtUTozBD6qM8FyFShPo+h4g4U+obFyLS3qd4QyaRAy9+0PFSe/B8QPFRSPopFJeHIzbkA/epSzb+t8nkn4AmQynpS2b87/sTc4BRUqgziLbSN8nTTpAzQ2sTkanYULdkn494NLoz8a/+zLBRra9L9qgziagW6qA8n4BRQyLM6anSi8nps+fp/yD4hqf89q9kM4rTUnf4S8f+Uwn4fa9p8GMmSagYN8Lzl4omQzn4SzobF+9R8nflF8rl1agWMqA+l4bQ1GA4Spf8otFS3G74QyLYF+emj/LS9yobFLAYdanSk8dmn4FbQcFYnafuA8p+I8np3LoznagWA8/mxaeFjNsQhwaHCP/HAwePA+/GAPsIj2erIH0iU+ebR",
    "x-t": "1690377874298",
    "cookie": "xhsTrackerId=c9f631d7-aa14-4c11-b157-d3d63317d83e; xhsTrackerId.sig=vcJQLpSqpCp4S7uhMAF_DnqwhSjH53mk2XlJjJBT24o; xsecappid=xhs-pc-web; a1=187f63d6adcq3wjn1wb2vene66ky03zs66ddn8pg550000370761; webId=d033be4c61f80c9081b8c2690e5723ea; gid=yYWiKqfWy8K8yYWiKqfK0KYUfSAqEVIyEDJhfk2dIdKKTf28v8quMI888qW8WKy8KyJ0yKDK; gid.sign=D7/VzvvuxP88aU+JOqXbe/m4X/k=; webBuild=2.17.8; web_session=0400697574d8abf5524de440f4364b889df42a; acw_tc=0f9ecb24362be7f5232f6aaff0b24da8f68c0248c269154e084eb187bd1a9324; websectiga=82e85efc5500b609ac1166aaf086ff8aa4261153a448ef0be5b17417e4512f28; sec_poison_id=961c4f11-94c3-4862-af77-c7d08496c31f",
    "Referer": "https://www.xiaohongshu.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  method: "GET",
  gzip: true
};
 
// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const info = JSON.parse(body);
//     console.log(info.stargazers_count + " Stars");
//     console.log(info.forks_count + " Forks");
//   }
// }
 
request(options, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(info);
  }
});

