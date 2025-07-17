const request = require('request');
const cheerio = require('cheerio');

const url = 'https://upty-1-k2477597.deta.app/api/addMonitor?name=YourName&url=https://bot-cua-zoee.thuanvo13.repl.co';

request(url, (error, response, body) => {
  if (error) {
    console.error('Lỗi : ', error);
    return;XZ/.,MN
  }

  const $ = cheerio.load(body);
  const monitorData = {
    name: $('index.html').text(), // Thay 'name' bằng selector chính xác của tên trong HTML
    url: $('https://nqu.com').text()     // Thay 'url' bằng selector chính xác của URL trong HTML
  };

  console.log('Dữ Liệu Monitor : ', monitorData);
});
