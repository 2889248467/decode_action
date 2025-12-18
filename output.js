//Thu Dec 18 2025 01:55:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x349a97 = new _0xa356ea("图虫"),
  _0x4efcfe = require("fs");
let _0x5148bb = ["@", "\n"],
  _0x5862ac,
  _0x13da4e,
  _0x41fc2c,
  _0x32607c = [],
  _0x5e8398 = 0,
  _0x80650e = 0,
  _0x112432 = "Tcck",
  _0x234d6f = (_0x349a97.isNode() ? process.env[_0x112432] : _0x349a97.getdata(_0x112432)) || "";
class _0x5d4d2d {
  constructor(_0x51a6c) {
    this.userIndex = ++_0x5e8398;
    this.userName = "账号 [" + this.userIndex + "] ";
    this.ck = _0x51a6c.split("#");
    this.phone = this.ck[0];
    this.password = this.ck[1];
  }
  async ["task"]() {
    this.loadCache();
    await this.checkStatus();
    if (!this.isValid) {
      await this.login();
    }
    if (this.isValid) {
      await this.getJobList();
      if (!this.isSigned) {
        await this.signin();
      } else console.log(this.userName + ",今日已签到，无需签到");
      if (this.canOpenGoldBox) {
        await this.box();
      } else console.log(this.userName + ",当前暂不满足开宝箱条件，跳过开金币宝箱");
      for (let _0x20ed45 = 0; _0x20ed45 < this.other_point_list.length; _0x20ed45++) {
        {
          const _0x1ea8fc = this.other_point_list[_0x20ed45];
          console.log(this.userName + "," + _0x1ea8fc?.["title"] + ":任务数量：" + _0x1ea8fc?.["total"]);
          if (_0x1ea8fc?.["title"] === "每日福利") {
            {
              const _0x21e045 = _0x1ea8fc?.["task_info_list"]?.["map"](_0x452c2b => this.userName + ",任务【" + _0x452c2b?.["text"] + "】每日可执行总次数：" + _0x452c2b?.["day_limit"] + "，已完成次数：" + _0x452c2b?.["day_finish_num"])?.["join"]("\n");
              console.log(this.userName + "," + _0x1ea8fc?.["title"] + "任务列表：\n" + _0x21e045);
              this.doingTaks = _0x1ea8fc?.["task_info_list"];
              this.maxTaskNumber = Math.max(..._0x1ea8fc?.["task_info_list"]?.["map"](_0x2e3b6c => {
                return _0x2e3b6c?.["day_limit"] - _0x2e3b6c?.["day_finish_num"];
              })?.["filter"](_0x5f29ed => _0x5f29ed));
              if (this.maxTaskNumber > 0) {
                await this.feedlist(_0x1ea8fc?.["task_info_list"]);
                const _0x206e2c = _0x1ea8fc?.["task_info_list"]?.["find"](_0x52fe81 => {
                  return _0x52fe81?.["text"] === "分享作品";
                });
                _0x206e2c?.["day_limit"] > _0x206e2c?.["day_finish_num"] ? await this.sharelist(_0x206e2c?.["day_limit"] - _0x206e2c?.["day_finish_num"]) : console.log(this.userName + ",【" + _0x206e2c?.["text"] + "】任务都做完啦");
              } else console.log(this.userName + "," + _0x1ea8fc?.["title"] + ": 任务都做完啦，还做个🔨");
            }
          } else console.log(this.userName + "," + _0x1ea8fc?.["title"] + ": 这破任务自己做，懒得写……");
        }
      }
    }
  }
  async ["login"]() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "accept-encoding": "gzip",
      "Host": "api.tuchong.com",
      "platform": "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "40",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "password=" + this.password + "&account=" + this.phone;
    await _0x5e48d2("post", _0x46c63b("https://api.tuchong.com/accounts/login?language=zh&device_platform=android&os_api=30&_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    this.token = _0x5862ac?.["token"];
    this.token ? (console.log(this.userName + ", 登录成功:" + _0x5862ac.message), this.isValid = true, _0x412019(_0x112432 + "_config", this.phone, JSON.stringify({
      "token": this.token
    }))) : (this.isValid = false, console.log(this.userName + ", 登录失败: " + _0x5862ac?.["message"]));
  }
  async ["signin"]() {
    this.h = {
      "accept": "application/json, text/plain, */*",
      "token": "" + this.token,
      "accept-encoding": "gzip, deflate",
      "Host": "m.tuchong.com",
      "platform": "android",
      "cookie": "token=" + this.token,
      "referer": "https://m.tuchong.com/app-point?no_more=1&no_inset=1",
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await _0x5e48d2("get", _0x46c63b("https://m.tuchong.com/tuchongrest/point/check-in", this.h));
    console.log(this.userName + ", 签到: " + _0x5862ac.message);
  }
  async ["checkStatus"]() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      "token": "" + this.token,
      "accept-encoding": "gzip, deflate",
      "platform": "android",
      "cookie": "token=" + this.token,
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await _0x5e48d2("get", _0x46c63b("https://api.tuchong.com/everphoto/isbind?language=zh&device_platform=android&os_api=33&_rticket=" + this.ts + "&app_name=tuchong", this.h));
    if (_0x5862ac?.["result"] === "SUCCESS") console.log(this.userName + ", 检测账号成功: " + _0x5862ac?.["result"]), this.isValid = true;else {
      console.log(this.userName + ", 检测账号失效: " + _0x5862ac + ",开始重新登录");
      this.isValid = false;
    }
  }
  async ["getJobList"]() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      "token": "" + this.token,
      "accept-encoding": "gzip, deflate",
      "platform": "android",
      "cookie": "token=" + this.token,
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await _0x5e48d2("get", _0x46c63b("https://m.tuchong.com/tuchonggapi/misc/point/v2/status?language=zh&device_platform=android&os_api=33&_rticket=" + this.ts + "&app_name=tuchong", this.h));
    if (_0x5862ac?.["result"] === "SUCCESS") {
      {
        this.balance = _0x5862ac?.["status"]?.["total_money"] / 100;
        console.log(this.userName + ", 查询成功, 当前积分: " + _0x5862ac?.["status"]?.["balance_point"] + ", 当前余额: " + this.balance + ", 开宝箱倒计时: " + _0x5862ac?.["status"]?.["countdown_seconds"]);
        this.isSigned = !_0x5862ac?.["login_point_list"]?.["find"](_0x54a31e => _0x54a31e?.["status"] === 2);
        this.canOpenGoldBox = _0x5862ac?.["status"]?.["gold_box_switch"];
        this.other_point_list = _0x5862ac?.["other_point_list"];
      }
    } else console.log(this.userName + ", 查询失败:" + _0x5862ac);
  }
  async ["box"]() {
    this.h = {
      "accept": "application/json, text/plain, */*",
      "token": "" + this.token,
      "accept-encoding": "gzip, deflate",
      "Host": "m.tuchong.com",
      "platform": "android",
      "cookie": "token=" + this.token,
      "referer": "https://m.tuchong.com/app-point?no_more=1&no_inset=1",
      "content-type": "application/x-www-form-urlencoded",
      "x-requested-with": "com.ss.android.tuchong",
      "user-agent": "Mozilla/5.0 (Linux; Android 11; M2011K2C Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.185 Mobile Safari/537.36 Tuchong/7.39.1(android)"
    };
    await _0x5e48d2("get", _0x46c63b("https://m.tuchong.com/tuchonggapi/reward/point/box", this.h));
    console.log(this.userName + ":开宝箱:" + _0x5862ac.result);
  }
  async ["feedlist"](_0x1fdf05) {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "accept-encoding": "gzip",
      "Host": "tuchong.com",
      "platform": "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "0",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    await _0x5e48d2("get", _0x46c63b("https://tuchong.com/gapi/feed/app?language=zh&device_platform=android&os_api=30&_rticket=" + this.ts + "&app_name=tuchong", this.h));
    console.log(this.userName + ", 获取Feed列表获取成功");
    const _0x9a6d30 = _0x5862ac.feedList;
    let _0x1a8276 = true,
      _0x3ef2dd = true,
      _0x4fc21a = true;
    for (let _0xbef672 = 0; _0xbef672 < _0x9a6d30.length; _0xbef672++) {
      {
        this.feedid = _0x9a6d30[_0xbef672].data_id;
        if (_0x3ef2dd) {
          const _0x104c15 = _0x1fdf05?.["find"](_0x58f1bf => {
            return _0x58f1bf?.["text"] === "给作品点赞";
          });
          if (_0x104c15?.["day_limit"] > _0x104c15?.["day_finish_num"]) await this.likePost(), _0x104c15.day_finish_num++;else {
            console.log(this.userName + ",【" + _0x104c15?.["text"] + "】任务都做完啦");
            _0x3ef2dd = false;
          }
        }
        if (_0x4fc21a) {
          {
            const _0x378291 = _0x1fdf05?.["find"](_0x28caa1 => {
              return _0x28caa1?.["text"] === "给作品评论";
            });
            _0x378291?.["day_limit"] && (_0x378291?.["day_limit"] > _0x378291?.["day_finish_num"] ? (await this.commentPost(), _0x378291.day_finish_num++) : (console.log(this.userName + ",【" + _0x378291?.["text"] + "】任务都做完啦"), _0x4fc21a = false));
          }
        }
        if (_0x1a8276 === true) {
          {
            const _0x5768ae = _0x1fdf05?.["find"](_0x58608e => {
                return _0x58608e?.["text"] === "关注摄影师";
              }),
              _0x585ca6 = _0x9a6d30?.["filter"](_0x301f44 => !_0x301f44?.["entry"]?.["is_favorite"]);
            if (_0x5768ae?.["day_limit"] > _0x5768ae?.["day_finish_num"]) {
              {
                if (_0x585ca6?.["length"] <= _0xbef672 + 1) console.log(this.userName + ", 当前摄影师都已经关注过啦，但仍然尝试关注……"), await this.followUser("29044458"), _0x1a8276 = false;else {
                  const _0x373486 = _0x585ca6[_0xbef672]?.["entry"]?.["author_id"];
                  if (_0x373486) {
                    await this.followUser(_0x373486);
                    _0x5768ae.day_finish_num++;
                  } else console.log(this.userName + ", 未找到可关注的作者，但仍然尝试关注……"), await this.followUser("29044458"), _0x1a8276 = false;
                }
              }
            } else console.log(this.userName + ",【" + _0x5768ae?.["text"] + "】任务都做完啦"), _0x1a8276 = false;
          }
        }
      }
    }
  }
  async ["likePost"]() {
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "token": "" + this.token,
      "accept-encoding": "gzip",
      "Host": "tuchong.com",
      "platform": "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "17",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "post_id=" + this.feedid;
    await _0x5e48d2("put", _0x46c63b("https://tuchong.com/gapi/interactive/favorite?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.userName + ":" + _0x5862ac.message);
  }
  async ["commentPost"]() {
    this.t = "大佬们，求个赞😘";
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "token": "" + this.token,
      "accept-encoding": "gzip",
      "Host": "api.tuchong.com",
      "platform": "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "89",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "parent_note_id=0&content=" + this.t + "&reply_to_note_id=0";
    await _0x5e48d2("post", _0x46c63b("https://api.tuchong.com/3/posts/" + this.feedid + "/comments?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.userName + ":评论:" + _0x5862ac.result);
  }
  async ["followUser"](_0x49b37f) {
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "token": "" + this.token,
      "accept-encoding": "gzip",
      "Host": "tuchong.com",
      "platform": "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "16",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "site_id=" + _0x49b37f;
    await _0x5e48d2("put", _0x46c63b("https://tuchong.com/gapi/interactive/follow?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.userName + ", " + _0x5862ac.message);
  }
  async ["sharelist"](_0x5b919e) {
    this.ts = Math.round(new Date().getTime()).toString();
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "accept-encoding": "gzip",
      "Host": "tuchong.com",
      "platform": "android",
      "host-name": "tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    await _0x5e48d2("get", _0x46c63b("https://tuchong.com/gapi/feed/app/video?_rticket=" + this.ts + "&app_name=tuchong", this.h));
    const _0x346352 = _0x5862ac.feedList;
    console.log(this.userName + ", 获取视频列表成功:" + _0x346352?.["length"] + ", 待分享视频次数:" + _0x5b919e);
    for (let _0x3057fb = 1; _0x3057fb < Math.min(_0x5b919e, _0x346352.length) + 1; _0x3057fb++) {
      const _0x507ef5 = _0x346352[_0x3057fb];
      this.shareid = _0x507ef5.data_id;
      this.auid = _0x507ef5.entry.author_id;
      console.log(this.userName + ":第【" + _0x3057fb + "】次开始分享,其id:" + this.shareid);
      await this.share();
    }
  }
  async ["share"]() {
    this.h = {
      "version": "7391",
      "channel": "xiaomi",
      "token": "" + this.token,
      "accept-encoding": "gzip",
      "Host": "api.tuchong.com",
      "platform": "android",
      "host-name": "api.tuchong.com",
      "content-type": "application/x-www-form-urlencoded",
      "content-length": "89",
      "user-agent": "okhttp/3.12.2 com.ss.android.tuchong (Tuchong: 7391 7.39.1) (Android: 11 30)"
    };
    this.data = "share_id=" + this.shareid + "&content_type=video&author_id=" + this.auid + "&platform=WechatFriend";
    await _0x5e48d2("post", _0x46c63b("https://api.tuchong.com/share/recall?_rticket=" + this.ts + "&app_name=tuchong", this.h, this.data));
    console.log(this.userName + ":分享:" + _0x5862ac.result);
  }
  ["loadCache"]() {
    let _0x4285f0 = _0x24a855(_0x112432 + "_config", this.phone);
    if (_0x4285f0) {
      _0x4285f0 = JSON.parse(_0x4285f0);
      console.log("账号[" + this.userIndex + "]从缓存读取成功 😄 ，手机号为：" + this.phone);
      this.token = _0x4285f0?.["token"];
      return;
    }
  }
}
function _0x24a855(_0x58682a, _0x3b6bff) {
  try {
    {
      const _0x54f4cf = _0x4efcfe.readFileSync(_0x58682a + ".json", "utf8"),
        _0x10ff34 = JSON.parse(_0x54f4cf);
      return _0x10ff34[_0x3b6bff];
    }
  } catch (_0x31766b) {
    {
      if (_0x31766b.code === "ENOENT") {
        return undefined;
      } else {
        console.error("读取文件时发生错误：", _0x31766b);
      }
    }
  }
}
function _0x412019(_0x59517b, _0x11b728, _0x49b640) {
  let _0x197c8f = {},
    _0x9e61d7 = {};
  try {
    _0x197c8f = _0x4efcfe.readFileSync(_0x59517b + ".json", "utf8");
    _0x9e61d7 = JSON.parse(_0x197c8f);
  } catch (_0x45eec9) {}
  _0x9e61d7[_0x11b728] = _0x49b640;
  const _0x7b35aa = JSON.stringify(_0x9e61d7);
  try {
    _0x4efcfe.writeFileSync(_0x59517b + ".json", _0x7b35aa);
  } catch (_0x37c8dc) {
    if (_0x37c8dc.code === "ENOENT") _0x4efcfe.writeFileSync(_0x59517b + ".json", _0x7b35aa);else {
      console.error("保存文件时发生错误：", _0x37c8dc);
    }
  }
}
!(async () => {
  if (!(await _0x2207b2())) return;
  for (let _0x299969 of _0x32607c) await _0x299969.task();
})().catch(_0x4441a2 => console.log(_0x4441a2)).finally(() => _0x349a97.done());
function _0x2df588(_0x2fe8dc, _0x5a4ef6) {
  return parseInt(Math.random() * (_0x5a4ef6 - _0x2fe8dc + 1) + _0x2fe8dc, 10);
}
async function _0x2207b2() {
  if (_0x234d6f) {
    let _0x325456 = _0x5148bb[0];
    for (let _0x21a7fc of _0x5148bb) if (_0x234d6f.indexOf(_0x21a7fc) > -1) {
      _0x325456 = _0x21a7fc;
      break;
    }
    for (let _0x378bf7 of _0x234d6f.split(_0x325456)) _0x378bf7 && _0x32607c.push(new _0x5d4d2d(_0x378bf7));
    _0x80650e = _0x32607c.length;
  } else console.log("【幻生提示】未找到任何账号，请检查是否变量名有误！");
  console.log("【幻生提示】找到 " + _0x80650e + "个账号");
  return true;
}
function _0x46c63b(_0x1c5976, _0x3078bf, _0x41ba31 = "") {
  _0x1c5976.replace("//", "/").split("/")[1];
  let _0x10e832 = {
    "url": _0x1c5976,
    "headers": _0x3078bf,
    "timeout": 12000
  };
  _0x41ba31 && (_0x10e832.body = _0x41ba31, _0x10e832.headers["Content-Length"] = _0x41ba31?.["length"] || 0);
  return _0x10e832;
}
async function _0x5e48d2(_0x53de62, _0x4c8671) {
  _0x5862ac = null;
  _0x13da4e = null;
  _0x41fc2c = null;
  return new Promise(_0x582e9c => {
    _0x349a97.send(_0x53de62, _0x4c8671, async (_0x38fcd1, _0x374dbe, _0x29a56a) => {
      try {
        {
          if (!(_0x13da4e = _0x374dbe, _0x41fc2c = _0x29a56a, _0x38fcd1)) {
            {
              if (_0x29a56a.body) {
                {
                  if ("object" == typeof _0x29a56a.body) _0x5862ac = _0x29a56a.body;else try {
                    _0x5862ac = JSON.parse(_0x29a56a.body);
                  } catch (_0x32c37f) {
                    _0x5862ac = _0x29a56a.body;
                  }
                }
              }
            }
          }
        }
      } catch (_0x563afa) {
        console.log(_0x563afa);
      } finally {
        _0x582e9c();
      }
    });
  });
}
function _0xa356ea(_0x20b804, _0x3956a7) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x1103c1, _0x393de0) {
      this.name = _0x1103c1;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x393de0);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x3a7deb) {
      let _0xa14210 = this.getval(_0x3a7deb);
      if (/^@/.test(_0x3a7deb)) {
        let [, _0x2644a9, _0x3a35c9] = /^@(.*?)\.(.*?)$/.exec(_0x3a7deb),
          _0x10e245 = _0x2644a9 ? this.getval(_0x2644a9) : "";
        if (_0x10e245) try {
          let _0xa34c0 = JSON.parse(_0x10e245);
          _0xa14210 = _0xa34c0 ? this.lodash_get(_0xa34c0, _0x3a35c9, "") : _0xa14210;
        } catch (_0x279dd7) {
          _0xa14210 = "";
        }
      }
      return _0xa14210;
    }
    ["setdata"](_0x4bd2e2, _0x57cf75) {
      {
        let _0x518af6 = false;
        if (/^@/.test(_0x57cf75)) {
          {
            let [, _0x53a04f, _0x33b5db] = /^@(.*?)\.(.*?)$/.exec(_0x57cf75),
              _0x300aab = this.getval(_0x53a04f);
            try {
              let _0x65e38a = JSON.parse(_0x53a04f ? "null" === _0x300aab ? null : _0x300aab || "{}" : "{}");
              this.lodash_set(_0x65e38a, _0x33b5db, _0x4bd2e2);
              _0x518af6 = this.setval(JSON.stringify(_0x65e38a), _0x53a04f);
            } catch (_0x55d464) {
              let _0x1459d0 = {};
              this.lodash_set(_0x1459d0, _0x33b5db, _0x4bd2e2);
              _0x518af6 = this.setval(JSON.stringify(_0x1459d0), _0x53a04f);
            }
          }
        } else {
          _0x518af6 = this.setval(_0x4bd2e2, _0x57cf75);
        }
        return _0x518af6;
      }
    }
    ["getval"](_0x1cd3a1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1cd3a1) : this.isQuanX() ? $prefs.valueForKey(_0x1cd3a1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1cd3a1]) : this.data && this.data[_0x1cd3a1] || null;
    }
    ["setval"](_0x5e6d39, _0x1fbb29) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5e6d39, _0x1fbb29) : this.isQuanX() ? $prefs.setValueForKey(_0x5e6d39, _0x1fbb29) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1fbb29] = _0x5e6d39, this.writedata(), true) : this.data && this.data[_0x1fbb29] || null;
    }
    ["send"](_0x354725, _0xee7eea, _0x11a34c = () => {}) {
      if ("get" != _0x354725 && "post" != _0x354725 && "put" != _0x354725 && "delete" != _0x354725) {
        console.log("无效的http方法：" + _0x354725);
        return;
      }
      if ("get" == _0x354725 && _0xee7eea.headers ? (delete _0xee7eea.headers["Content-Type"], delete _0xee7eea.headers["Content-Length"]) : _0xee7eea.body && _0xee7eea.headers && (_0xee7eea.headers["Content-Type"] || (_0xee7eea.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        {
          this.isSurge() && this.isNeedRewrite && (_0xee7eea.headers = _0xee7eea.headers || {}, Object.assign(_0xee7eea.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          let _0x159cb7 = {
            "method": _0x354725,
            "url": _0xee7eea.url,
            "headers": _0xee7eea.headers,
            "timeout": _0xee7eea.timeout,
            "data": _0xee7eea.body
          };
          "get" == _0x354725 && delete _0x159cb7.data;
          $axios(_0x159cb7).then(_0x149d5e => {
            let {
              status: _0x201422,
              request: _0x302f01,
              headers: _0x43a1e3,
              data: _0x49a89c
            } = _0x149d5e;
            _0x11a34c(null, _0x302f01, {
              "statusCode": _0x201422,
              "headers": _0x43a1e3,
              "body": _0x49a89c
            });
          }).catch(_0x21a888 => console.log(_0x21a888));
        }
      } else {
        if (this.isQuanX()) _0xee7eea.method = _0x354725.toUpperCase(), this.isNeedRewrite && (_0xee7eea.opts = _0xee7eea.opts || {}, Object.assign(_0xee7eea.opts, {
          "hints": false
        })), $task.fetch(_0xee7eea).then(_0x5a0e46 => {
          let {
            statusCode: _0x4aed7f,
            request: _0x58eb25,
            headers: _0x2dd926,
            body: _0x59c120
          } = _0x5a0e46;
          _0x11a34c(null, _0x58eb25, {
            "statusCode": _0x4aed7f,
            "headers": _0x2dd926,
            "body": _0x59c120
          });
        }, _0x1f4ee7 => _0x11a34c(_0x1f4ee7));else {
          {
            if (this.isNode()) {
              this.got = this.got ? this.got : require("got");
              let {
                url: _0x5ed050,
                ..._0x444854
              } = _0xee7eea;
              this.instance = this.got.extend({
                "followRedirect": false
              });
              this.instance[_0x354725](_0x5ed050, _0x444854).then(_0x1edb77 => {
                let {
                  statusCode: _0x4474bb,
                  request: _0x1e940f,
                  headers: _0x5c4be2,
                  body: _0x4f89f8
                } = _0x1edb77;
                _0x11a34c(null, _0x1e940f, {
                  "statusCode": _0x4474bb,
                  "headers": _0x5c4be2,
                  "body": _0x4f89f8
                });
              }, _0xae68f => {
                {
                  let {
                    message: _0x4d4b0f,
                    response: _0x19be00
                  } = _0xae68f;
                  _0x11a34c(_0x4d4b0f, _0x19be00, _0x19be00 && _0x19be00.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](_0x171989) {
      let _0x43e131 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        "S": new Date().getMilliseconds()
      };
      for (let _0x1817ef in /(y+)/.test(_0x171989) && (_0x171989 = _0x171989.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x43e131) RegExp("(" + _0x1817ef + ")").test(_0x171989) && (_0x171989 = _0x171989.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x43e131[_0x1817ef] : ("00" + _0x43e131[_0x1817ef]).substr(("" + _0x43e131[_0x1817ef]).length)));
      return _0x171989;
    }
    async ["showmsg"]() {
      if (!this.notifyStr) {
        return;
      }
      let _0x295982 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x349a97.isNode()) {
        {
          var _0x12d762 = require("./sendNotify");
          console.log("\n============== 推送 ==============");
          await _0x12d762.sendNotify(this.name, _0x295982);
        }
      } else this.msg(_0x295982);
    }
    ["logAndNotify"](_0x5c931b) {
      console.log(_0x5c931b);
      this.notifyStr += _0x5c931b;
      this.notifyStr += "\n";
    }
    ["msg"](_0x33a57b = t, _0x4964f8 = "", _0x9c5239 = "", _0x4dbc1d) {
      let _0x3a8ce5 = _0x2c6005 => {
        if (!_0x2c6005) return _0x2c6005;
        if ("string" == typeof _0x2c6005) return this.isLoon() ? _0x2c6005 : this.isQuanX() ? {
          "open-url": _0x2c6005
        } : this.isSurge() ? {
          "url": _0x2c6005
        } : undefined;
        if ("object" == typeof _0x2c6005) {
          {
            if (this.isLoon()) return {
              "openUrl": _0x2c6005.openUrl || _0x2c6005.url || _0x2c6005["open-url"],
              "mediaUrl": _0x2c6005.mediaUrl || _0x2c6005["media-url"]
            };
            if (this.isQuanX()) return {
              "open-url": _0x2c6005["open-url"] || _0x2c6005.url || _0x2c6005.openUrl,
              "media-url": _0x2c6005["media-url"] || _0x2c6005.mediaUrl
            };
            if (this.isSurge()) return {
              "url": _0x2c6005.url || _0x2c6005.openUrl || _0x2c6005["open-url"]
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x33a57b, _0x4964f8, _0x9c5239, _0x3a8ce5(_0x4dbc1d)) : this.isQuanX() && $notify(_0x33a57b, _0x4964f8, _0x9c5239, _0x3a8ce5(_0x4dbc1d)));
      let _0x195769 = ["", "============== 系统通知 =============="];
      _0x195769.push(_0x33a57b);
      _0x4964f8 && _0x195769.push(_0x4964f8);
      _0x9c5239 && _0x195769.push(_0x9c5239);
      console.log(_0x195769.join("\n"));
    }
    ["getMin"](_0x1c6c96, _0x2d4288) {
      return _0x1c6c96 < _0x2d4288 ? _0x1c6c96 : _0x2d4288;
    }
    ["getMax"](_0x2fad47, _0x40e540) {
      return _0x2fad47 < _0x40e540 ? _0x40e540 : _0x2fad47;
    }
    ["padStr"](_0xc76546, _0x7fcbb2, _0x929f3c = "0") {
      {
        let _0x5bc07d = String(_0xc76546),
          _0x1bd5e5 = _0x7fcbb2 > _0x5bc07d.length ? _0x7fcbb2 - _0x5bc07d.length : 0,
          _0x3718c1 = "";
        for (let _0x42f953 = 0; _0x42f953 < _0x1bd5e5; _0x42f953++) {
          _0x3718c1 += _0x929f3c;
        }
        return _0x3718c1 + _0x5bc07d;
      }
    }
    ["json2str"](_0x4fa6ce, _0x249d1f, _0x3bb963 = false) {
      {
        let _0x296d33 = [];
        for (let _0x5e8d33 of Object.keys(_0x4fa6ce).sort()) {
          let _0x5c3145 = _0x4fa6ce[_0x5e8d33];
          _0x5c3145 && _0x3bb963 && (_0x5c3145 = encodeURIComponent(_0x5c3145));
          _0x296d33.push(_0x5e8d33 + "=" + _0x5c3145);
        }
        return _0x296d33.join(_0x249d1f);
      }
    }
    ["str2json"](_0x1aa5b5, _0xc1d4b3 = false) {
      let _0x5b9664 = {};
      for (let _0x16b4db of _0x1aa5b5.split("#")) {
        if (!_0x16b4db) continue;
        let _0x20a9a4 = _0x16b4db.indexOf("=");
        if (-1 == _0x20a9a4) continue;
        let _0xc45d32 = _0x16b4db.substr(0, _0x20a9a4),
          _0x115132 = _0x16b4db.substr(_0x20a9a4 + 1);
        _0xc1d4b3 && (_0x115132 = decodeURIComponent(_0x115132));
        _0x5b9664[_0xc45d32] = _0x115132;
      }
      return _0x5b9664;
    }
    ["randomString"](_0x1ee5b4, _0x717742 = "abcdef0123456789") {
      {
        let _0x27601e = "";
        for (let _0x39dc31 = 0; _0x39dc31 < _0x1ee5b4; _0x39dc31++) {
          _0x27601e += _0x717742.charAt(Math.floor(Math.random() * _0x717742.length));
        }
        return _0x27601e;
      }
    }
    ["randomList"](_0x815206) {
      return _0x815206[Math.floor(Math.random() * _0x815206.length)];
    }
    ["wait"](_0x2101dd) {
      return new Promise(_0x4d8d1f => setTimeout(_0x4d8d1f, _0x2101dd));
    }
    ["done"](_0x51c39e = {}) {
      let _0x42306f = (new Date().getTime() - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x42306f + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x51c39e);
    }
  }(_0x20b804, _0x3956a7);
}