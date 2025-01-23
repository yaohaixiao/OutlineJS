## [3.40.1](https://github.com/yaohaixiao/outline.js/compare/3.40.0...3.40.1) (2024-09-08)


### Bug Fixes

* 修复未设置 showCode 时，导航菜单创建 data-code 属性节点的问题； ([f450c80](https://github.com/yaohaixiao/outline.js/commit/f450c803285ef063b62da9d749dfb524924a24b8))
* 修复资源引用路径问题 ([d421380](https://github.com/yaohaixiao/outline.js/commit/d42138022cbf982e39e00d70160263404f19f751))



# [3.40.0](https://github.com/yaohaixiao/outline.js/compare/3.39.3...3.40.0) (2024-09-07)


### Features

* 调整代码结构，模块化组织子组件 ([be5f17e](https://github.com/yaohaixiao/outline.js/commit/be5f17ee22c2f090adbd459e57a92995275fb87e))
* 添加简易的插件系统 ([de7778e](https://github.com/yaohaixiao/outline.js/commit/de7778efbd4468c7db131c4a646eea0130d8b1dd))



## [3.39.3](https://github.com/yaohaixiao/outline.js/compare/3.39.2...3.39.3) (2024-09-03)


### Bug Fixes

* 修复 chapterTextFilter 参数内置的方法会删除标题括号内容的问题； ([b7f7204](https://github.com/yaohaixiao/outline.js/commit/b7f720471400d55c8652b0a526e4417c96f6523b))



## [3.39.2](https://github.com/yaohaixiao/outline.js/compare/3.39.1...3.39.2) (2024-09-03)


### Bug Fixes

* 修复 outline.js 为文章标题添加 class 样式时，删除标题原有样式的问题； ([f02953b](https://github.com/yaohaixiao/outline.js/commit/f02953b6b5221cd3fa8e22e876e63c685e0c9ccd))



## [3.39.1](https://github.com/yaohaixiao/outline.js/compare/3.39.0...3.39.1) (2024-08-10)


### Bug Fixes

* 修复 print 样式针对表格和媒体内容的显示问题 ([0fa85f8](https://github.com/yaohaixiao/outline.js/commit/0fa85f8a50455bea147c3ab6d8e42f09393d6e5f))


### Features

* 优化 print 打印样式 ([297db48](https://github.com/yaohaixiao/outline.js/commit/297db48c7cd70f6770c7eaeab9f65777b5787fa2))



# [3.39.0](https://github.com/yaohaixiao/outline.js/compare/3.38.3...3.39.0) (2024-07-21)


### Bug Fixes

* 修复缺陷-issues([#48](https://github.com/yaohaixiao/outline.js/issues/48))-处理 sticky 定位 onResize() 方法中没有判断是否 sticky 定位，直接调用 this.calculateStickyHeight() 方法报错的问题 ([ad4f25c](https://github.com/yaohaixiao/outline.js/commit/ad4f25ce98becaea715053c66a46d464c6895d92))
* 修复 remove() 方法中 attr() 方法写错成 attrs的问题 ([877505c](https://github.com/yaohaixiao/outline.js/commit/877505cc7ca14da3de15ca6de3f891082a95b966))

### Features

* 调整 outline 等模块的消息订阅发布方法 ([8a6ad40](https://github.com/yaohaixiao/outline.js/commit/8a6ad4060b7f4565594ba90a7b8c7053782cd963))



## [3.38.2](https://github.com/yaohaixiao/outline.js/compare/3.38.1...3.38.2) (2024-06-20)


### Bug Fixes

* 修复缺陷 - issues([#47](https://github.com/yaohaixiao/outline.js/issues/47)) - 配置参数 showCode 默认值调整为：false ([5bba55f](https://github.com/yaohaixiao/outline.js/commit/5bba55f11096f625df2e3bff90f4ca3b79a5314e))
* 修复缺陷 - issues([#45](https://github.com/yaohaixiao/outline.js/issues/45)) - 兼容问题，默认 scrollElement = 'html,body' 在老版本 chrome(Chromium 60.0.3112.113)以下需要手动设置为 ‘body’ ([68c6ffa](https://github.com/yaohaixiao/outline.js/commit/68c6ffa7923ab1fa2205ab8c79883a02ce1cdc23))



## [3.38.1](https://github.com/yaohaixiao/outline.js/compare/3.38.0...3.38.1) (2024-05-24)


### Bug Fixes

* 修复 ES6 语法 扩展运算符（spread）在低版本浏览器中的兼容性问题； ([afdae86](https://github.com/yaohaixiao/outline.js/commit/afdae866c94dc024d8386c8285baab0aee88f2c5))
* 修复使用语音阅读时，推出阅读模式，未关闭语音阅读的问题； ([fdacca6](https://github.com/yaohaixiao/outline.js/commit/fdacca6e2eff673715c35674797d362b1d115f34))


### Features

* 优化交互体验，给工具栏按钮添加缩放动画效果； ([5ddadb0](https://github.com/yaohaixiao/outline.js/commit/5ddadb0637618a8bdfd8a7eb84690b55431e8239))



# [3.38.0](https://github.com/yaohaixiao/outline.js/compare/3.37.0...3.38.0) (2024-04-18)


### Bug Fixes

* 修复调整 getChaptersByHeadings() 方法逻辑后，设置显示编码，导航菜单会显示重复的编码问题； ([ee4ee83](https://github.com/yaohaixiao/outline.js/commit/ee4ee83d3551ce54d75ba82fb8ccf47b60c5283b))


### Features

* 调整 Navigator 模块的绘制逻辑，展开时添加 outline-navigator_expanded 样式表示展开样式 ([bf7a61e](https://github.com/yaohaixiao/outline.js/commit/bf7a61ead37cce849e8cb8f2bce1dabbffd78322))
* 添加 isExpanded()、expand() 和 collapses() 方法，并添加 API 文档； ([64c3f0b](https://github.com/yaohaixiao/outline.js/commit/64c3f0babb237b37670562ba8d6771ef95179624))



## [3.37.0](https://github.com/yaohaixiao/outline.js/compare/3.36.1...3.36.2) (2024-04-17)


### Features

* 更新阅读模式工具栏图标样式和排列顺序 ([172810f](https://github.com/yaohaixiao/outline.js/commit/172810fe1e46ccdee1c249fd18cb2b8a6ffd2110))
* 针对部分支持 ScrollTimeline 的移动设备添加阅读模式的阅读滚动进度条动画 ([e3e6375](https://github.com/yaohaixiao/outline.js/commit/e3e63751b6c91ee02fd0d9fe70a03a5112687010))



## [3.36.1](https://github.com/yaohaixiao/outline.js/compare/3.36.0...3.36.1) (2024-04-16)


### Bug Fixes

* 修复阅读模式在移动设备的显示问题； ([9c6ccb6](https://github.com/yaohaixiao/outline.js/commit/9c6ccb68ee38c37c97b1776a064bc67adc5d45a6))



# [3.36.0](https://github.com/yaohaixiao/outline.js/compare/3.35.2...3.36.0) (2024-04-16)


### Features

* 调整阅读模式的样式，并优化样式代码； ([70da824](https://github.com/yaohaixiao/outline.js/commit/70da8241a677ea99716f96c7435b051f414de632))
* 优化阅读模式在移动设备中的显示效果； ([3de1e90](https://github.com/yaohaixiao/outline.js/commit/3de1e9026660a9923709b9eb2c1e72854da3550c))



## [3.35.2](https://github.com/yaohaixiao/outline.js/compare/3.35.1...3.35.2) (2024-04-08)


### Bug Fixes

* 修复 position: 'relative' 定位，导航菜单与文档滚动位置无法同步的问题； ([69ac8bf](https://github.com/yaohaixiao/outline.js/commit/69ac8bfa249156c60dee9623b6f55e533649174f))
* 修复仅高亮定位当前标题时，文章滚动到导航菜单在 viewport 中无法看到的章节，无法自动定位的问题； ([84a032a](https://github.com/yaohaixiao/outline.js/commit/84a032ae9ffa18f269fb044764c4b0c559ed31e0))


### Features

* 调整 anchors.js 模块，调整绘制逻辑 ([307ee81](https://github.com/yaohaixiao/outline.js/commit/307ee817b7cb4bd020357ad722121eed49d557fc))
* 调整模块名称，将 chapters.js 调整为 navigator.js，并更新样式和 API 文档； ([fbd5ee8](https://github.com/yaohaixiao/outline.js/commit/fbd5ee88e142b6d3765643cfd818f5b4a5b22c7f))



## [3.35.1](https://github.com/yaohaixiao/outline.js/compare/3.35.0...3.35.1) (2024-04-01)


### Bug Fixes

* 修复 Speech 模块，初始化逻辑错误导致阅读文档报错 ([0eb6837](https://github.com/yaohaixiao/outline.js/commit/0eb6837d410b1bb9012ae54cb4cad59b5a32422a))



# [3.35.0](https://github.com/yaohaixiao/outline.js/compare/3.34.2...3.35.0) (2024-04-01)


### Features

* 调整 reader.js 模块，使用 toolbar 模块生成工具栏按钮； ([16f08e1](https://github.com/yaohaixiao/outline.js/commit/16f08e1e5f45437e32eefd3ce3bd1c4e3a85bc5e))
* 添加 reader.allowSpeak 配置，用以配置是否启用 Web Speech API 阅读文章 ([1611cd6](https://github.com/yaohaixiao/outline.js/commit/1611cd6f4024a2cf482611348f44439474a699be))
* 完善 speech.js 模块，并给 reader.js 模块添加 speak() 方法用以阅读文章； ([be6eef8](https://github.com/yaohaixiao/outline.js/commit/be6eef87e210e07c1633025f3a42c060acbdf7dc))
* 阅读模式添加打印功能按钮；调整打印样式，隐藏调整后的阅读模式 toolbar 的显示； ([482e84e](https://github.com/yaohaixiao/outline.js/commit/482e84e33788af66b2fd84c699d1db5d54b780fb))
* 阅读模式添加滚动阅读进度条交互； ([ceee986](https://github.com/yaohaixiao/outline.js/commit/ceee986bba8b25e18adcf1bb9e51d97564b122ca))



## [3.34.2](https://github.com/yaohaixiao/outline.js/compare/3.34.1...3.34.2) (2024-03-23)


### Bug Fixes

* 调整 base.js 模块中的 reload() 方法的实现，修复 reload() 方法报错的问题；
* 修复 toolbar.js 模块中 highlight() 方法无效的错误； ([a00b155](https://github.com/yaohaixiao/outline.js/commit/a00b1550d08a98936769f9eeaf7a772fa74ef4ec))



## [3.34.1](https://github.com/yaohaixiao/outline.js/compare/3.34.0...3.34.1) (2024-03-22)


### Bug Fixes

* 修复 outline.js 中处理 _default() 方法的错误； ([4bffd05](https://github.com/yaohaixiao/outline.js/commit/4bffd05c79bb056cab40cb3f65a3f9b50ecaeca2))



# [3.34.0](https://github.com/yaohaixiao/outline.js/compare/3.33.0...3.34.0) (2024-03-22)


### Bug Fixes

* 修复 navigator.js 模块中 removeListeners() 方法中移除 window.resize 事件的错误逻辑 ([d1f4eb7](https://github.com/yaohaixiao/outline.js/commit/d1f4eb7ac6384a4a3ea525861d480a2b2388475c))
* 修复问题-添加缺失的 destroyed 事件； ([0afd149](https://github.com/yaohaixiao/outline.js/commit/0afd149fad1a19a0674ccc201f97b59ed0eb892c))


### Features

* 调整 toolbar.js 模块，接入命令模式保存按钮命令，并且添加 execute() 方法；调整 outline.js 模块中关于工具栏命令配置的逻辑； ([5e52ee5](https://github.com/yaohaixiao/outline.js/commit/5e52ee5dc82c7e91afb4c8813bc8bf900186f7d2))
* outline.js 模块添加 $scrollElement 属性，并添加其 API 文档说明； ([d8caae4](https://github.com/yaohaixiao/outline.js/commit/d8caae42e823580502382d09a8284d63fc6229bd))



# 3.33.0 (2024-03-12)


### Features

* 文章大纲导航的滚动条会随文章正文滚动位置同步滚动，使大纲导航的当前章节始终可见；



# 3.32.3 (2024-03-08)


### Bug Fixes

* 修复缺陷-issues(#43)，添加  @babel/plugin-proposal-optional-chaining 插件，转化ES6 的可选链操作符语法，获得更好的浏览器兼容性；



# 3.32.1 (2024-03-06)


### Bug Fixes

* 修复 Anchors 模块初始化 attrs 属性直接复制等于 Anchors.DEFAULTS 在创建多个实例时出现的共用一个配置的问题；



# [3.32.0](https://github.com/yaohaixiao/outline.js/compare/3.31.4...3.32.0) (2024-03-05)


### Features

* 调整 print 参数名为 reader；
* 重构原来的 print.js 调整为 Reader 模块；
* 添加 refresh() 方法；公开 enterReading()、exitReading() 和 switchReading() 方法；
* 更新 API 文档；



# [3.31.0](https://github.com/yaohaixiao/outline.js/compare/3.30.4...3.31.0) (2024-02-27)


### Features

* 添加新的配置：closeOnClickModal 和 showNavModalFirst，用以解决 issues([#41](https://github.com/yaohaixiao/outline.js/issues/41)) 中的问题 ([0cb173a](https://github.com/yaohaixiao/outline.js/commit/0cb173a0051de981f37b5b8a281864b3fa33d886))



## [3.30.4](https://github.com/yaohaixiao/outline.js/compare/3.20.3...3.30.4) (2024-01-23)


### Bug Fixes

* 修复文章无标题标签 anchors.js 和 navigator.js 子组件事件绑定的逻辑错误导致的报错； ([c853bb1](https://github.com/yaohaixiao/outline.js/commit/c853bb152a2263125d762732c1a465897c48b826))



## [3.30.3](https://github.com/yaohaixiao/outline.js/compare/3.20.2...3.30.3) (2024-01-17)


### Bug Fixes

* 修复 chapters 子组件 reload() 方法的BUG导致的 outline.reload() 失败的问题 ([b3b4626](https://github.com/yaohaixiao/outline.js/commit/b3b46267ec0d06166bb6d64ac087815fdb738575))



## [3.30.2](https://github.com/yaohaixiao/outline.js/compare/3.30.1...3.30.2) (2023-12-05)


### Bug Fixes

* 修复缺陷 - issues([#36](https://github.com/yaohaixiao/outline.js/issues/36)) - 阅读模式显示正文内容不全 ([595b12f](https://github.com/yaohaixiao/outline.js/commit/595b12f7158f9f20feb50007286ac65f6b83cf66))



## [3.30.1](https://github.com/yaohaixiao/outline.js/compare/3.30.0...3.30.1) (2023-10-13)


### Bug Fixes

* 修复 issuse [#35](https://github.com/yaohaixiao/outline.js/issues/35)，scrollElement 参数设置为 DOM 节点报错问题； ([5836750](https://github.com/yaohaixiao/outline.js/commit/5836750754d109c0904b973baa369ae5f1413090))



# [3.30.0](https://github.com/yaohaixiao/outline.js/compare/3.29.0...3.30.0) (2023-09-23)


### Features

* 添加 hasToolbar 配置，可以隐藏按钮工具栏；添加 Anchors 模块的独立调用实例； ([b5ec0d4](https://github.com/yaohaixiao/outline.js/commit/b5ec0d448663a7e6d29b8160b1a64c440ed06559))



# [3.29.0](https://github.com/yaohaixiao/outline.js/compare/3.28.0...3.29.0) (2023-09-15)


### Features

* 调整 toolbar 工具栏按钮默认颜色；添加新参数 animationCurrent，用于设置当前章节文字的高亮样式；针对超长文章页（1000个有效标题），sticky 和 fixed 布局的菜单直接隐藏，不再使用动画（避免动画卡顿的，优化性能）； ([ab9f202](https://github.com/yaohaixiao/outline.js/commit/ab9f2027bb541a3aa9df82fecceff0885e1011ea))



# [3.28.0](https://github.com/yaohaixiao/outline.js/compare/3.27.0...3.28.0) (2023-09-14)


### Features

* 修复在文章中显示 chapters 导航，收起时没有动画的问题；采用延迟绘制合克隆节点的方式，优化 print 界面绘制的性能； ([1fad980](https://github.com/yaohaixiao/outline.js/commit/1fad98052523fce9fed7e1de7f4d1bbc0f3a3337))



# [3.27.0](https://github.com/yaohaixiao/outline.js/compare/3.26.0...3.27.0) (2023-09-08)


### Features

* 配置 print 参数后，针对支持 print() 方法的浏览器，工具栏新增打印按钮，支持直接打印文章 ([d36c7e6](https://github.com/yaohaixiao/outline.js/commit/d36c7e68368b4f96a06a3b59966d1525fbe8b955))



# [3.26.0](https://github.com/yaohaixiao/outline.js/compare/3.25.1...3.26.0) (2023-09-08)


### Features

* 调整 print 参数，添加 enterReadingTip 参数，用于设置进入阅读模式的提示文本（暂时还没有精力直接判断浏览器语言，翻译提示信息） ([87a96ba](https://github.com/yaohaixiao/outline.js/commit/87a96ba600fdb1de3002b4f4cfe6b07ee17b2572))



## [3.25.1](https://github.com/yaohaixiao/outline.js/compare/3.25.0...3.25.1) (2023-09-08)


### Bug Fixes

* 修复 package.json 中 files 配置缺少 message.css 和 message.js 导致引入 outline.js 模块的编译错误 ([93630b5](https://github.com/yaohaixiao/outline.js/commit/93630b5d0f8c2f03e4e77cd2d9740a31980d0628))



# [3.25.0](https://github.com/yaohaixiao/outline.js/compare/3.24.2...3.25.0) (2023-09-07)


### Features

* 优化体验，进入阅读模式添加提示信息 ([bb421c0](https://github.com/yaohaixiao/outline.js/commit/bb421c09162502f87f72a47fb535203a38c171d3))



## [3.24.2](https://github.com/yaohaixiao/outline.js/compare/3.24.1...3.24.2) (2023-09-06)


### Bug Fixes

* 修复 utils 中 cloneDeep() 方法复制数据的逻辑错误 ([33ac030](https://github.com/yaohaixiao/outline.js/commit/33ac03040782df8d1ca7a26df27ecc996340e624))



## [3.24.1](https://github.com/yaohaixiao/outline.js/compare/3.24.0...3.24.1) (2023-09-06)


### Bug Fixes

* 修复针对超长文章使用 timeSlice 机制异步绘制 anchors 链接后，针对标题的和导航菜单的 IntersectionObserver 同步高亮当前（异步绘制的）标题无效的问题； ([e3a468f](https://github.com/yaohaixiao/outline.js/commit/e3a468fd48f883a0dbf14fd98c6ed35f79b9afe8))



# [3.24.0](https://github.com/yaohaixiao/outline.js/compare/3.23.4...3.24.0) (2023-09-04)


### Features

* 优化 anchors.js 中创建图标链接的性能； ([b23312c](https://github.com/yaohaixiao/outline.js/commit/b23312c2c6b88362ac4fbe1a4b582d81d944b722))
* 针对超长文章，采用 time slice 机制优化性能； ([19d5ee8](https://github.com/yaohaixiao/outline.js/commit/19d5ee86c414fb5fc08cf15a5f35890c9a11bf43))



## [3.23.4](https://github.com/yaohaixiao/outline.js/compare/3.23.3...3.23.4) (2023-09-01)


### Bug Fixes

* 修复 relative 定位时，独立导航菜单关闭窗口图标未显示的问题； ([9f874b3](https://github.com/yaohaixiao/outline.js/commit/9f874b3a0fe3c9f9582d69046b16c3821b2908e7))



## [3.23.3](https://github.com/yaohaixiao/outline.js/compare/3.23.2...3.23.3) (2023-09-01)


### Bug Fixes

* 去掉 package.json 中的 files 配置 ([826c70e](https://github.com/yaohaixiao/outline.js/commit/826c70e129edede1503ce9e5e71b8c173733c702))



## [3.23.1](https://github.com/yaohaixiao/outline.js/compare/3.23.0...3.23.1) (2023-09-01)


### Bug Fixes

* 调整阅读模式在移动设备的显示效果 ([8c237c7](https://github.com/yaohaixiao/outline.js/commit/8c237c79fdee88d2c87e519334b4d4b98c2ef33f))



# [3.23.0](https://github.com/yaohaixiao/outline.js/compare/3.22.1...3.23.0) (2023-08-31)


### Features

* 调整打印样式中文章标题的下边距 ([6691f8d](https://github.com/yaohaixiao/outline.js/commit/6691f8d48002210b9373ed773d1bc231acb7f972))
* 调整所有 DOM 元素的绘制逻辑，调用 createElement() 方法中的插入单个子元素，直接用 DOM 元素，较少数组循环的多余调用成本；
* 调整 print() 方法，将更新邻居节点逻辑提取为独立的私有方法； ([4a96ecf](https://github.com/yaohaixiao/outline.js/commit/4a96ecfd5f460a39875754a3cc59104f1628d36d))



## [3.22.1](https://github.com/yaohaixiao/outline.js/compare/3.22.0...3.22.1) (2023-08-29)


### Bug Fixes

* 修复 sticky 定位，窗口调整大小，chapters 导航栏高度没有自适应窗口大小变化的问题 ([4694b3c](https://github.com/yaohaixiao/outline.js/commit/4694b3cdb8ab131862f15da760b7222d9562f104))



# [3.22.0](https://github.com/yaohaixiao/outline.js/compare/3.21.0...3.22.0) (2023-08-29)


### Features

* 调整打印样式中文章标题的下边距；
* 调整代码结构，重新打包文件 ([556e186](https://github.com/yaohaixiao/outline.js/commit/556e1869a4c73762589a2756287d90efaca2b47a))



# [3.21.0](https://github.com/yaohaixiao/outline.js/compare/3.20.1...3.21.0) (2023-08-29)


### Features

* 添加 $emit()、$on()、$off() 方法；
* 添加 created、mounted、enterReading、exitReading、beforeDestroy 和 destroyed 事件； ([88b087d](https://github.com/yaohaixiao/outline.js/commit/88b087d4fbf44bc6dd95cd96462e8c666b3eaeb3))



## [3.20.1](https://github.com/yaohaixiao/outline.js/compare/3.20.0...3.20.1) (2023-08-28)


### Bug Fixes

* 修复针对 Wordpress 文章页进入阅读模式时，顶部导航栏仍然显示的问题； ([11f310b](https://github.com/yaohaixiao/outline.js/commit/11f310bc691ddc8f22239663ee71f845cd6912bc))



# [3.20.0](https://github.com/yaohaixiao/outline.js/compare/3.19.1...3.20.0) (2023-08-26)


### Features

* 针对移动设备在阅读模式添加推出阅读模式按钮 ([60d3b02](https://github.com/yaohaixiao/outline.js/commit/60d3b02e0544b4d3c9aca9cfef24b09c01ac573b))



## [3.19.1](https://github.com/yaohaixiao/outline.js/compare/3.19.0...3.19.1) (2023-08-25)


### Bug Fixes

* 修复同一个页面多次实例化 Outline 对象可能出现的属性配置不正确问题； ([582a66f](https://github.com/yaohaixiao/outline.js/commit/582a66fa1f46460a5febc093b574604d0526ea25))



# [3.19.0](https://github.com/yaohaixiao/outline.js/compare/3.18.1...3.19.0) (2023-08-24)


### Features

* 功能扩展，（在配置打印样式后）有纯净的阅读视图（按ESC键可退出）； ([966c113](https://github.com/yaohaixiao/outline.js/commit/966c1135a40d06053c3d34096eadcf29ece3dc96))



## [3.18.1](https://github.com/yaohaixiao/outline.js/compare/3.18.0...3.18.1) (2023-08-23)


### Bug Fixes

* 修复 icons 工具方法集中的 createElement() 方法中的一次设置多个样式的问题； ([182329d](https://github.com/yaohaixiao/outline.js/commit/182329db3afcae91a391d4fe893c96c7868287e9))



# [3.18.0](https://github.com/yaohaixiao/outline.js/compare/3.17.1...3.18.0) (2023-08-18)


### Features

* 优化 _getChaptersWithCode() 方法中的生成章节索引 code 的算法，性能大幅提升； ([22f151f](https://github.com/yaohaixiao/outline.js/commit/22f151f5a4338df5caeb7f292c9152b75565b312))



## [3.17.1](https://github.com/yaohaixiao/outline.js/compare/3.17.0...3.17.1) (2023-08-16)


### Bug Fixes

* 修复配置参数 print.title 为文章标题 DOM 元素，会将正文的标题移动到打印克隆 DOM 元素中的问题 ([a70c1c3](https://github.com/yaohaixiao/outline.js/commit/a70c1c3093e7d24b1e609b832fff05254d3fdff8))



# [3.17.0](https://github.com/yaohaixiao/outline.js/compare/3.16.0...3.17.0) (2023-08-15)


### Features

* 添加 chapterTextFilter 参数，用于处理 chapters 菜单中显示的文本； ([7d57fb1](https://github.com/yaohaixiao/outline.js/commit/7d57fb1e2277ce35a5125b4d903eea49d6188d57))



# [3.16.0](https://github.com/yaohaixiao/outline.js/compare/3.15.0...3.16.0) (2023-08-15)


### Features

* 调整 title 配置参数的可选值，增加设置“”或者false，不显示导航菜单的标题栏；调整 toolbar 工具栏内置按钮的显示顺序； ([a143ed9](https://github.com/yaohaixiao/outline.js/commit/a143ed93f0ea6c35f1c4fca4771e8b5582594f31))



# [3.15.0](https://github.com/yaohaixiao/outline.js/compare/3.14.0...3.15.0) (2023-08-15)


### Features

* 优化 print 配置细节，title 可以是 DOM 元素，使标题可以自动变化，更加灵活； ([0798bfc](https://github.com/yaohaixiao/outline.js/commit/0798bfc82d927e767366996c6904016723cf1d38))



# [3.14.0](https://github.com/yaohaixiao/outline.js/compare/3.13.2...3.14.0) (2023-08-14)


### Features

* 添加 print 配置，支持 print 基础打印样式 ([2e43a50](https://github.com/yaohaixiao/outline.js/commit/2e43a50107156009861fc383bac6f065e69b8914))



## [3.13.2](https://github.com/yaohaixiao/outline.js/compare/3.13.1...3.13.2) (2023-08-14)


### Bug Fixes

* 修复初始化 scrollElement.scrollTop = 0 时，向上按钮未隐藏的问题 ([f36fcb1](https://github.com/yaohaixiao/outline.js/commit/f36fcb1f61e575d8d887b1b534949d51d0c00b89))



## [3.13.1](https://github.com/yaohaixiao/outline.js/compare/3.13.0...3.13.1) (2023-08-11)


### Bug Fixes

* 修复 # 图标没有显示的问题；调整了 chapters 绘制的 DOM 的逻辑； ([bfe92ca](https://github.com/yaohaixiao/outline.js/commit/bfe92ca81b36ac0097aa27c0b9238215870cc793))



# [3.13.0](https://github.com/yaohaixiao/outline.js/compare/3.12.3...3.13.0) (2023-08-11)


### Features

* 添加 tools 配置添加自定义按钮配置；添加 addButton() 和 removeButton() 两个方法，用来在工具栏添加按钮或者移除工具栏按钮 ([d63fd62](https://github.com/yaohaixiao/outline.js/commit/d63fd6289f89d8227cd8eb63036cebd65aa8171c))



## [3.12.3](https://github.com/yaohaixiao/outline.js/compare/3.12.2...3.12.3) (2023-08-10)


### Bug Fixes

* 修复页面没有 h1~h6 标签，上下滚动按钮点击报错的问题； ([e9c78d6](https://github.com/yaohaixiao/outline.js/commit/e9c78d6ca883a0f069d951f74433e779813187d7))



## [3.12.2](https://github.com/yaohaixiao/outline.js/compare/3.12.1...3.12.2) (2023-08-10)


### Bug Fixes

* 不准备支持 typescript 了 ([85d6333](https://github.com/yaohaixiao/outline.js/commit/85d63334e9cdefe061156a102e959d39d58c3ecf))



# [3.12.0](https://github.com/yaohaixiao/outline.js/compare/3.11.0...3.12.0) (2023-08-10)


### Features

* 调整 _getChaptersWithCode() 方法，优化算法 ([7c3fbd1](https://github.com/yaohaixiao/outline.js/commit/7c3fbd1ef2d4dcc6188d22a9a23330a0510e8c2b))



# [3.11.0](https://github.com/yaohaixiao/outline.js/compare/3.10.3...3.11.0) (2023-08-09)


### Features

* 添加 git, tags 和 issues 配置参数 ([ed3ddf5](https://github.com/yaohaixiao/outline.js/commit/ed3ddf5296c60164c5c95c3b57ac6876513fa1f7))



## [3.10.3](https://github.com/yaohaixiao/outline.js/compare/3.10.2...3.10.3) (2023-08-08)


### Bug Fixes

* chore: 调整 chapters 组件的高亮选中项 placeholder 定位逻辑，采用 transform 替换 top: calc() 模式定位，修复 customClass 调整样式可能带来的定位不准问题



## [3.10.2](https://github.com/yaohaixiao/outline.js/compare/3.10.1...3.10.2) (2023-08-07)


### Bug Fixes

* 调整 _getChaptersWithCode() 方法，移除多余的 index 计算逻辑；添加 VUE 使用 outline.js 的示例； ([6f88985](https://github.com/yaohaixiao/outline.js/commit/6f88985bb95231a1bd976d33b7fc5f32d6b3c24a))



## [3.10.1](https://github.com/yaohaixiao/outline.js/compare/3.10.0...3.10.1) (2023-08-07)


### Bug Fixes

* 修复 Outline 模块，reload()后导航菜单不显示子菜单和点击菜单会报错的问题 ([21c8ed3](https://github.com/yaohaixiao/outline.js/commit/21c8ed38ef469f89a7fab6d6bbe38465cfa32837))



# [3.10.0](https://github.com/yaohaixiao/outline.js/compare/3.9.0...3.10.0) (2023-08-05)


### Features

* 添加 afterScroll 配置参数，在滚动结束后触发的回调函数 ([db5a2d9](https://github.com/yaohaixiao/outline.js/commit/db5a2d9be8e9e13652de2b175c5a26d4aa2a47b6))



# [3.9.0](https://github.com/yaohaixiao/outline.js/compare/3.8.0...3.9.0) (2023-08-05)


### Features

* 调整 scrollTo() 方法的滚动动画处理方式，用 requestAnimationFrame() 替换原本的 setTimeout() ([a235c3b](https://github.com/yaohaixiao/outline.js/commit/a235c3bcffdc1bb5e993a4948857ba8ec986dd0c))




## [3.8.1](https://github.com/yaohaixiao/outline.js/compare/3.8.0...3.8.1) (2023-08-03)


### Bug Fixes

* 修复添加 afterToggle 配置后，调整组件初始化变更导致的 posiiton: relative 菜单显示逻辑错误问题 ([5f8483b](https://github.com/yaohaixiao/outline.js/commit/5f8483b6c5b5363424497b6190591869087dcfb7))




# [3.8.0](https://github.com/yaohaixiao/outline.js/compare/3.7.0...3.8.0) (2023-08-02)


### Features

* 优化_getChaptersWithCode() 方法中生成文章章节 code 的算法，调整 groupBy() 方法，直接生成章节 code，移除 _getChaptersWithCode() 中多余的逻辑。理论上性能提升1倍 ([91fbdff](https://github.com/yaohaixiao/outline.js/commit/91fbdfff5df1ae00280b3081b650e5e3b76fe605))



# [3.7.0](https://github.com/yaohaixiao/outline.js/compare/3.6.0...3.7.0) (2023-08-01)


### Features

* 重构了 _getChapterParentIdByDiffer() 方法，采用更加简洁的编码方式；添加了 afeterSticky 和 afterToggle 两个新的配置参数，并更新的 API 文档；在 fixed.html 示例中展示了新添加的参数的样式用例 ([0d6598f](https://github.com/yaohaixiao/outline.js/commit/0d6598fa6117101b9578b67ef50c362ae35b525a))



# [3.6.0](https://github.com/yaohaixiao/outline.js/compare/3.5.4...3.6.0) (2023-07-31)


### Features

* 优化 showCode = false 时的生成 chapters 数据的信息逻辑 ([26dd10d](https://github.com/yaohaixiao/outline.js/commit/26dd10dd11f3a1bf4da2aeeb224f2251e01fcdee))



## [3.5.4](https://github.com/yaohaixiao/outline.js/compare/3.5.3...3.5.4) (2023-07-27)


### Bug Fixes

* 修复独立侧滑菜单选中状态样式问题，不是 100% 菜单宽度；调整独立侧滑菜单默认高度，调整为height: auto; 最大高度：calc(100% - 4em) ([25dc187](https://github.com/yaohaixiao/outline.js/commit/25dc1874e462f268ed4c80b93a58d299d24c15ff))



## [3.5.3](https://github.com/yaohaixiao/outline.js/compare/3.5.2...3.5.3) (2023-07-25)


### Bug Fixes

* 修复 Outline 模块中， toTop() 方法高亮第一个导航标题的 count() 判断错误，并移除 toTop() 和 toBottom() 方法中多余的 afterScroll 执行逻辑； ([6e34d3a](https://github.com/yaohaixiao/outline.js/commit/6e34d3a1d5a20302fee9f1fca842fb206e0de154))



## [3.5.2](https://github.com/yaohaixiao/outline.js/compare/3.5.1...3.5.2) (2023-07-25)


### Bug Fixes

* 修复侧边栏 toggle() 动画过度被 fixed 或者 sticky 定位的导航菜单遮挡的问题；添加新的示例页面； ([d995130](https://github.com/yaohaixiao/outline.js/commit/d995130a9cae97531aa9bc09b6516c1d421afa08))



## [3.5.1](https://github.com/yaohaixiao/outline.js/compare/3.5.0...3.5.1) (2023-07-25)


### Bug Fixes

* 修复动态生成 anchor 图标链接点击滚动定位，对于页面有 sticky 定位元素，定位不准的问题，给 chapters 模块也添加 stickyHeight 参数；修复对于 fixed 定位，导航菜单模拟 sticky 定位后，导航菜单宽度变化挡住文章内容的问题； ([094f45d](https://github.com/yaohaixiao/outline.js/commit/094f45d00804a8cd965c02b0dadb7cde0bbe9360))



# [3.5.0](https://github.com/yaohaixiao/outline.js/compare/3.4.0...3.5.0) (2023-07-24)


### Features

* UI 细节优化，针对 parentElement 在 CSS 中设置了具体 width 值，outline.toggle() 添加动画过度；并更新 examples 相关页面 ([04079bb](https://github.com/yaohaixiao/outline.js/commit/04079bba7db1b71ff8eb5698f6ce7c139969b9b9))



# [3.4.0](https://github.com/yaohaixiao/outline.js/compare/3.3.6...3.4.0) (2023-07-24)


### Features

* 添加 stickyHeight 配置参数，用以优化页面有其它（模拟） sticky 定位的 DOM 元素的滚动定位计算 ([9af8044](https://github.com/yaohaixiao/outline.js/commit/9af8044a3149c03dc716ca8daa290d4d4a7d8598))



## [3.3.6](https://github.com/yaohaixiao/outline.js/compare/3.3.5...3.3.6) (2023-07-24)


### Bug Fixes

* 修复 fixed 定位，初始化界面就有滚动时的定位问题 ([19c5b8b](https://github.com/yaohaixiao/outline.js/commit/19c5b8b8b217566e74f52a4784f160e10c8ab81c))



## [3.3.5](https://github.com/yaohaixiao/outline.js/compare/3.3.4...3.3.5) (2023-07-23)


### Bug Fixes

* 添加 zIndex() 方法，处理目录菜单被页面其他 fixed 或者 sticky 定位的 DOM 元素覆盖 ([27ca25a](https://github.com/yaohaixiao/outline.js/commit/27ca25ab21be390dea0a1eb2a614abe0e6ac7301))



## [3.3.4](https://github.com/yaohaixiao/outline.js/compare/3.3.3...3.3.4) (2023-07-22)


### Bug Fixes

* 修复 sticky 定位时，在文章段落多，导航菜单高度超过 viewport 高度时无法显示的问题；优化 fixed 定位的 UI 细节；调整 drawer 的 title UI 细节 ([5bfbac3](https://github.com/yaohaixiao/outline.js/commit/5bfbac36cec77dc6fa556a19001b19f9b291a375))



## [3.3.3](https://github.com/yaohaixiao/outline.js/compare/3.3.2...3.3.3) (2023-07-21)


### Bug Fixes

* 修复 relative 定位，标题文字超长换行导致高亮当前标题定位不准问题；修复获取标题offsetTop值不准确的问题 ([1064308](https://github.com/yaohaixiao/outline.js/commit/10643084d159c46b8bc0802b1b128026ec71f34d))



## [3.3.2](https://github.com/yaohaixiao/outline.js/compare/3.3.1...3.3.2) (2023-07-21)


### Bug Fixes

* 修复针对 webkit 内核浏览器的滚动条优化样式缺失 ([a33a486](https://github.com/yaohaixiao/outline.js/commit/a33a4868f06463ba3e2676c438ec145f857d8dab))



## [3.3.1](https://github.com/yaohaixiao/outline.js/compare/3.3.0...3.3.1) (2023-07-21)


### Bug Fixes

* 修复 sticky 和 fixed 定位，菜单按钮控制逻辑问题（应该隐藏页面中的目录导航） ([e5852c1](https://github.com/yaohaixiao/outline.js/commit/e5852c1dc5192bd16abb62b40a4e674dfb248a39))



# [3.3.0](https://github.com/yaohaixiao/outline.js/compare/3.2.0...3.3.0) (2023-07-21)


### Features

* 调整 getChapters() 方法，可以获取树结构的数据；添加 homepage 配置参数；调整 Toolbar 按钮样式； ([b6193de](https://github.com/yaohaixiao/outline.js/commit/b6193de64288dd9d2c7093707970a543696a40f3))



# [3.2.0](https://github.com/yaohaixiao/outline.js/compare/3.1.0...3.2.0) (2023-07-20)


### Features

* 添加 count() 方法；调整 createElement() 方法；调整 outline 的 scrollTo() 方法，不再依赖 anchors 实例 ([57964d0](https://github.com/yaohaixiao/outline.js/commit/57964d08d462f8d2819d265a7213aaae6530744a))
* 优化创建 DOM 界面的性能，使用 DocumentFragment，优化 createElement() 方法 ([da76ccc](https://github.com/yaohaixiao/outline.js/commit/da76cccdfc8c92ad61306e2a4374a85484a26dfa))



# [3.1.0](https://github.com/yaohaixiao/outline.js/compare/3.0.0...3.1.0) (2023-07-19)


### Features

* 添加文章没有 h1~h6 标签的处理逻辑；
* 添加缺失的 customClass 样式设置；
* 修复滚动到底部的距离为浮点数值时，向下按钮没有隐藏问题； ([b5fba4f](https://github.com/yaohaixiao/outline.js/commit/b5fba4f19292e24f1c4ef04456dedfdd8640f1b4))



# [3.0.0](https://github.com/yaohaixiao/outline.js/compare/v2.0.1...v3.0.0) (2023-07-19)


### Features

* 完全重构，发布 3.0.0 版本 ([9856338](https://github.com/yaohaixiao/outline.js/commit/9856338b9a7afe3effb6adc98b40a7546d7c2c41))
* 生成独立模块：anchors.min.js、navigator.min.js、drawer.min.js 和 toolbar.min.js ([47ab76b](https://github.com/yaohaixiao/outline.js/commit/47ab76b2824d2df7de1e780970c76c67173cbe25))
