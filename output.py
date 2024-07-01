#2024-07-01 15:24:25
gold=False
import requests
import json
import time
import os
import random
import hashlib
requests.packages.urllib3.disable_warnings()
code="xddj"
ver="1.1.4"
def version():
 txt=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text
 print(txt)
 url=f"http://101.132.127.171/api/huaji/?version={ver}&code={code}"
 r=json.loads(requests.get(url).text)
 if "error" in r:
  print(r)
 if r["ok"]:
  if r["update"]:
   print(f"🎉️有新版本请更新,当前版本:{ver},最新版本:",r["latest_version"])
   exit()
  else:
   print(f"🎉️当前版本为最新版本,当前版本:{ver},最新版本:",r["latest_version"])
   print("🎉️更新日志:",r["data"]["update_note"])
 else:
  print("🎉️更新日志:",r["data"]["update_note"])
  print("脚本已关闭")
  exit()
class yuanshen():
 def __init__(self,cookie):
  self.url="https://api.xingdouduanju.com"
  self.key="kjKjb8WRmfb77U6IMqsVtIuIFQCvab4JBqABNqSp"
  self.cookie=cookie
  self.header={"Authorization":f"{self.cookie}","X-Version-Code":"106","Content-Type":"application/json; charset=utf-8","Host":"api.xingdouduanju.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.14.9"}
 def _md5(self,s):
  md5=hashlib.md5()
  md5.update(s.encode('utf-8'))
  return md5.hexdigest()
 def _nonce(self,length=16):
  nonce=os.urandom(length)
  return nonce.hex()
 def _time(self):
  return(int(time.time()*1000))
 def gold_task(self,id,name):
  url=f"https://api.xingdouduanju.com/api/gold_tasks/{id}/complete"
  self.nonce=self._nonce()
  self.time=self._time()
  if id==1:
   self.sign=self._md5(f"{id}&{self.time}&{self.nonce}&{self.key}")
  else:
   self.sign=self._md5(f"{self.time}&{id}&{self.nonce}&{self.key}")
  data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","id":f"{id}","sign":f"{self.sign}"})
  r=requests.post(url,headers=self.header,data=data).json()
  if r["code"]==200001:
   print(f"✅做任务[{name}]成功,获得金币[{r['data']['reward']}]")
   if id==1:
    time.sleep(random.randint(10,30))
   elif id==5:
    time.sleep(random.randint(61,63))
   elif id==6:
    time.sleep(random.randint(34,60))
  else:
   print(f"❌️做任务[{name}]失败,错误信息:{r}")
   time.sleep(random.randint(10,20))
 def daily_task(self):
  url=f"{self.url}/api/gold_tasks"
  r=requests.get(url,headers=self.header).json()
  do_id_list=[1,5,6]
  if gold:
   do_id_list=[3,2,4]
  if r["code"]==200001:
   print("🎉️获取任务列表成功！")
   for dataa in r["data"]["tasks"]:
    rjson=json.loads(json.dumps(dataa))
    if rjson['id']in do_id_list:
     do_time=rjson['times']-rjson['completedCount']
     print(f"✅开始执行任务[{rjson['name']}],共执行[{do_time}]次")
     for i in range(do_time):
      self.gold_task(rjson['id'],rjson['name'])
    else:
     print(f"❌️跳过任务[{rjson['name']}]")
  else:
   print(f"❌️获取任务失败,错误信息:{r}")
 def watch_video(self):
  try:
   url=f"{self.url}/api/watch_video_duration_tasks"
   r=requests.get(url,headers=self.header).json()
   if r["code"]==200001:
    print("🎉️获取看剧任务列表成功！")
    for dataa in r["data"]:
     rjson=json.loads(json.dumps(dataa))
     id=rjson['id']
     if rjson['hasReceived']:
      print(f"❌️跳过任务[{rjson['duration']}]")
     else:
      url=f"{self.url}/api/watch_video_duration_tasks/{id}/complete"
      self.nonce=self._nonce()
      self.time=self._time()
      if id==1:
       self.sign=self._md5(f"{id}&{self.time}&{self.nonce}&{self.key}")
      if id==2:
       self.sign=self._md5(f"{self.time}&{id}&{self.nonce}&{self.key}")
      if id==3:
       self.sign=self._md5(f"{self.time}&{id}&{self.nonce}&{self.key}")
      data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","id":f"{id}","sign":f"{self.sign}"})
      r=requests.post(url,headers=self.header,data=data).json()
      if r["code"]==200001:
       print(f"✅看剧任务[{rjson['duration']}]成功,获得金币[{rjson['minReward']}]")
       time.sleep(random.randint(10,20))
       if id==1:
        time.sleep(random.randint(300,320))
       if id==2:
        time.sleep(random.randint(1200,1500))
      else:
       print(f"❌️看剧任务[{rjson['duration']}]失败,错误信息:{r}")
       if "验签" in r['message']:
        print("重试任务ing..")
        return self.watch_video()
       time.sleep(random.randint(10,20))
  except Exception as e:
   print(f"❌️任务失败,错误信息:{e}")
 def get_gold(self):
  url=f"{self.url}/api/gold_pigs/info"
  r=requests.get(url,headers=self.header).json()
  if r["code"]==200001:
   print("🎉️获取金块信息成功！")
   global pigcount
   pigcount=r["data"]["goldPigCount"]
   try:
    if r["data"]["waitCollectGoldPigs"]==[]:
     print("🎉️貌似没有可领取的金块了哦~")
     return
    for dataa in r["data"]["waitCollectGoldPigs"]:
     if not dataa:
      return
     rjson=json.loads(json.dumps(dataa))
     id=rjson['id']
     url=f"https://api.xingdouduanju.com/api/gold_pigs/{id}/collect_bullion"
     self.time=self._time()
     self.nonce=self._nonce()
     self.sign=self._md5(f"{self.time}&{id}&{self.nonce}&{self.key}")
     data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","id":f"{id}","sign":f"{self.sign}"})
     r=requests.post(url,headers=self.header,data=data).json()
     if r["code"]==200001:
      print(f"✅领取金块成功,获得金块 [{rjson['bullions']}]")
      time.sleep(random.randint(3,8))
     else:
      print(f"❌️领取金块失败,错误信息:{r}")
      time.sleep(random.randint(3,8))
    return self.get_gold()
   except:
    print("🎉️貌似没有可领取的金块了哦~")
    return
  else:
   print(f"❌️获取金块信息失败,错误信息:{r}")
 def userinfo(self):
  if exchange:
   while True:
    url=f"{self.url}/api/gold_pigs/gold_exchange"
    self.nonce=self._nonce()
    self.time=self._time()
    self.sign=self._md5(f"{self.time}&{self.nonce}&{self.key}")
    data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","sign":f"{self.sign}"})
    r=requests.post(url,headers=self.header,data=data).json()
    if r["code"]==200001:
     print(f"✅兑换猪仔成功 [{r['message']}]")
     if gold:
      pass
     else:
      time.sleep(random.randint(5,10))
    else:
     print(f"❌️兑换猪仔失败,错误信息 [{r['message']}]")
     break
  else:
   print("❌️跳过兑换猪仔")
  url=f"{self.url}/api/user/profile"
  r=requests.get(url,headers=self.header).json()
  if r["code"]==200001:
   print("=========================================")
   print("查询用户信息成功")
   print(f"🎉️当前金币 [{r['data']['walletGold']['balance']}]")
   print(f"🎉️当前金块 [{r['data']['walletBullion']['balance']}] = [{float(r['data']['walletBullion']['balance']) / 120}]r")
   print(f"🎉️当前猪仔 [{pigcount}]")
  else:
   print(f"❌️查询用户信息失败,错误信息:{r}")
 def get_gold_tuandui(self):
  url=f"{self.url}/api/user_bonus_bullions/info"
  r=requests.get(url,headers=self.header).json()
  if r["code"]==200001:
   print(f"🎉️获取团队金块信息成功 可领取[{r['data']['bullionTotal']}]")
   if r['data']['bullionTotal']==0:
    print("🎉️没有可领取的团队金块")
    return
   url=f"{self.url}/api/user_bonus_bullions/collect"
   self.time=self._time()
   self.nonce=self._nonce()
   self.sign=self._md5(f"{self.time}&{self.nonce}&{self.key}")
   data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","sign":f"{self.sign}"})
   r=requests.post(url,headers=self.header,data=data).json()
   if r["code"]==200001:
    print(f"✅领取团队金块成功 [{r['message']}]")
   else:
    print(f"❌️领取团队金块失败,错误信息:{r}")
  else:
   print(f"❌️获取团队金块信息失败,错误信息:{r}")
 def steal_gold(self):
  i=1
  while True:
   url=f"{self.url}/api/user/friends?level={i}&curor=2&keyword="
   r=requests.get(url,headers=self.header).json()
   if r["code"]==200001:
    print(f"🎉️获取好友信息成功")
    for dataa in r["data"]:
     rjson=json.loads(json.dumps(dataa))
     if rjson['canCollectBullion']:
      url=f"{self.url}/api/user_friend_bullions/collect"
      self.time=self._time()
      self.nonce=self._nonce()
      self.sign=self._md5(f"{self.time}&{rjson['id']}&{self.nonce}&{self.key}")
      data=json.dumps({"timestamp":f"{self.time}","nonce":f"{self.nonce}","friendId":f"{rjson['id']}","sign":f"{self.sign}"})
      r=requests.post(url,headers=self.header,data=data).json()
      if r["code"]==200001:
       print(f"✅领取好友[{rjson['nickname']}]金块成 获得[{r['data']['amount']}]金块")
      else:
       print(f"❌️领取好友[{rjson['nickname']}]金块失败,错误信息:{r}")
      time.sleep(random.randint(1,3))
     else:
      print(f"❌️好友[{rjson['nickname']}]没有可领取的金块")
      time.sleep(1)
   else:
    print(f"❌️获取好友信息失败,错误信息:{r}")
    break
   i+=1
   if i==3:
    break
 def task(self):
  print("🎉️开始执行[日常任务]")
  self.daily_task()
  print("===========================")
  if watch_film:
   print("🎉️开始执行[看剧任务]")
   self.watch_video()
  else:
   print("❌️跳过看剧任务")
  print("===========================")
  print("🎉️开始执行[领取金块]")
  self.get_gold()
  print("===========================")
  self.get_gold_tuandui()
  print("===========================")
  self.steal_gold()
  print("===========================")
  print("🎉️开始执行[兑换猪仔&查询信息]")
  self.userinfo()
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_xddj")
  if not cookie:
   print("请设置环境变量:yuanshen_xddj")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.task()
  print(f"--------第{i}个账号执行完毕--------")
  i+=1
