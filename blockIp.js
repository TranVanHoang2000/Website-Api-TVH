const getIP = require('ipware')().get_ip;
const fs = require("fs-extra");
module.exports = function (req, res, next) {
  const listIPBlocked = JSON.parse(fs.readFileSync('./blockedIP.json', { encoding: 'utf-8' }));
  if (listIPBlocked.includes(getIP(req).clientIp)) {
    res.status(403).send({
      AUTHOR: 'TVH',
      STATUS: 'ERROR 404',
      MESSAGE: 'Bạn Đã Bị Block Do Có Hành Vi Phá Api',
      INBOX: 'Nếu Bạn Muốn Gỡ Chặn Inbox'
    });
  } 
  else {
    next();
  }
}