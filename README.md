# casperjs
导航脚本处理和测试工具，能爬网页，网页截图
PhantomJS是一个无界面的,包含了WebKit浏览器引擎和JavaScript API的脚本解释器.PhantomJs是专门针对Webkit的后台javascript API
CasperJS是一个开源的,用JavaScript编写的,基于PhantomJS的导航脚本和测试工具 ,它简化了定义一个完成的导航操作所需的步骤,还提供了很有用的函数封装,方法,和语法糖
###### win7上 安装phantomjs
* 直接下载phantomjs-2.1.1-windows.zip
* 解压到c盘，重命名phantomjs
* 环境变量PATH加上;C:\phantomjs

###### win7上 安装casperjs
* git安装
* $ git clone git://github.com/casperjs/casperjs.git
* $ cd casperjs
* $ ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs    -----没用到这句
* 把这个文件夹放到C盘
* 环境变量PATH加上;C:\casper\bin
* （安装结束后，运行casperjs看版本，老是报错 cant open D:/program,最后去D:/program files把之前其他方案装的casperjs相关文件都删了，就可以了）

###### 运行截图 capture.js
* $   casperjs capture.js  http://sudodev.cn/casperjs-capture-webpage-by-selector/ filename3.png .post-footer
* 参数分别对应    命令，      对应js，                 截图网页地址，  保存的图片名称，  截图dom的选择器
