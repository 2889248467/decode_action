//Sun Jul 28 2024 16:08:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const domin = 'http://new.ixbk.net';
const pingbifenlei = '';
const pingbibiaoti = '';
const zhanxianbiaoti = '';
const pingbibiaotiplus = '';
const pingbineirong = '';
const zhanxianneirong = '';
const pingbineirongplus = '';
const pingbilouzhu = '';
const zhanxianlouzhu = '';
const pingbilouzhuplus = '';
const pingbitime = "5";
function daysComputed(time) {
  var oldTimeFormat = new Date(time.replace(/-/g, '/'));
  var nowDate = new Date();
  if (nowDate.getTime() - oldTimeFormat.getTime() > 0) {
    var times = nowDate.getTime() - oldTimeFormat.getTime();
    var days = parseInt(times / (60 * 60 * 24 * 1000));
    return days;
  } else {
    return 0;
  }
}
function listfilter(group, pingbifenlei, pingbilouzhu, zhanxianlouzhu, pingbilouzhuplus, pingbibiaoti, zhanxianbiaoti, pingbibiaotiplus, pingbineirong, zhanxianneirong, pingbineirongplus, pingbitime) {
  var louzhubaoliu, biaotibaoliu, neirongbaoliu, louzhupingbi, louzhupingbiplus, biaotipingbi, biaotipingbiplus, neirongpingbi, neirongpingbiplus;
  if (pingbitime && group.louzhuregtime) {
    if (pingbitime.match(new RegExp(/###/), "g")) {
      pingbitimearr = pingbitime.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbitimearr.length; j++) {
        xiaopingbitimearr = pingbitimearr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbitimearr[0], "i")) && xiaopingbitimearr[1] > daysComputed(group.louzhuregtime)) {
          return false;
        }
      }
    } else {
      if (pingbitime > daysComputed(group.louzhuregtime)) {
        return false;
      }
    }
  }
  if (pingbifenlei && group.catename) {
    if (group.catename.match(new RegExp(pingbifenlei, "i"))) {
      return false;
    }
  }
  if (zhanxianlouzhu && group.louzhu) {
    if (zhanxianlouzhu.match(new RegExp(/###/), "g")) {
      zhanxianlouzhuarr = zhanxianlouzhu.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < zhanxianlouzhuarr.length; j++) {
        xiaozhanxianlouzhuarr = zhanxianlouzhuarr[j].split("###");
        if (group.catename.match(new RegExp(xiaozhanxianlouzhuarr[0], "i")) && group.louzhu.match(new RegExp(xiaozhanxianlouzhuarr[1], "i"))) {
          louzhubaoliu = 1;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(zhanxianlouzhu, "i"))) {
        louzhubaoliu = 1;
      }
    }
  }
  if (pingbilouzhu && group.louzhu && louzhubaoliu != 1) {
    if (pingbilouzhu.match(new RegExp(/###/), "g")) {
      pingbilouzhuarr = pingbilouzhu.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbilouzhuarr.length; j++) {
        xiaopingbilouzhuarr = pingbilouzhuarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbilouzhuarr[0], "i")) && group.louzhu.match(new RegExp(xiaopingbilouzhuarr[1], "i"))) {
          louzhupingbi = 1;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(pingbilouzhu, "i"))) {
        louzhupingbi = 1;
      }
    }
  }
  if (pingbilouzhuplus && group.louzhu && louzhupingbi != 1) {
    if (pingbilouzhuplus.match(new RegExp(/###/), "g")) {
      pingbilouzhuplusarr = pingbilouzhuplus.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbilouzhuplusarr.length; j++) {
        xiaopingbilouzhuplusarr = pingbilouzhuplusarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbilouzhuplusarr[0], "i")) && group.louzhu.match(new RegExp(xiaopingbilouzhuplusarr[1], "i"))) {
          louzhupingbiplus = 1;
          louzhubaoliu = 0;
        }
      }
    } else {
      if (group.louzhu.match(new RegExp(pingbilouzhuplus, "i"))) {
        louzhupingbiplus = 1;
        louzhubaoliu = 0;
      }
    }
  }
  if (louzhupingbi == 1 || louzhupingbiplus == 1) {
    return false;
  }
  if (zhanxianbiaoti && group.title) {
    if (zhanxianbiaoti.match(new RegExp(/###/), "g")) {
      zhanxianbiaotiarr = zhanxianbiaoti.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < zhanxianbiaotiarr.length; j++) {
        xiaozhanxianbiaotiarr = zhanxianbiaotiarr[j].split("###");
        if (group.catename.match(new RegExp(xiaozhanxianbiaotiarr[0], "i")) && group.title.match(new RegExp(xiaozhanxianbiaotiarr[1], "i"))) {
          biaotibaoliu = 1;
        }
      }
    } else {
      if (group.title.match(new RegExp(zhanxianbiaoti, "i"))) {
        biaotibaoliu = 1;
      }
    }
  }
  if (pingbibiaoti && group.title && louzhubaoliu != 1 && biaotibaoliu != 1) {
    if (pingbibiaoti.match(new RegExp(/###/), "g")) {
      pingbibiaotiarr = pingbibiaoti.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbibiaotiarr.length; j++) {
        xiaopingbibiaotiarr = pingbibiaotiarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbibiaotiarr[0], "i")) && group.title.match(new RegExp(xiaopingbibiaotiarr[1], "i"))) {
          biaotipingbi = 1;
        }
      }
    } else {
      if (group.title.match(new RegExp(pingbibiaoti, "i"))) {
        biaotipingbi = 1;
      }
    }
  }
  if (pingbibiaotiplus && group.title && louzhubaoliu != 1 && biaotipingbi != 1) {
    if (pingbibiaotiplus.match(new RegExp(/###/), "g")) {
      pingbibiaotiplusarr = pingbibiaotiplus.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbibiaotiplusarr.length; j++) {
        xiaopingbibiaotiplusarr = pingbibiaotiplusarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbibiaotiplusarr[0], "i")) && group.title.match(new RegExp(xiaopingbibiaotiplusarr[1], "i"))) {
          biaotipingbiplus = 1;
          biaotibaoliu = 0;
        }
      }
    } else {
      if (group.title.match(new RegExp(pingbibiaotiplus, "i"))) {
        biaotipingbiplus = 1;
        biaotibaoliu = 0;
      }
    }
  }
  if (biaotipingbi == 1 || biaotipingbiplus == 1) {
    return false;
  }
  if (zhanxianneirong && group.content) {
    if (zhanxianneirong.match(new RegExp(/###/), "g")) {
      zhanxianneirongarr = zhanxianneirong.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < zhanxianneirongarr.length; j++) {
        xiaozhanxianneirongarr = zhanxianneirongarr[j].split("###");
        if (group.catename.match(new RegExp(xiaozhanxianneirongarr[0], "i")) && group.content.match(new RegExp(xiaozhanxianneirongarr[1], "i"))) {
          neirongbaoliu = 1;
        }
      }
    } else {
      if (group.content.match(new RegExp(zhanxianneirong, "i"))) {
        neirongbaoliu = 1;
      }
    }
  }
  if (pingbineirong && group.content && louzhubaoliu != 1 && biaotibaoliu != 1 && neirongbaoliu != 1) {
    if (pingbineirong.match(new RegExp(/###/), "g")) {
      pingbineirongarr = pingbineirong.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbineirongarr.length; j++) {
        xiaopingbineirongarr = pingbineirongarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbineirongarr[0], "i")) && group.content.match(new RegExp(xiaopingbineirongarr[1], "i"))) {
          neirongpingbi = 1;
        }
      }
    } else {
      if (group.content.match(new RegExp(pingbineirong, "i"))) {
        neirongpingbi = 1;
      }
    }
  }
  if (pingbineirongplus && group.content && louzhubaoliu != 1 && biaotibaoliu != 1 && neirongpingbi != 1) {
    if (pingbineirongplus.match(new RegExp(/###/), "g")) {
      pingbineirongplusarr = pingbineirongplus.split(/<br>|\n\n|\r\n/);
      for (j = 0; j < pingbineirongplusarr.length; j++) {
        xiaopingbineirongplusarr = pingbineirongplusarr[j].split("###");
        if (group.catename.match(new RegExp(xiaopingbineirongplusarr[0], "i")) && group.content.match(new RegExp(xiaopingbineirongplusarr[1], "i"))) {
          neirongpingbiplus = 1;
          neirongbaoliu = 0;
        }
      }
    } else {
      if (group.content.match(new RegExp(pingbineirongplus, "i"))) {
        neirongpingbiplus = 1;
        neirongbaoliu = 0;
      }
    }
  }
  if (neirongpingbi == 1 || neirongpingbiplus == 1) {
    return false;
  }
  return true;
}
function isMessageInFile(message, filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }
  const data = fs.readFileSync(filePath, 'utf8');
  if (!data) {
    return false;
  }
  const messages = JSON.parse(data);
  return messages.some(existingMessage => existingMessage.id === message.id);
}
function appendMessageToFile(message, filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]');
  }
  const data = fs.readFileSync(filePath, 'utf8');
  const messages = data ? JSON.parse(data) : [];
  messages.push(message);
  if (messages.length > 30) {
    messages.splice(0, messages.length - 30);
  }
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
}
const notify = require('./xianbao_send');
const fs = require('fs');
const https = require('https');
const request = require('request');
const newUrl = domin + '/plus/json/push.json';
console.debug('开始获取线报酷数据...');
new Promise((resolve, reject) => {
  request(newUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      resolve(JSON.parse(body));
    } else {
      resolve([]);
    }
  });
}).then(xbkdata => {
  let items = [];
  xbkdata.forEach(item => {
    if (!isMessageInFile(item, 'xbk.json')) {
      appendMessageToFile(item, 'xbk.json');
      if (listfilter(item, pingbifenlei, pingbilouzhu, zhanxianlouzhu, pingbilouzhuplus, pingbibiaoti, zhanxianbiaoti, pingbibiaotiplus, pingbineirong, zhanxianneirong, pingbineirongplus, pingbitime)) {
        items.push(item);
      } else {}
    }
  });
  let zkt_gjc = '';
  let filteredItems = [];
  items.forEach(item => {
    if (listfilter(item, "", "", "", "", "(.*)", zkt_gjc ? zkt_gjc : "(.*)", "", "", "", "", "")) {
      filteredItems.push(item);
    } else {}
  });
  items = filteredItems;
  let hebingdata = "";
  items.forEach(item => {
    notify.pushMeNotify(item.title + "【" + item.catename + "】", domin + item.url);
    console.log("-----------------------------");
    console.log("发现到新数据：" + item.title + "【" + item.catename + "】" + domin + item.url);
    if (hebingdata) {
      hebingdata += "\n\n";
    }
    hebingdata += item.title + "【" + item.catename + "】" + domin + item.url;
  });
  console.log("\n\n\n\n*******************************************");
  console.log("*******************************************");
  console.debug('获取到' + items.length + "条新数据，本次任务结束");
}).catch(error => {
  console.error('获取和解析线报酷时发生错误:', error);
});