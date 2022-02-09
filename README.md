# 24-solar-terms

#### 计算24节气的小工具

* 将24 solar terms.js引入项目中
* 此文件会在Date对象原型中添加`get24SolarTerms`方法
* 传入number`1-24`（代表24节气）
* 返回今年的节气日期

```javascript
const date = new Date();
date.get24SolarTerms(1)//{ month: 2, day: 4 }
```



