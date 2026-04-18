//Sat Apr 18 2026 03:37:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const qs = require("querystring"),
  axios = require("axios"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent"),
  KS_SIGN_API_URL = process.env.ksjs_api || "你还没自定义接口你跑个蛋啊！";
console.log("💡 签名API地址设置为: " + KS_SIGN_API_URL);
function generateRandomInteractionMessage() {
  const _0x3e16a7 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x3e16a7[Math.floor(Math.random() * _0x3e16a7.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getEnvNumber(_0x591f87, _0x3f218a) {
  const _0x3f74cc = parseInt(process.env[_0x591f87], 10);
  return isNaN(_0x3f74cc) ? _0x3f218a : _0x3f74cc;
}
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 1),
  KSROUNDS = getEnvNumber("KSROUNDS", 5),
  KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 500000),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 1),
  KSFOLLOW_COUNT = getEnvNumber("KSFOLLOW_COUNT", 1),
  KSSEARCHFOLLOW_COUNT = getEnvNumber("KSSEARCHFOLLOW_COUNT", 1),
  KSLOOK_COUNT = getEnvNumber("KSLOOK_COUNT", 5),
  KSSEARCH_COUNT = getEnvNumber("KSSEARCH_COUNT", 5);
function getTasksToExecute() {
  const _0x4aaff9 = process.env.Task;
  if (!_0x4aaff9) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look, search)"), ["food", "box", "look", "search"];
  const _0x1e8990 = _0x4aaff9.split(",").map(_0x3aeff4 => _0x3aeff4.trim().toLowerCase()).filter(Boolean),
    _0x1d43d3 = ["food", "box", "look", "search"],
    _0x573718 = _0x1e8990.filter(_0x26c43c => _0x1d43d3.includes(_0x26c43c));
  if (_0x573718.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look, search)"), ["food", "box", "look", "search"];
  const _0x996fee = _0x573718.filter(_0x19be77 => _0x19be77 !== "look" && _0x19be77 !== "search");
  _0x573718.includes("search") && _0x996fee.push("search");
  _0x573718.includes("look") && _0x996fee.push("look");
  console.log("从Task环境变量中解析到要执行的任务: " + _0x996fee.join(", "));
  return _0x996fee;
}
function getAccountConfigsFromEnv() {
  const _0x3cf63d = [],
    _0xe7ebe1 = new Set();
  if (process.env.ksjsck) {
    {
      const _0x135c03 = process.env.ksjsck,
        _0x2ff147 = _0x135c03.split("&").map(_0x4be7b6 => _0x4be7b6.trim()).filter(Boolean);
      _0x3cf63d.push(..._0x2ff147);
    }
  }
  for (let _0x3ddfb7 = 1; _0x3ddfb7 <= 666; _0x3ddfb7++) {
    {
      const _0x4b650f = "ksjsck" + _0x3ddfb7;
      if (process.env[_0x4b650f]) {
        {
          const _0x24cbf0 = process.env[_0x4b650f],
            _0x410204 = _0x24cbf0.split("&").map(_0x5a5017 => _0x5a5017.trim()).filter(Boolean);
          _0x3cf63d.push(..._0x410204);
        }
      }
    }
  }
  const _0x47e8f6 = [];
  for (const _0x4fbf07 of _0x3cf63d) {
    if (!_0xe7ebe1.has(_0x4fbf07)) {
      _0xe7ebe1.add(_0x4fbf07);
      _0x47e8f6.push(_0x4fbf07);
    }
  }
  console.log("从ksjsck及ksjsck1到ksjsck666环境变量中解析到 " + _0x47e8f6.length + " 个唯一配置");
  return _0x47e8f6;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊极速版 ⭐                                ");
console.log("🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("🏆 代理购买2.1r一月· http://www.gzsk5.com/#/register?invitation=hnking2&shareid=516                  ");
console.log("🏆 接口工具脚本获取ck获取· https://pan.quark.cn/s/41d4dae92896                  ");
console.log("🏆 云手机· https://cloud.ace-bot.cn/#/inviteReg?invite=501891                  ");
console.log("================================================================================");
console.log("🎉 系统初始化完成，快手至尊金币极速版版启动成功！🎉");
console.log("================================================================================");
console.log("您可以根据需求设置以下环境变量来自定义任务行为：");
console.log("----------------------------------------------------------------");
console.log("账号/任务控制 (必填/常用):");
console.log("  - ksjsck/ksjsckX: 账号信息 (cookie#salt#proxy) - 必填项");
console.log("  - Task: 指定任务 (如 food,box,look,search)");
console.log("  - KSROUNDS: 总执行轮数 (默认 5)");
console.log("----------------------------------------------------------------");
console.log("频率/追加次数 (已支持自定义):");
console.log("  - KSLOOK_COUNT: 每轮 look (主任务) 次数 (默认 5)");
console.log("  - KSFOLLOW_COUNT: 每次 look 成功后 follow (追加) 次数 (默认 1)");
console.log("  - KSSEARCH_COUNT: 每轮 search (主任务) 次数 (默认 5)");
console.log("  - KSSEARCHFOLLOW_COUNT: 每次 search 成功后 search_follow (追加) 次数 (默认 100)");
console.log("----------------------------------------------------------------");
console.log("风控/限制设置:");
console.log("  - KSCOIN_LIMIT: 金币上限 (超过停止, 默认 150000)");
console.log("  - KSLOW_REWARD_LIMIT: 连续低奖励停止次数 (默认 1)");
console.log("  - MAX_CONCURRENCY: 最大并发账号数 (默认 3)");
console.log("  - ksjs_api: 签名服务 API 地址");
console.log("================================================================");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("🎯 配置参数：轮数=" + KSROUNDS + ", look次数/轮=" + KSLOOK_COUNT + ", search次数/轮=" + KSSEARCH_COUNT + ", follow次数/look=" + KSFOLLOW_COUNT + ", search_follow次数/search=" + KSSEARCHFOLLOW_COUNT + ", 金币上限=" + KSCOIN_LIMIT + ", 低奖励阈值=" + KSLOW_REWARD_THRESHOLD + ", 连续低奖励上限=" + KSLOW_REWARD_LIMIT);
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
function generateKuaishouDid() {
  try {
    {
      const _0x2d41cd = _0x46c5b7 => {
          const _0x3de80e = "0123456789abcdef";
          let _0x3a7c45 = "";
          for (let _0x32577a = 0; _0x32577a < _0x46c5b7; _0x32577a++) {
            _0x3a7c45 += _0x3de80e.charAt(Math.floor(Math.random() * _0x3de80e.length));
          }
          return _0x3a7c45;
        },
        _0x4ded57 = _0x2d41cd(16),
        _0x4c89a6 = "ANDROID_" + _0x4ded57;
      return _0x4c89a6;
    }
  } catch (_0x25f1c2) {
    const _0x351058 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x351058.substring(0, 16);
  }
}
async function sendRequest(_0x56ec24, _0x1fd91a = null, _0x492bed = "Unknown Request") {
  const _0x4200fc = {
    ..._0x56ec24
  };
  let _0x2d84b0 = null;
  if (_0x1fd91a) try {
    _0x2d84b0 = new SocksProxyAgent(_0x1fd91a);
  } catch (_0x49fd5b) {
    console.log("[错误] " + _0x492bed + " 代理URL无效(" + _0x49fd5b.message + ")，尝试直连模式");
  }
  try {
    const _0x1b9abe = {
        "method": _0x4200fc.method || "GET",
        "url": _0x4200fc.url,
        "headers": _0x4200fc.headers || {},
        "data": _0x4200fc.body || _0x4200fc.form,
        "timeout": _0x4200fc.timeout || 30000,
        ...(_0x2d84b0 && {
          "httpAgent": _0x2d84b0,
          "httpsAgent": _0x2d84b0
        })
      },
      _0x4a3d5c = await axios(_0x1b9abe);
    return {
      "response": _0x4a3d5c,
      "body": _0x4a3d5c.data
    };
  } catch (_0x58edfa) {
    if (_0x58edfa.response) {
      return {
        "response": _0x58edfa.response,
        "body": null
      };
    } else {
      if (_0x58edfa.request) {} else {}
    }
    return {
      "response": null,
      "body": null
    };
  }
}
function isValidIP(_0x4610e5) {
  if (!_0x4610e5 || typeof _0x4610e5 !== "string") return false;
  if (_0x4610e5.includes("<html>") || _0x4610e5.includes("503 Service Temporarily Unavailable") || _0x4610e5.includes("502 Bad Gateway") || _0x4610e5.includes("504 Gateway Timeout")) return false;
  const _0x11e1ed = /^(\d{1,3}\.){3}\d{1,3}$/,
    _0x5bc648 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_0x11e1ed.test(_0x4610e5)) {
    {
      const _0x1d3b52 = _0x4610e5.split(".");
      for (const _0x2682a5 of _0x1d3b52) {
        const _0x3f97f9 = parseInt(_0x2682a5, 10);
        if (_0x3f97f9 < 0 || _0x3f97f9 > 255 || isNaN(_0x3f97f9)) return false;
      }
      return true;
    }
  }
  return _0x5bc648.test(_0x4610e5);
}
async function testProxyConnectivity(_0x1369f7, _0x3b0bb1 = "代理连通性检测", _0x3fc244 = 3) {
  if (!_0x1369f7) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  let _0x4e0cb0 = null;
  const _0x43bd77 = ["https://api.ip.sb/ip", "https://ifconfig.me/ip", "https://icanhazip.com", "https://checkip.amazonaws.com", "https://api.myip.com"];
  for (let _0x322351 = 1; _0x322351 <= _0x3fc244; _0x322351++) {
    {
      console.log("🔌 " + _0x3b0bb1 + " 测试代理连接中... (尝试 " + _0x322351 + "/" + _0x3fc244 + ")");
      for (const _0x13b1c4 of _0x43bd77) {
        try {
          {
            const {
              response: _0x3021bf,
              body: _0x193b49
            } = await sendRequest({
              "method": "GET",
              "url": _0x13b1c4,
              "headers": {
                "User-Agent": "ProxyTester/1.0"
              },
              "timeout": 15000
            }, _0x1369f7, _0x3b0bb1 + " → " + new URL(_0x13b1c4).hostname);
            if (typeof _0x193b49 === "string" && (_0x193b49.includes("<html>") || _0x193b49.includes("503 Service Temporarily Unavailable") || _0x193b49.includes("502 Bad Gateway") || _0x193b49.includes("504 Gateway Timeout"))) {
              continue;
            }
            if (_0x193b49) {
              {
                let _0x4fbdf9 = null;
                if (_0x13b1c4.includes("httpbin.org") && _0x193b49.origin) _0x4fbdf9 = _0x193b49.origin;else {
                  if (_0x13b1c4.includes("ipify.org") && _0x193b49.ip) {
                    _0x4fbdf9 = _0x193b49.ip;
                  } else {
                    if (_0x13b1c4.includes("jsonip.com") && _0x193b49.ip) {
                      _0x4fbdf9 = _0x193b49.ip;
                    } else {
                      if (_0x13b1c4.includes("my-ip.io") && _0x193b49.ip) _0x4fbdf9 = _0x193b49.ip;else typeof _0x193b49 === "string" && !_0x193b49.includes("<") && (_0x4fbdf9 = _0x193b49.trim());
                    }
                  }
                }
                if (_0x4fbdf9 && isValidIP(_0x4fbdf9)) {
                  console.log("✅ " + _0x3b0bb1 + " 代理测试成功，出口IP: " + _0x4fbdf9);
                  return {
                    "ok": true,
                    "msg": "✅ SOCKS5代理正常，出口IP: " + _0x4fbdf9,
                    "ip": _0x4fbdf9
                  };
                }
              }
            }
          }
        } catch (_0x32402b) {
          _0x4e0cb0 = _0x32402b;
          continue;
        }
        await new Promise(_0x525af7 => setTimeout(_0x525af7, 500));
      }
      if (_0x322351 < _0x3fc244) {
        {
          const _0x129d67 = _0x322351 * 2000;
          console.log("⏱️ " + _0x3b0bb1 + " 所有端点测试失败，" + _0x129d67 / 1000 + "秒后重试...");
          await new Promise(_0x23553e => setTimeout(_0x23553e, _0x129d67));
        }
      }
    }
  }
  try {
    new URL(_0x1369f7);
  } catch (_0x245b1d) {
    return {
      "ok": false,
      "msg": "❌ 代理URL格式错误: " + _0x245b1d.message,
      "ip": null
    };
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败: " + (_0x4e0cb0?.["message"] || "所有测试端点均无法访问"),
    "ip": null
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x490e86, _0x4e4a68, _0x547029 = "?") {
  const _0x1739e4 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x4dcdfe
    } = await sendRequest({
      "method": "GET",
      "url": _0x1739e4,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x490e86,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x4e4a68, "账号[" + _0x547029 + "] 获取基本信息");
  if (_0x4dcdfe && _0x4dcdfe.result === 1 && _0x4dcdfe.data) {
    return {
      "nickname": _0x4dcdfe.data.userData?.["nickname"] || null,
      "totalCoin": _0x4dcdfe.data.totalCoin ?? null,
      "allCash": _0x4dcdfe.data.allCash ?? null
    };
  }
  return null;
}
function centerAlign(_0x3c3c4a, _0x148e8c) {
  _0x3c3c4a = String(_0x3c3c4a);
  if (_0x3c3c4a.length >= _0x148e8c) {
    return _0x3c3c4a.substring(0, _0x148e8c);
  }
  const _0x195ed7 = _0x148e8c - _0x3c3c4a.length,
    _0x3c9ea3 = Math.floor(_0x195ed7 / 2),
    _0x3d5cb1 = _0x195ed7 - _0x3c9ea3;
  return " ".repeat(_0x3c9ea3) + _0x3c3c4a + " ".repeat(_0x3d5cb1);
}
class KuaishouAdTask {
  constructor({
    index: _0x30bbf6,
    salt: _0x3414ba,
    cookie: _0x5c7458,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look", "search"],
    remark = ""
  }) {
    this.index = _0x30bbf6;
    this.salt = _0x3414ba;
    this.cookie = _0x5c7458;
    this.nickname = nickname || remark || "账号" + _0x30bbf6;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "pageId": 11101,
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "pageId": 11101,
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "follow": {
        "name": "追加看广告得金币",
        "pageId": 11101,
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 2,
        "taskType": 1
      },
      "search": {
        "name": "搜索任务",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search_follow": {
        "name": "搜索任务追加",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    const _0x1f041e = new Set(this.tasksToExecute);
    _0x1f041e.add("follow");
    _0x1f041e.add("search");
    _0x1f041e.add("search_follow");
    _0x1f041e.forEach(_0x576bcf => {
      {
        if (this.taskConfigs[_0x576bcf]) {
          this.taskStats[_0x576bcf] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          };
        }
      }
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x4d765f => {
      {
        if (this.taskConfigs[_0x4d765f]) {
          this.taskLimitReached[_0x4d765f] = false;
        }
      }
    });
    this.taskLimitReached.follow = false;
    this.taskLimitReached.search = false;
    this.taskLimitReached.search_follow = false;
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x5404dd = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x5404dd && _0x5404dd.totalCoin) {
          {
            const _0x18192a = parseInt(_0x5404dd.totalCoin);
            if (_0x18192a >= 500000) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x18192a + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
          }
        }
        return false;
      }
    } catch (_0x4a334d) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x4a334d.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0xbd8f84 = this.cookie.match(/egid=([^;]+)/),
          _0xaf387b = this.cookie.match(/did=([^;]+)/),
          _0x275460 = this.cookie.match(/userId=([^;]+)/),
          _0x367d06 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x296b65 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0xbd8f84 ? _0xbd8f84[1] : "";
        this.did = _0xaf387b ? _0xaf387b[1] : "";
        this.userId = _0x275460 ? _0x275460[1] : "";
        this.kuaishouApiSt = _0x367d06 ? _0x367d06[1] : "";
        this.appver = _0x296b65 ? _0x296b65[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x5af911) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x5af911.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    const _0x3b0502 = ["box", "look", "follow", "food", "search", "search_follow"];
    _0x3b0502.forEach(_0xb351c4 => {
      const _0x52e2ba = this.taskStats[_0xb351c4],
        _0x13c0d0 = this.taskConfigs[_0xb351c4];
      _0x52e2ba && _0x13c0d0 && console.log("  " + _0x13c0d0.name + ": 成功" + _0x52e2ba.success + "次, 失败" + _0x52e2ba.failed + "次, 总奖励" + _0x52e2ba.totalReward + "金币");
    });
  }
  async ["retryOperation"](_0x3b4d14, _0x231145, _0xea5d41 = 3, _0x3c0093 = 2000) {
    let _0x215956 = 0,
      _0xb18f1c = null;
    while (_0x215956 < _0xea5d41) {
      try {
        {
          const _0x23ee04 = await _0x3b4d14();
          if (_0x23ee04) return _0x23ee04;
          _0xb18f1c = new Error(_0x231145 + " 返回空结果");
        }
      } catch (_0x2cda98) {
        _0xb18f1c = _0x2cda98;
        console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x231145 + " 异常: " + _0x2cda98.message);
      }
      _0x215956++;
      _0x215956 < _0xea5d41 && (console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x231145 + " 失败，重试 " + _0x215956 + "/" + _0xea5d41), await new Promise(_0x375776 => setTimeout(_0x375776, _0x3c0093)));
    }
    return null;
  }
  async ["getAdInfo"](_0x585454) {
    try {
      const _0x5027ca = "/rest/e/reward/mixed/ad",
        _0x2f8b9f = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x41dfaf = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "NEBULA",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        };
      let _0x4980db = "{}";
      if (_0x585454.businessId === 7076) {
        const _0x29af40 = "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
          _0x30f68c = {
            "openH5AdCount": 0,
            "sessionLookedCompletedCount": this.adaddnum,
            "sessionType": _0x585454.requestSceneType === 2 ? "2" : "1",
            "searchKey": "短剧小说",
            "triggerType": "2",
            "disableReportToast": true,
            "businessEnterAction": "7",
            "neoParams": _0x29af40
          };
        _0x4980db = JSON.stringify(_0x30f68c);
      }
      const _0x436086 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": this.did,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x585454.pageId || 11101,
            "subPageId": _0x585454.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": _0x4980db,
            "mediaExtData": "{}"
          }]
        },
        _0x4fe495 = Buffer.from(JSON.stringify(_0x436086)).toString("base64");
      let _0xbebaef = await this.getSign(_0x4fe495);
      if (!_0xbebaef) {
        console.log("❌ 账号[" + this.nickname + "] 获取 encsign 失败，无法获取广告");
        return null;
      }
      _0x2f8b9f.encData = _0xbebaef.encdata;
      _0x2f8b9f.sign = _0xbebaef.sign;
      let _0x420603 = await this.requestSignService({
        "urlpath": _0x5027ca,
        "reqdata": qs.stringify(_0x2f8b9f) + "&" + qs.stringify(_0x41dfaf),
        "api_client_salt": this.salt
      });
      if (!_0x420603) return console.log("❌ 账号[" + this.nickname + "] 获取 nesig 失败，无法获取广告"), null;
      const _0x265001 = {
          ..._0x41dfaf,
          "sig": _0x420603.sig,
          "__NS_sig3": _0x420603.__NS_sig3,
          "__NS_xfalcon": _0x420603.__NS_xfalcon,
          "__NStokensig": _0x420603.__NStokensig
        },
        _0x10e631 = "https://api.e.kuaishou.com" + _0x5027ca + "?" + querystring.stringify(_0x265001),
        {
          response: _0x21f91e,
          body: _0x55aabe
        } = await sendRequest({
          "method": "POST",
          "url": _0x10e631,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x2f8b9f,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
      if (!_0x55aabe) return null;
      if (_0x55aabe.errorMsg === "OK" && _0x55aabe.feeds && _0x55aabe.feeds[0] && _0x55aabe.feeds[0].ad) {
        const _0x1a9852 = _0x55aabe.feeds[0].caption || _0x55aabe.feeds[0].ad?.["caption"] || "";
        _0x1a9852 && console.log("✅ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x1a9852.substring(0, 10) + "...");
        const _0xce9b95 = _0x55aabe.feeds[0].exp_tag || "",
          _0x31a7b9 = _0xce9b95.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x55aabe.feeds[0].ad.creativeId,
          "llsid": _0x31a7b9
        };
      }
      console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告失败: " + (_0x55aabe.errorMsg || JSON.stringify(_0x55aabe).substring(0, 50)) + "...");
      return null;
    } catch (_0x307dce) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x307dce.message);
      return null;
    }
  }
  async ["generateSignature"](_0xd82aa3, _0x4571d8, _0x6b1e39, _0x4b30b4) {
    try {
      {
        const _0x2724ce = JSON.stringify({
            "businessId": _0x4b30b4.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0xd82aa3,
              "extInfo": "",
              "llsid": _0x4571d8,
              "requestSceneType": _0x4b30b4.requestSceneType,
              "taskType": _0x4b30b4.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": _0x4b30b4.pageId,
            "posId": _0x4b30b4.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x4b30b4.subPageId
          }),
          _0x455d8e = "bizStr=" + encodeURIComponent(_0x2724ce) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
          _0x30a6ca = this.queryParams + "&" + _0x455d8e,
          _0x1f4db5 = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "reqdata": _0x30a6ca,
            "api_client_salt": this.salt
          }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
        if (!_0x1f4db5) return null;
        return {
          "sig": _0x1f4db5.sig,
          "sig3": _0x1f4db5.__NS_sig3,
          "sigtoken": _0x1f4db5.__NStokensig,
          "xfalcon": _0x1f4db5.__NS_xfalcon,
          "post": _0x455d8e
        };
      }
    } catch (_0x3555d6) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x3555d6.message);
      return null;
    }
  }
  async ["submitReport"](_0x510195, _0x21625f, _0x47dd38, _0x170864, _0x3e085f, _0x2349ed, _0x5cc254) {
    try {
      {
        const _0x3cf703 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x510195 + "&__NS_sig3=" + _0x21625f + "&__NS_xfalcon=" + _0x170864 + "&__NStokensig=" + _0x47dd38),
          {
            response: _0x18b479,
            body: _0x43bd62
          } = await sendRequest({
            "method": "POST",
            "url": _0x3cf703,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": _0x3e085f,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
        if (!_0x43bd62) {
          return {
            "success": false,
            "reward": 0
          };
        }
        if (_0x43bd62.result === 1) {
          {
            const _0x21be36 = _0x43bd62.data?.["neoAmount"] || 0;
            console.log("💰 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5cc254.name + "获得" + _0x21be36 + "金币奖励！");
            _0x21be36 <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.did = generateKuaishouDid(), console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x21be36 + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
            return {
              "success": true,
              "reward": _0x21be36
            };
          }
        }
        if ([20107, 20108, 1003, 415].includes(_0x43bd62.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5cc254.name + " 已达上限"), this.taskLimitReached[_0x2349ed] = true, {
          "success": false,
          "reward": 0
        };
        if ([500].includes(_0x43bd62.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5cc254.name + " 500错已停止该账号"), this.taskLimitReached[_0x2349ed] = true, {
          "success": false,
          "reward": 0
        };
        console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5cc254.name + " 奖励失败，result=" + _0x43bd62.result + " msg=" + (_0x43bd62.data || ""));
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x53f77b) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x53f77b.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x5cbead) {
    try {
      {
        const {
          response: _0x449d4d,
          body: _0x27bfae
        } = await sendRequest({
          "method": "POST",
          "url": KS_SIGN_API_URL + "/encsign",
          "body": JSON.stringify({
            "data": _0x5cbead
          }),
          "headers": {
            "Content-Type": "application/json"
          }
        });
        if (_0x27bfae && _0x27bfae.status) return _0x27bfae.data;
        console.log("❌ 账号[" + this.nickname + "] encsign 签名服务失败: " + (_0x27bfae?.["message"] || "无响应"));
        return null;
      }
    } catch (_0x12e03e) {
      console.log("❌ 账号[" + this.nickname + "] encsign 签名请求异常: " + _0x12e03e.message);
      return null;
    }
  }
  async ["requestSignService"](_0x15c908, _0x416a2c) {
    let _0x3a1a6b = {},
      _0x195700 = {
        "path": _0x15c908.urlpath,
        "data": _0x15c908.reqdata,
        "salt": _0x15c908.api_client_salt
      };
    const {
      response: _0x1502f1,
      body: _0x16bd8c
    } = await sendRequest({
      "method": "POST",
      "url": KS_SIGN_API_URL + "/nssig",
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      "body": JSON.stringify(_0x195700),
      "timeout": 15000
    }, null, _0x416a2c + "（签名服务）");
    if (_0x16bd8c && _0x16bd8c.data) {
      {
        let _0x225b00 = _0x16bd8c.data.nssig3,
          _0x382e9b = _0x16bd8c.data.nstokensig,
          _0x479d97 = _0x16bd8c.data.nssig4;
        Object.assign(_0x3a1a6b, {
          "__NS_sig3": _0x225b00,
          "__NStokensig": _0x382e9b,
          "sig": _0x16bd8c.data.sig,
          "__NS_xfalcon": _0x479d97
        });
        return _0x3a1a6b;
      }
    }
    console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名服务失败: " + (_0x16bd8c?.["error"] || _0x16bd8c?.["message"] || "无响应"));
    return null;
  }
  async ["executeTask"](_0x1a0633) {
    const _0x43cdad = this.taskConfigs[_0x1a0633];
    if (!_0x43cdad) return false;
    if (this.taskLimitReached[_0x1a0633]) return false;
    try {
      const _0x180595 = await this.retryOperation(() => this.getAdInfo(_0x43cdad), "获取" + _0x43cdad.name + "信息", 3);
      if (!_0x180595) {
        this.taskStats[_0x1a0633].failed++;
        return false;
      }
      const _0x1923ce = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ==>" + _0x43cdad.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x1923ce / 1000) + " 秒");
      await new Promise(_0x24fa76 => setTimeout(_0x24fa76, _0x1923ce));
      const _0x5c7a9f = await this.retryOperation(() => this.generateSignature(_0x180595.cid, _0x180595.llsid, _0x1a0633, _0x43cdad), "生成" + _0x43cdad.name + "签名", 3);
      if (!_0x5c7a9f) {
        this.taskStats[_0x1a0633].failed++;
        return false;
      }
      const _0x32d380 = await this.retryOperation(() => this.submitReport(_0x5c7a9f.sig, _0x5c7a9f.sig3, _0x5c7a9f.sigtoken, _0x5c7a9f.xfalcon, _0x5c7a9f.post, _0x1a0633, _0x43cdad), "提交" + _0x43cdad.name + "报告", 3);
      if (_0x32d380?.["success"]) {
        this.taskStats[_0x1a0633].success++;
        this.taskStats[_0x1a0633].totalReward += _0x32d380.reward || 0;
        return true;
      }
      this.taskStats[_0x1a0633].failed++;
      return false;
    } catch (_0x14a987) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0x1a0633 + "): " + _0x14a987.message);
      this.taskStats[_0x1a0633].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x36c555 = this.tasksToExecute.includes("look"),
      _0x273644 = this.tasksToExecute.includes("food"),
      _0x4e2640 = this.tasksToExecute.includes("box"),
      _0x23bfb5 = this.tasksToExecute.includes("search"),
      _0x424d47 = this.tasksToExecute.filter(_0x260db1 => _0x260db1 !== "look" && _0x260db1 !== "search");
    for (let _0x5e57f6 = 0; _0x5e57f6 < KSROUNDS; _0x5e57f6++) {
      if (this.stopAllTasks) break;
      console.log("\n============================== 🚀 账号[" + this.nickname + "] 第" + (_0x5e57f6 + 1) + "/" + KSROUNDS + "轮开始 ==============================");
      if (_0x36c555) {
        const _0x5c02d6 = this.taskConfigs.look,
          _0x52c1aa = this.taskConfigs.follow;
        console.log("🎬 开始执行 " + _0x5c02d6.name + " (+" + _0x52c1aa.name + ")，本轮共 " + KSLOOK_COUNT + " 次");
        for (let _0x1f24cc = 0; _0x1f24cc < KSLOOK_COUNT; _0x1f24cc++) {
          if (this.stopAllTasks || this.taskLimitReached.look) break;
          console.log("\n--- 账号[" + this.nickname + "] " + _0x5c02d6.name + " 第 " + (_0x1f24cc + 1) + "/" + KSLOOK_COUNT + " 次执行 ---");
          const _0x314cf3 = await this.executeTask("look");
          if (_0x314cf3 && !this.stopAllTasks) {
            const _0x38d781 = Math.floor(Math.random() * 5000) + 5000;
            console.log("⏱ 账号[" + this.nickname + "] look 任务成功，随机等待 " + Math.round(_0x38d781 / 1000) + " 秒后执行 " + _0x52c1aa.name);
            await new Promise(_0x442cd0 => setTimeout(_0x442cd0, _0x38d781));
            const _0xdf1564 = KSFOLLOW_COUNT;
            for (let _0x215089 = 0; _0x215089 < _0xdf1564; _0x215089++) {
              if (this.stopAllTasks || this.taskLimitReached.follow) break;
              console.log("\n--- 账号[" + this.nickname + "] " + _0x52c1aa.name + " (第 " + (_0x215089 + 1) + "/" + _0xdf1564 + " 次) 紧随 look 任务执行 ---");
              await this.executeTask("follow");
            }
          }
          if (_0x1f24cc < KSLOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
            const _0x1609f8 = _0x1f24cc < KSLOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look;
            if (_0x1609f8) {
              {
                const _0x340a84 = Math.floor(Math.random() * 5000) + 5000;
                console.log("⏱ 账号[" + this.nickname + "] " + _0x5c02d6.name + " 任务间隔，随机等待 " + Math.round(_0x340a84 / 1000) + " 秒");
                await new Promise(_0x1b48b5 => setTimeout(_0x1b48b5, _0x340a84));
              }
            }
          }
        }
        if (!this.stopAllTasks && (_0x273644 || _0x4e2640 || _0x23bfb5)) {
          const _0x47a918 = Math.floor(Math.random() * 15000) + 15000;
          console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x47a918 / 1000) + " 秒切换...");
          await new Promise(_0x171c63 => setTimeout(_0x171c63, _0x47a918));
        }
      }
      if (_0x23bfb5) {
        {
          const _0x466877 = this.taskConfigs.search,
            _0x4e4cea = this.taskConfigs.search_follow;
          console.log("\n🎬 开始执行 " + _0x466877.name + " (+" + _0x4e4cea.name + ")，本轮共 " + KSSEARCH_COUNT + " 次");
          for (let _0x30f76b = 0; _0x30f76b < KSSEARCH_COUNT; _0x30f76b++) {
            if (this.stopAllTasks || this.taskLimitReached.search) break;
            console.log("\n--- 账号[" + this.nickname + "] " + _0x466877.name + " 第 " + (_0x30f76b + 1) + "/" + KSSEARCH_COUNT + " 次执行 ---");
            const _0x3d90ea = await this.executeTask("search");
            if (_0x3d90ea && !this.stopAllTasks) {
              const _0x32d2df = Math.floor(Math.random() * 5000) + 5000;
              console.log("⏱ 账号[" + this.nickname + "] search 任务成功，随机等待 " + Math.round(_0x32d2df / 1000) + " 秒后执行 " + _0x4e4cea.name);
              await new Promise(_0x5ca11e => setTimeout(_0x5ca11e, _0x32d2df));
              const _0x55a31b = KSSEARCHFOLLOW_COUNT;
              for (let _0x81774a = 0; _0x81774a < _0x55a31b; _0x81774a++) {
                if (this.stopAllTasks || this.taskLimitReached.search_follow) break;
                console.log("\n--- 账号[" + this.nickname + "] " + _0x4e4cea.name + " (第 " + (_0x81774a + 1) + "/" + _0x55a31b + " 次) 紧随 search 任务执行 ---");
                this.adaddnum++;
                await this.executeTask("search_follow");
                this.adaddnum = 0;
              }
            }
            if (_0x30f76b < KSSEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
              {
                const _0x28f56f = _0x30f76b < KSSEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search;
                if (_0x28f56f) {
                  const _0x125b84 = Math.floor(Math.random() * 5000) + 5000;
                  console.log("⏱ 账号[" + this.nickname + "] " + _0x466877.name + " 任务间隔，随机等待 " + Math.round(_0x125b84 / 1000) + " 秒");
                  await new Promise(_0x9aaffa => setTimeout(_0x9aaffa, _0x125b84));
                }
              }
            }
          }
          if (!this.stopAllTasks && (_0x273644 || _0x4e2640)) {
            const _0x19b7d6 = Math.floor(Math.random() * 15000) + 15000;
            console.log("\n🔄 账号[" + this.nickname + "] 任务组完成，等待 " + Math.round(_0x19b7d6 / 1000) + " 秒切换...");
            await new Promise(_0x49dd48 => setTimeout(_0x49dd48, _0x19b7d6));
          }
        }
      }
      for (const _0x1769a3 of _0x424d47) {
        if (this.stopAllTasks) break;
        if (_0x1769a3 === "look" || _0x1769a3 === "search") continue;
        const _0x260c65 = this.taskConfigs[_0x1769a3];
        if (this.taskLimitReached[_0x1769a3]) {
          {
            console.log("⚠️ 账号[" + this.nickname + "] " + _0x260c65.name + " 已达上限，本轮跳过");
            continue;
          }
        }
        console.log("\n🎬 开始执行 " + _0x260c65.name + "，本轮共 1 次");
        await this.executeTask(_0x1769a3);
        if (!this.stopAllTasks) {
          {
            const _0x3f38ba = Math.floor(Math.random() * 5000) + 5000;
            console.log("⏱ 账号[" + this.nickname + "] " + _0x260c65.name + " 任务间隔，随机等待 " + Math.round(_0x3f38ba / 1000) + " 秒");
            await new Promise(_0x405967 => setTimeout(_0x405967, _0x3f38ba));
          }
        }
      }
      if (_0x5e57f6 < KSROUNDS - 1 && !this.stopAllTasks) {
        {
          const _0x17981f = Math.floor(Math.random() * 10000) + 60000;
          console.log("\n============================== ⏱ 账号[" + this.nickname + "] 第" + (_0x5e57f6 + 1) + "轮完成，等待 " + Math.round(_0x17981f / 1000) + " 秒进入下一轮 ==============================");
          await new Promise(_0x22d780 => setTimeout(_0x22d780, _0x17981f));
        }
      }
    }
    return {};
  }
}
function parseAccountConfig(_0x3d8564) {
  const _0x2c3b66 = String(_0x3d8564 || "").trim().split("#");
  if (_0x2c3b66.length < 2) return null;
  let _0x2ff98d = "",
    _0xdb4f0e = "",
    _0x3ab542 = "",
    _0x5c8087 = null;
  if (_0x2c3b66.length === 2) _0xdb4f0e = _0x2c3b66[0], _0x3ab542 = _0x2c3b66[1];else {
    if (_0x2c3b66.length === 3) {
      if (/socks5:\/\//i.test(_0x2c3b66[2])) _0xdb4f0e = _0x2c3b66[0], _0x3ab542 = _0x2c3b66[1], _0x5c8087 = _0x2c3b66[2];else {
        _0x2ff98d = _0x2c3b66[0];
        _0xdb4f0e = _0x2c3b66[1];
        _0x3ab542 = _0x2c3b66[2];
      }
    } else _0x2c3b66.length >= 4 && (_0x2ff98d = _0x2c3b66[0], _0xdb4f0e = _0x2c3b66[1], _0x3ab542 = _0x2c3b66.slice(2, _0x2c3b66.length - 1).join("#"), _0x5c8087 = _0x2c3b66[_0x2c3b66.length - 1]);
  }
  if (_0x5c8087) {
    if (!/^socks5:\/\//i.test(_0x5c8087)) _0x5c8087 = null;else try {
      new URL(_0x5c8087);
    } catch (_0x5dde03) {
      console.log("❌ 代理URL格式错误: " + _0x5c8087);
      _0x5c8087 = null;
    }
  }
  return {
    "remark": _0x2ff98d || "",
    "salt": _0x3ab542,
    "cookie": _0xdb4f0e,
    "proxyUrl": _0x5c8087
  };
}
function loadAccountsFromEnv() {
  const _0x5e793a = getAccountConfigsFromEnv(),
    _0xf7f826 = [];
  for (const _0x768ca5 of _0x5e793a) {
    const _0x2bd9b6 = parseAccountConfig(_0x768ca5);
    _0x2bd9b6 ? _0xf7f826.push(_0x2bd9b6) : console.log("账号格式错误：" + _0x768ca5);
  }
  _0xf7f826.forEach((_0x100c67, _0x4cd7c2) => {
    _0x100c67.index = _0x4cd7c2 + 1;
  });
  return _0xf7f826;
}
async function concurrentExecute(_0x19ef13, _0x176f72, _0x225452) {
  const _0x1c70a8 = new Array(_0x19ef13.length);
  let _0x34d578 = 0;
  async function _0x198491() {
    while (true) {
      {
        const _0x21a126 = _0x34d578++;
        if (_0x21a126 >= _0x19ef13.length) {
          return;
        }
        const _0x16bd2c = _0x19ef13[_0x21a126];
        try {
          _0x1c70a8[_0x21a126] = await _0x225452(_0x16bd2c, _0x21a126);
        } catch (_0x3c99e3) {
          console.log("并发执行异常（index=" + (_0x21a126 + 1) + "）：" + _0x3c99e3.message);
          _0x1c70a8[_0x21a126] = null;
        }
      }
    }
  }
  const _0x2cf79f = Array.from({
    "length": Math.min(_0x176f72, _0x19ef13.length)
  }, _0x198491);
  await Promise.all(_0x2cf79f);
  return _0x1c70a8;
}
async function processAccount(_0x1e1e8c) {
  if (_0x1e1e8c.proxyUrl) {
    const _0x73396 = await testProxyConnectivity(_0x1e1e8c.proxyUrl, "账号[" + _0x1e1e8c.index + "]" + (_0x1e1e8c.remark ? "（" + _0x1e1e8c.remark + "）" : ""));
    console.log("  - " + (_0x73396.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x73396.msg);
    if (_0x73396.ok && _0x73396.ip && _0x73396.ip !== "localhost") {
      if (!isValidIP(_0x73396.ip)) console.log("⚠️ 账号[" + _0x1e1e8c.index + "] 检测到无效IP格式，跳过重复检查");else {
        if (usedProxies.has(_0x73396.ip)) {
          console.log("\n⚠️ 存在相同代理IP（" + _0x73396.ip + "），请立即检查！");
          process.exit(1);
        } else {
          usedProxies.add(_0x73396.ip);
        }
      }
    } else {
      if (!_0x73396.ok) return console.log("❌ 账号[" + _0x1e1e8c.index + "] 代理测试失败，跳过该账号"), {
        "index": _0x1e1e8c.index,
        "remark": _0x1e1e8c.remark || "无备注",
        "nickname": "账号" + _0x1e1e8c.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": "代理测试失败: " + _0x73396.msg,
        "skipped": true
      };
    }
  } else console.log("账号[" + _0x1e1e8c.index + "]" + (_0x1e1e8c.remark ? "（" + _0x1e1e8c.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x1e1e8c.index + "]" + (_0x1e1e8c.remark ? "（" + _0x1e1e8c.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x4d3472 = await getAccountBasicInfo(_0x1e1e8c.cookie, _0x1e1e8c.proxyUrl, _0x1e1e8c.index),
    _0x3bdc22 = _0x4d3472?.["nickname"] || "账号" + _0x1e1e8c.index;
  if (_0x4d3472) {
    const _0x3e2e3e = _0x4d3472.totalCoin != null ? _0x4d3472.totalCoin : "未知",
      _0x5ab579 = _0x4d3472.allCash != null ? _0x4d3472.allCash : "未知";
    console.log("账号[" + _0x3bdc22 + "] ✅ 登录成功，💰 当前金币: " + _0x3e2e3e + "，💸 当前余额: " + _0x5ab579);
  } else console.log("账号[" + _0x3bdc22 + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x87003d = new KuaishouAdTask({
    ..._0x1e1e8c,
    "nickname": _0x3bdc22,
    "tasksToExecute": tasksToExecute
  });
  if (_0x4d3472) {
    await _0x87003d.checkCoinLimit();
    if (_0x87003d.coinExceeded) {
      console.log("账号[" + _0x87003d.nickname + "]" + (_0x1e1e8c.remark ? "（" + _0x1e1e8c.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
      const _0x121ef8 = await getAccountBasicInfo(_0x1e1e8c.cookie, _0x1e1e8c.proxyUrl, _0x1e1e8c.index),
        _0x243faf = _0x4d3472?.["totalCoin"] || 0,
        _0x2a6152 = _0x121ef8?.["totalCoin"] || 0,
        _0x16e623 = _0x2a6152 - _0x243faf,
        _0x14f41f = _0x4d3472?.["allCash"] || 0,
        _0x1c5f2b = _0x121ef8?.["allCash"] || 0,
        _0x4b6d95 = _0x1c5f2b - _0x14f41f;
      return {
        "index": _0x1e1e8c.index,
        "remark": _0x1e1e8c.remark || "无备注",
        "nickname": _0x3bdc22,
        "initialCoin": _0x243faf,
        "finalCoin": _0x2a6152,
        "coinChange": _0x16e623,
        "initialCash": _0x14f41f,
        "finalCash": _0x1c5f2b,
        "cashChange": _0x4b6d95,
        "stats": _0x87003d.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  console.log("账号[" + _0x87003d.nickname + "]" + (_0x1e1e8c.remark ? "（" + _0x1e1e8c.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x87003d.executeAllTasksByPriority();
  const _0x4f95bb = await getAccountBasicInfo(_0x1e1e8c.cookie, _0x1e1e8c.proxyUrl, _0x1e1e8c.index),
    _0x45d380 = _0x4d3472?.["totalCoin"] || 0,
    _0x2d8c52 = _0x4f95bb?.["totalCoin"] || 0,
    _0x29d304 = _0x2d8c52 - _0x45d380,
    _0x3c1117 = _0x4d3472?.["allCash"] || 0,
    _0x14ad97 = _0x4f95bb?.["allCash"] || 0,
    _0x588a50 = _0x14ad97 - _0x3c1117;
  _0x87003d.printTaskStats();
  return {
    "index": _0x1e1e8c.index,
    "remark": _0x1e1e8c.remark || "无备注",
    "nickname": _0x3bdc22,
    "initialCoin": _0x45d380,
    "finalCoin": _0x2d8c52,
    "coinChange": _0x29d304,
    "initialCash": _0x3c1117,
    "finalCash": _0x14ad97,
    "cashChange": _0x588a50,
    "stats": _0x87003d.getTaskStats(),
    "coinLimitExceeded": _0x87003d.coinExceeded,
    "infoFetchFailed": !_0x4d3472
  };
}
function parseAccountConfig(_0x35c99f) {
  const _0x4f5fa5 = String(_0x35c99f || "").trim().split("#");
  if (_0x4f5fa5.length < 2) return null;
  let _0x3cd015 = "",
    _0x191651 = "",
    _0x152c30 = "",
    _0x2f714e = null;
  if (_0x4f5fa5.length === 2) {
    _0x191651 = _0x4f5fa5[0];
    _0x152c30 = _0x4f5fa5[1];
  } else {
    if (_0x4f5fa5.length === 3) /socks5:\/\//i.test(_0x4f5fa5[2]) ? (_0x191651 = _0x4f5fa5[0], _0x152c30 = _0x4f5fa5[1], _0x2f714e = _0x4f5fa5[2]) : (_0x3cd015 = _0x4f5fa5[0], _0x191651 = _0x4f5fa5[1], _0x152c30 = _0x4f5fa5[2]);else {
      if (_0x4f5fa5.length >= 4) {
        _0x3cd015 = _0x4f5fa5[0];
        _0x191651 = _0x4f5fa5[1];
        _0x152c30 = _0x4f5fa5.slice(2, _0x4f5fa5.length - 1).join("#");
        _0x2f714e = _0x4f5fa5[_0x4f5fa5.length - 1];
      }
    }
  }
  if (_0x2f714e) {
    {
      if (_0x2f714e.includes("|")) {
        {
          console.log("开始解析代理格式: " + _0x2f714e);
          const _0x3ea6c8 = _0x2f714e.split("|");
          if (_0x3ea6c8.length >= 2) {
            {
              const [_0x24592c, _0x44b46a, _0x42916a, _0x4bc535] = _0x3ea6c8;
              _0x2f714e = "socks5://" + _0x42916a + ":" + _0x4bc535 + "@" + _0x24592c + ":" + _0x44b46a;
            }
          }
        }
      } else {
        if (!/^socks5:\/\//i.test(_0x2f714e)) _0x2f714e = null;else try {
          new URL(_0x2f714e);
        } catch (_0x15e75d) {
          console.log("❌ 代理URL格式错误: " + _0x2f714e);
          _0x2f714e = null;
        }
      }
    }
  }
  return {
    "remark": _0x3cd015 || "",
    "salt": _0x152c30,
    "cookie": _0x191651,
    "proxyUrl": _0x2f714e
  };
}
function loadAccountsFromEnv() {
  const _0x2f5bce = getAccountConfigsFromEnv(),
    _0x254514 = [];
  for (const _0x4e9de7 of _0x2f5bce) {
    {
      const _0x5a1ae7 = parseAccountConfig(_0x4e9de7);
      _0x5a1ae7 ? _0x254514.push(_0x5a1ae7) : console.log("账号格式错误：" + _0x4e9de7);
    }
  }
  _0x254514.forEach((_0x36b2c4, _0x2d36ce) => {
    _0x36b2c4.index = _0x2d36ce + 1;
  });
  return _0x254514;
}
async function concurrentExecute(_0x10fd62, _0xcc31d3, _0x53db29) {
  const _0x44a305 = new Array(_0x10fd62.length);
  let _0x5e64e4 = 0;
  async function _0x17e196() {
    while (true) {
      const _0x4e176e = _0x5e64e4++;
      if (_0x4e176e >= _0x10fd62.length) return;
      const _0x222e78 = _0x10fd62[_0x4e176e];
      try {
        _0x44a305[_0x4e176e] = await _0x53db29(_0x222e78, _0x4e176e);
      } catch (_0x30c0ca) {
        console.log("并发执行异常（index=" + (_0x4e176e + 1) + "）：" + _0x30c0ca.message);
        _0x44a305[_0x4e176e] = null;
      }
    }
  }
  const _0x21f9b9 = Array.from({
    "length": Math.min(_0xcc31d3, _0x10fd62.length)
  }, _0x17e196);
  await Promise.all(_0x21f9b9);
  return _0x44a305;
}
async function processAccount(_0x4519c9) {
  if (_0x4519c9.proxyUrl) {
    {
      const _0x462cfa = await testProxyConnectivity(_0x4519c9.proxyUrl, "账号[" + _0x4519c9.index + "]" + (_0x4519c9.remark ? "（" + _0x4519c9.remark + "）" : ""));
      console.log("  - " + (_0x462cfa.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x462cfa.msg);
      if (_0x462cfa.ok && _0x462cfa.ip && _0x462cfa.ip !== "localhost") {
        {
          if (!isValidIP(_0x462cfa.ip)) console.log("⚠️ 账号[" + _0x4519c9.index + "] 检测到无效IP格式，跳过重复检查");else {
            if (usedProxies.has(_0x462cfa.ip)) console.log("\n⚠️ 存在相同代理IP（" + _0x462cfa.ip + "），请立即检查！");else {
              usedProxies.add(_0x462cfa.ip);
            }
          }
        }
      } else {
        if (!_0x462cfa.ok) return console.log("❌ 账号[" + _0x4519c9.index + "] 代理测试失败，跳过该账号"), {
          "index": _0x4519c9.index,
          "remark": _0x4519c9.remark || "无备注",
          "nickname": "账号" + _0x4519c9.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": "代理测试失败: " + _0x462cfa.msg,
          "skipped": true
        };
      }
    }
  } else console.log("账号[" + _0x4519c9.index + "]" + (_0x4519c9.remark ? "（" + _0x4519c9.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x4519c9.index + "]" + (_0x4519c9.remark ? "（" + _0x4519c9.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x3fe902 = await getAccountBasicInfo(_0x4519c9.cookie, _0x4519c9.proxyUrl, _0x4519c9.index),
    _0x40dbac = _0x3fe902?.["nickname"] || "账号" + _0x4519c9.index;
  if (_0x3fe902) {
    const _0x3eb4de = _0x3fe902.totalCoin != null ? _0x3fe902.totalCoin : "未知",
      _0xdca4ff = _0x3fe902.allCash != null ? _0x3fe902.allCash : "未知";
    console.log("账号[" + _0x40dbac + "] ✅ 登录成功，💰 当前金币: " + _0x3eb4de + "，💸 当前余额: " + _0xdca4ff);
  } else console.log("账号[" + _0x40dbac + "] ❌ 基本信息获取失败，但仍继续执行任务");
  const _0x120fcf = new KuaishouAdTask({
    ..._0x4519c9,
    "nickname": _0x40dbac,
    "tasksToExecute": tasksToExecute
  });
  if (_0x3fe902) {
    await _0x120fcf.checkCoinLimit();
    if (_0x120fcf.coinExceeded) {
      {
        console.log("账号[" + _0x120fcf.nickname + "]" + (_0x4519c9.remark ? "（" + _0x4519c9.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
        const _0x5d3868 = await getAccountBasicInfo(_0x4519c9.cookie, _0x4519c9.proxyUrl, _0x4519c9.index),
          _0x2454e5 = _0x3fe902?.["totalCoin"] || 0,
          _0x3722f2 = _0x5d3868?.["totalCoin"] || 0,
          _0x148ac7 = _0x3722f2 - _0x2454e5,
          _0x133dcc = _0x3fe902?.["allCash"] || 0,
          _0x4e786e = _0x5d3868?.["allCash"] || 0,
          _0x212472 = _0x4e786e - _0x133dcc;
        return {
          "index": _0x4519c9.index,
          "remark": _0x4519c9.remark || "无备注",
          "nickname": _0x40dbac,
          "initialCoin": _0x2454e5,
          "finalCoin": _0x3722f2,
          "coinChange": _0x148ac7,
          "initialCash": _0x133dcc,
          "finalCash": _0x4e786e,
          "cashChange": _0x212472,
          "stats": _0x120fcf.getTaskStats(),
          "coinLimitExceeded": true
        };
      }
    }
  }
  console.log("账号[" + _0x120fcf.nickname + "]" + (_0x4519c9.remark ? "（" + _0x4519c9.remark + "）" : "") + " 🚀 开始执行所有任务");
  await _0x120fcf.executeAllTasksByPriority();
  const _0xb7f51b = await getAccountBasicInfo(_0x4519c9.cookie, _0x4519c9.proxyUrl, _0x4519c9.index),
    _0xd08d03 = _0x3fe902?.["totalCoin"] || 0,
    _0x10f6b2 = _0xb7f51b?.["totalCoin"] || 0,
    _0x106636 = _0x10f6b2 - _0xd08d03,
    _0x549206 = _0x3fe902?.["allCash"] || 0,
    _0x2b882f = _0xb7f51b?.["allCash"] || 0,
    _0x4c16c3 = _0x2b882f - _0x549206;
  _0x120fcf.printTaskStats();
  return {
    "index": _0x4519c9.index,
    "remark": _0x4519c9.remark || "无备注",
    "nickname": _0x40dbac,
    "initialCoin": _0xd08d03,
    "finalCoin": _0x10f6b2,
    "coinChange": _0x106636,
    "initialCash": _0x549206,
    "finalCash": _0x2b882f,
    "cashChange": _0x4c16c3,
    "stats": _0x120fcf.getTaskStats(),
    "coinLimitExceeded": _0x120fcf.coinExceeded,
    "infoFetchFailed": !_0x3fe902
  };
}
function printAccountsSummary(_0x521ba6) {
  if (!_0x521ba6.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0x22745a = _0x521ba6.reduce((_0x22525a, _0x26033e) => {
      return _0x22525a + (parseInt(_0x26033e.initialCoin) || 0);
    }, 0),
    _0x52103d = _0x521ba6.reduce((_0x12d4d4, _0x43364) => {
      return _0x12d4d4 + (parseInt(_0x43364.finalCoin) || 0);
    }, 0),
    _0x2e8183 = _0x52103d - _0x22745a,
    _0x7de1b6 = _0x521ba6.reduce((_0x237ecb, _0x5c5c98) => {
      return _0x237ecb + (parseFloat(_0x5c5c98.initialCash) || 0);
    }, 0),
    _0x4527b2 = _0x521ba6.reduce((_0x5a828a, _0x10ccd6) => {
      return _0x5a828a + (parseFloat(_0x10ccd6.finalCash) || 0);
    }, 0),
    _0x538b48 = _0x4527b2 - _0x7de1b6;
  let _0x1982e9 = 0,
    _0x208ae7 = 0,
    _0x3e86b0 = 0;
  _0x521ba6.forEach(_0x15814c => {
    if (_0x15814c.stats) {
      Object.values(_0x15814c.stats).forEach(_0x1a25dd => {
        _0x1982e9 += _0x1a25dd.success + _0x1a25dd.failed;
        _0x208ae7 += _0x1a25dd.success;
        _0x3e86b0 += _0x1a25dd.totalReward;
      });
    }
  });
  const _0x3ae44c = _0x1982e9 > 0 ? (_0x208ae7 / _0x1982e9 * 100).toFixed(1) : "0.0",
    _0x450bdd = _0x521ba6.filter(_0x371ba2 => _0x371ba2.coinLimitExceeded).length,
    _0x3679f5 = _0x521ba6.filter(_0x51f163 => _0x51f163.skipped).length,
    _0x5d02db = _0x521ba6.filter(_0x1d62ed => _0x1d62ed.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x521ba6.length).padEnd(22) + ("跳过账号: " + _0x3679f5).padEnd(22) + ("总任务数: " + _0x1982e9).padEnd(22) + ("任务成功率: " + _0x3ae44c + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x2e8183).padEnd(26) + ("总金币奖励: " + _0x3e86b0).padEnd(26) + ("总余额变化: " + _0x538b48.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x5b5822 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化", "状态"],
    _0x4c5449 = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  let _0x2f0248 = "|";
  _0x5b5822.forEach((_0xeb82ca, _0x83772b) => {
    _0x2f0248 += centerAlign(_0xeb82ca, _0x4c5449[_0x83772b]) + "|";
  });
  console.log(_0x2f0248);
  let _0x4d4281 = "|";
  _0x4c5449.forEach(_0x3a9b56 => {
    _0x4d4281 += "-".repeat(_0x3a9b56) + "|";
  });
  console.log(_0x4d4281);
  _0x521ba6.forEach(_0x578f1a => {
    let _0x4a48bc = "|";
    _0x4a48bc += centerAlign(_0x578f1a.index, _0x4c5449[0]) + "|";
    _0x4a48bc += centerAlign(_0x578f1a.remark, _0x4c5449[1]) + "|";
    let _0x502efc = _0x578f1a.nickname || "-";
    if (_0x578f1a.skipped) _0x502efc += " ❌";else {
      if (_0x578f1a.coinLimitExceeded) _0x502efc += " ⚠️";else _0x578f1a.infoFetchFailed && (_0x502efc += " 🔶");
    }
    _0x4a48bc += centerAlign(_0x502efc.substring(0, _0x4c5449[2] - 2), _0x4c5449[2]) + "|";
    _0x4a48bc += centerAlign(_0x578f1a.initialCoin, _0x4c5449[3]) + "|";
    _0x4a48bc += centerAlign(_0x578f1a.finalCoin, _0x4c5449[4]) + "|";
    const _0x372845 = _0x578f1a.coinChange >= 0 ? "+" + _0x578f1a.coinChange : _0x578f1a.coinChange;
    _0x4a48bc += centerAlign(_0x372845, _0x4c5449[5]) + "|";
    _0x4a48bc += centerAlign(_0x578f1a.initialCash, _0x4c5449[6]) + "|";
    _0x4a48bc += centerAlign(_0x578f1a.finalCash, _0x4c5449[7]) + "|";
    const _0x1daf29 = _0x578f1a.cashChange >= 0 ? "+" + _0x578f1a.cashChange.toFixed(2) : _0x578f1a.cashChange.toFixed(2);
    _0x4a48bc += centerAlign(_0x1daf29, _0x4c5449[8]) + "|";
    let _0x28e841 = "完成";
    if (_0x578f1a.skipped) _0x28e841 = "跳过";else {
      if (_0x578f1a.coinLimitExceeded) {
        _0x28e841 = "超限";
      } else {
        if (_0x578f1a.infoFetchFailed) {
          _0x28e841 = "无信息";
        }
      }
    }
    _0x4a48bc += centerAlign(_0x28e841, _0x4c5449[9]) + "|";
    console.log(_0x4a48bc);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x51ac80 = loadAccountsFromEnv();
  console.log("共找到 " + _0x51ac80.length + " 个有效账号");
  !_0x51ac80.length && process.exit(1);
  const _0x787d16 = getEnvNumber("MAX_CONCURRENCY", 3);
  console.log("\n防黑并发：" + _0x787d16 + "    防黑轮数：" + KSROUNDS + "    look次数/轮：" + KSLOOK_COUNT + "    search次数/轮：" + KSSEARCH_COUNT + "    follow次数/look：" + KSFOLLOW_COUNT + "    search_follow次数/search：" + KSSEARCHFOLLOW_COUNT + "\n");
  const _0x1177ad = [];
  await concurrentExecute(_0x51ac80, _0x787d16, async _0x52572c => {
    console.log("\n—— 🚀 开始账号[" + _0x52572c.index + "]" + (_0x52572c.remark ? "（" + _0x52572c.remark + "）" : "") + " ——");
    try {
      const _0x1746a0 = await processAccount(_0x52572c);
      _0x1177ad.push({
        "index": _0x52572c.index,
        "remark": _0x52572c.remark || "无备注",
        "nickname": _0x1746a0?.["nickname"] || "账号" + _0x52572c.index,
        "initialCoin": _0x1746a0?.["initialCoin"] || 0,
        "finalCoin": _0x1746a0?.["finalCoin"] || 0,
        "coinChange": _0x1746a0?.["coinChange"] || 0,
        "initialCash": _0x1746a0?.["initialCash"] || 0,
        "finalCash": _0x1746a0?.["finalCash"] || 0,
        "cashChange": _0x1746a0?.["cashChange"] || 0,
        "stats": _0x1746a0?.["stats"] || {},
        "coinLimitExceeded": _0x1746a0?.["coinLimitExceeded"] || false,
        "skipped": _0x1746a0?.["skipped"] || false,
        "infoFetchFailed": _0x1746a0?.["infoFetchFailed"] || false,
        "error": _0x1746a0?.["error"] || null
      });
    } catch (_0x3f8409) {
      console.log("账号[" + _0x52572c.index + "]" + (_0x52572c.remark ? "（" + _0x52572c.remark + "）" : "") + " ❌ 执行异常：" + _0x3f8409.message);
      _0x1177ad.push({
        "index": _0x52572c.index,
        "remark": _0x52572c.remark || "无备注",
        "nickname": "账号" + _0x52572c.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x3f8409.message,
        "skipped": true
      });
    }
  });
  _0x1177ad.sort((_0x2ebd31, _0x224bb4) => _0x2ebd31.index - _0x224bb4.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x1177ad);
})();