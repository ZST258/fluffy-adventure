# 总览
## 一、关于节点

### (1)节点来源
节点均来源于网络，有爬虫程序自动抓取。抓取源包括但不限于GitHub免费节点，节点池节点，网页节点，电报节点。
### (2)节点质量
 正常情况下，节点池节点可用率很低(0.2左右)，并且很多可用节点速度很慢,不适合重度翻墙用户使用。由于节点
       
来源于网络，因此节点质量往往较差，且时效性很强，可能你正在使用的过程中就会断流。因此，请不要对免费节点抱
    
有太高期望，毕竟“免费的才是最贵的”。
#### 如果对节点稳定性有较大需求，请自行搭建vps或者购买机场进行使用。
### (3)节点安全性
 无法保证节点的安全性，在使用时切忌登录国外账号的同时频繁更换节点（容易触发风控），切忌将这些节点用于注册
 
 （理由同上），在使用时注意保护好自身隐私，建议使用浏览器隐私窗口进行科学上网。
### (4)其他
  切勿将节点用于盈利、宗教、政治等领域，违反法律本项目不承担后果。
 
## 二、筛选原理
### (1)远端节点池拉取订阅链接
部署在国外的服务器的proxypool项目定时拉取订阅链接，并对节点进行测速
   #### 更新频率：30min
   #### 健康检查并发数：200
   #### 服务器测速带宽：200 Mbps
   #### 测速进程数：3
    Q&A:为什么不在本地部署proxypool？
    很多订阅链接本地无法更新，需要在墙外进行更新，因此需要在国外vps部署。
### (2)本地节点池抓取远端节点池的高速节点
第(1)步已经将在墙外不可用的节点和低速节点进行了筛选，这一步则是对这些节点进行本地可用性检查，提高节点的可用概率
 #### 检查的节点类型：
      亚洲节点(不含印度)：国家筛选参数：SG,JP,HK,KR,速度筛选条件：5Mbps以上
      欧洲节点：国家筛选参数：GB,RU,NL,FR,AT,CH,AU,DE，速度筛选条件：8Mbps以上
      北美节点：国家筛选参数：US,CA，速度筛选条件：8Mbps以上
      其他节点：国家筛选参数：其他国家 速度筛选条件：15Mbps以上
 #### 本地检查参数：
      连接并发数：50
      延时设置：3s
      测试网页：标准clash测试延迟网页
      
    
     

   
