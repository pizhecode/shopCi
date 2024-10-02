# 插件介绍

## 插件原理

> 在微信浏览器中打开会调用微信浏览器独有的 api ，此 api 会有一个回调事件，把播放音频的函数放在回调用可以欺骗浏览器以为是用户触发的事件，这样就可以实习播放打开自动播放。
>
> 当前部分浏览器开始检测到微信的回调，检测到后就会判断出不是用户触发的事件，导致部分手机无法自动播放了。解决办法就是在用户打开页面的时候在页面上放置一层透明的元素，只要用户手指触摸或者滑动到屏幕就会调用播放音频。

## 使用环境

**本插件只支持H5平台**

## 插件使用

**插件已支持 uni_modules 支持组件easycom，以下代码演示的是普通使用**

**改变图片与位置直接去修改源码即可，就懒得写props了**

### 单页面使用

单页面使用比较简单，直接导入注册即可

``` html
<!-- HTML -->
<!-- musicSrc 传入音频链接，本地文件需要已根目录开头传递。如：/static/music.mp3 -->
<mumu-music musicSrc='https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'></mumu-music>
```

``` js
// js
import mumuMusic from '@/uni_modules/mumu-music/components/mumu-music/mumu-music.vue'
	export default {
		components: {
			mumuMusic
		}
  }
```

### 多页面使用

应无法在 App.vue 中直接写入元素，只有另辟蹊径在 main.js 中进行注册，使用 js 代码追加到 body 中。

``` js
// main.js 中的代码
import mumuMusic from '@/uni_modules/mumu-music/components/mumu-music/mumu-music.vue'
// Vue.component 需要放在导入 Vue 之后即可。 Vue3同理
let mumuMusicEl = Vue.component('mumu-music', mumuMusic)
mumuMusicEl = new mumuMusicEl()
// musicSrc 传入音频链接,本地文件没有试过，大家可以试试
mumuMusicEl.$props.musicSrc='https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3'
mumuMusicEl = mumuMusicEl.$mount().$el
document.body.appendChild(mumuMusicEl)

```

## 相关 API

### 可传属性（Props）

| 参数     | 说明                         | 类型             | 默认值         |
| -------- | ---------------------------- | ---------------- | -------------- |
| sizi     | 图标大小（rpx）              | Number \| String | 80             |
| musicSrc | 音频链接（本地需要绝对路径） | String           | 默认的音频链接 |
| autoplay | 是否自动播放                 | Boolean          | true           |

## 案例演示

![img](https://h5plugin.mumudev.top/public/music/qrcode.png)

## 支持作者

![支持作者](https://student.mumudev.top/wxMP.jpg)