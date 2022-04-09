# 极客时间前端架构师笔记

### 前言

#### 公司认可什么价值

- 商业价值
- 业务价值
- 技术价值
- 工程价值

#### 公司如何评价你

- 业务成就 ⭐️⭐️
- 技术难题⭐️
- 工程设施⭐️⭐️

#### 业务型成就

- 业务目标
  	- 理解公司业务的核心目标
  	- 目标转化为指标
- 技术方案
  	- 业务指标到技术指标的转化
  	- 形成纸面方案、完成小规模试验
- 实施方案
  	- 确定实施目标、参与人
  	- 管理实施进度
- 结果评估
  	- 数据采集、数据报表
  	- 向上级汇报

#### 工程型成就

- 目标
  	- 质量、效率
- 方案与实施
  	- 规章制度
  	- 库
  	- 工具
  	- 系统
- 结果
  	- 线上监控

#### 前端技能模型

​							领域知识

​							前端知识

编程能力             架构能力           工程能力



### 浏览器工作原理

#### 浏览器

​		  HTTP                     parse                    css computing                                        layout                                           render

URL ————> HTML ————> DOM ——————————> DOM with CSS ————> DOM with position ————> Bitmap

#### 有限状态机

- 每一个状态都是一个机器
  	- 在每一个机器里，我们可以做计算、存储、输出......
  	- 所有的这些机器接受的输入是一致的
  	- 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器都有确定的下一个状态
  - 每个机器都有确定的下一个状态（Moore）
  - 每个机器根据输入决定下一个状态（Mealy）

#### ISO-OSI七层网络模型

#### HTTP

##### 第一步 HTTP请求总结

- 设计一个HTTP请求的类
- content-type是一个必要的字段，要有默认值
- body是KV格式
- 不同的content-type影响body的格式

##### 第二步 send函数总结

- 在Request的构造函器中收集必要的信息
- 设计一个send函数，把请求真实发送到服务器
- send函数应该是异步的，所以返回Promise

##### 第三步 发送请求

- 设计支持已有的connection或者自己新建connection
- 收到数据传给parser
- 根据parser的状态resolve Promise

##### 第四步 ResponseParser总结

- Response必须分段构造，所以我们要用一个ResponseParser来“装配”
- ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构

##### 第五步 BodyParser总结

- Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
- 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式

























