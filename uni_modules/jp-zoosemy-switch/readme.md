## 阿里矢量图-图标组件
> **组件名：jp-zoosemy-switch**

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

### 本组件为switch开关
####拥有自定义颜色、自定义大小，具体如图所示。采用v-model双向绑定操作，用户使用更加方便

### 用法

```htm
<template>
  <div class="switchx">
    <p class="hader">开关：{{ switchValue ? '开' : '关' }}</p>
    <jp-zoosemy-switch v-model="switchValue"></jp-zoosemy-switch>
	<p class="hader">开关 - 改变颜色：{{ switchValue ? '开' : '关' }}</p>
	<jp-zoosemy-switch color="#00aaff" v-model="switchValue"></jp-zoosemy-switch>
	<p class="hader">开关 - 改变大小 ：{{ switchValue ? '开' : '关' }}</p>
	<jp-zoosemy-switch size="200" v-model="switchValue"></jp-zoosemy-switch>
	<p class="hader">开关 - 改变颜色 - 改变大小 ：{{ switchValue ? '开' : '关' }}</p>
	<jp-zoosemy-switch  color="#ff0000" size="60" v-model="switchValue" style="margin-right: 5px;"></jp-zoosemy-switch>
	<jp-zoosemy-switch color="#ff5500" size="80" v-model="switchValue" style="margin-right: 5px;"></jp-zoosemy-switch>
	<jp-zoosemy-switch color="#ffff00" size="100" v-model="switchValue" style="margin-right: 5px;"></jp-zoosemy-switch>
	<jp-zoosemy-switch color="#00aa00" size="120" v-model="switchValue" style="margin-right: 5px;"></jp-zoosemy-switch>
	<jp-zoosemy-switch color="#0055ff" size="140" v-model="switchValue"></jp-zoosemy-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue: false, // 开关状态
    };
  },
};
</script>
<style scoped>
	.hader{
		line-height: 80rpx;
	}
	.switchx{
		padding: 0 20rpx;
	}
</style>
```


## API

### 参数
|  属性名	|    类型	| 默认值	| 说明			|
|			|			|			|				|
| value		|  [String, Array]	| |  初始值，多选时必须为数组	|
| size		| String|	55rpx| 按钮大小		|
| color		| String|#6d5dfc	| 按钮颜色		|



### 事件

|  事件名	|    类型	|  回调参数	|    说明		|
|			|			|			|				|
| input	| function	|当前选择的数据| 	|




