### 秦晋商城（后台管理端VUE）

+ 基于开源项目NideShop重建，精简了一些功能的同时完善了一些功能，并重新设计了UI
+ 测试数据来自上述开源项目
+ 服务端api基于Ｎode.js+ThinkJS+MySQL
+ 后台管理 基于VUE.js+element-ui



#### 本项目需要配合
服务端： hioshop-server
微信小程序：hioshop-miniprogram

用户名：admin
密码：123456

+ 安装依赖
```
npm install

```
安装依赖后启动后会出现一个问题。

<img width="600" src="http://git.hiolabs.com/github/error.jpg"/>

这个问题是Element-ui自带的。解决方法：

在node_modules 搜索:  div class="el-form-item__label-wrap" style={style}
然后在语句中加上单引号就可以了。

<img width="600" src="http://git.hiolabs.com/github/before.jpg"/>

<img width="600" src="http://git.hiolabs.com/github/after.jpg"/>

+ 启动
```
npm run dev

```

+ build 打包成静态文件
```
npm run build:web 或者 sudo npm run build:web

```

生成的静态文件在dist的web文件夹中，上传到服务器就可以在浏览器中打开了。

### 功能列表
+ 订单管理：查看，修改订单价格，发货，生成电子面单，修改订单状态
+ 商品管理：添加、修改、删除商品，添加商品分类
+ 购物车：可以看到用户加入购物车的情况
+ 用户列表：用户的一些使用踪迹
+ 店铺设置：广告列表，公告管理，运费模板（可以根据地区设置相应的运费），管理员


