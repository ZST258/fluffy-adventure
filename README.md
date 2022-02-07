# 云霄互联
## 一、简介
### 云霄互联基于轻量开源下载项目Aria2作为后端，开源项目Cloudreve作为前端的一个自建网盘项目。
## 二、特点
### 1.优点

#### a.由于部署在国外VPS上，无视国内敏感违规资源，能够下载迅雷等客户端显示违规无法下载的文件

#### b.支持webdav协议，能够直接通过webdav链接浏览文档、视频，无需取回。

#### c.支持在线解压，10G以内文件能够直接解压缩。

#### d.上传下载文件不限速(200Mibt以内),不限制下载次数，不限制下载流量多少。

#### e.完全由后端下载，前后分离。你在添加了所有任务后即可关闭该网页，后端会自动为你完成所有的下载任务。
### 2.缺点

#### a.相较于迅雷，对国内BT资源的离线并不是很友好，通常速度很慢。
#### b.离线过程环节多，在下载完成后还会进行一次转存，通常转存速度在3-4MB/S左右，效率较低。

c.下载完成后有120秒的做种时间，保证种子的活跃性。

#### d.现在处于测试阶段

## 三、后续更新
### 我理想中的云霄互联
1.支持多节点多线程下载（×，未完成）

2.onedrive反代（×，未完成）

## 四、使用教程
### 如何实现在线观影？
#### 准备工作
进入云霄互联→点击左侧菜单的webdav。

点击“创建新账号”。如图所示：
![image](https://user-images.githubusercontent.com/90917166/152499466-554646c7-5c10-43bf-9845-40721ff92e4a.png)
将用户名和密码复制在一旁备用。
#### （1）potplayer
      potplayer下载链接：https://gia.cloudkingzst.xyz/quick-download-button/?aid=549&_wpnonce=bbbe87bfbb
打开potplayer，右击播放页面，按照图中黄色高亮的选项进行选择
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/90917166/152499793-aa4af14b-ea2e-49ee-a979-8532eb6169c1.png">
按照下图填写：
![image](https://user-images.githubusercontent.com/90917166/152500157-9a4d196b-580d-4af7-8173-32cc4ae56df6.png)
#### 需要注意：协议要选择webdav，地址不要加http:// 或者https:// ，一定要勾选443端口。
点击连接按钮，这是，下方会出现文件目录，选择你需要的视频播放即可。
#### PS：整个过程有些卡顿，请耐心等待。

#### （2）


