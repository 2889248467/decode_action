//Fri Jul 19 2024 10:21:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fanli = Bucket("fanli");
const union_id = fanli.jd_union_id ?? "";
const appid = fanli.jd_jingpinku_appid ?? "";
const appkey = fanli.jd_jingpinku_appkey ?? "";
let content = s.getContent();