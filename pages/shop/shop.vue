<template>
	<view>
		
		<view class="pl30 pr30 pt30">
			<view class="df jcsb">
				<view class="w160 pt10">
					<view class="df">
						<view><image class="w40 h40" src="/static/logo.png"></image></view>
						<view class="ml20">郑州市</view>
					</view>
				</view>
				<view class="w500">
					<view class="bcccc p10 pl30 pr30"><input @click="conf.toPathDt('/pages/index/so')" placeholder="请输入搜索产品/商户名称" placeholder-class="c333" /></view>
				</view>
			</view>
		</view>
		
		<view>
			<view class="mt20 icosCS" v-if="icos.darr.length>0">
				<view class="p20">
					<view class="df fww">
						<view class="tac wb20 pb30" v-for="(item,index) in icos.darr" @click="icos_to(index)">
							<view><image class="w70 h70" :src="item.img"></image></view>
							<view class="fs24 c999">{{item.txt}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		<view class="pl30 pr30">
			<!-- <view class="df">
				<view class="mr20 fwb">距离最近</view>
				<view class="c888">销量最高</view>
			</view>
      -->
			<view>
						<view class="uni-padding-wrap uni-common-mt">
							<uni-segmented-control :current="current" :values="items" :style-type="styleType"
								:active-color="activeColor" @clickItem="onClickItem" />
						</view>
						<view class="content mt30 mb30 pb30 bb1ccc">
							<view v-if="current === 0">
                <view>
                		<view class="df jcsb">
                			<view class="df">
                				<view class="w220"><image class="w200 h200" src="/static/logo.png"></image></view>
                				<view>
                					<view class="fwb fs32 mt8">京东便利店</view>
                					<view class="mt10 h85 w350">描述描述描述描述描述描述描述描述描述描述描述描述</view>
                					<view class="mt10">月销量200+</view>
                				</view>
                			</view>
                			<view class="">1.3k</view>
                		</view>
                		<view class="df jcsb mt20">
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                		</view>
                </view>
              </view>
							<view v-if="current === 1">
                <view>
                		<view class="df jcsb">
                			<view class="df">
                				<view class="w220"><image class="w200 h200" src="/static/logo.png"></image></view>
                				<view>
                					<view class="fwb fs32 mt8">京东便利店</view>
                					<view class="mt10 h85 w350">描述描述描述描述描述描述描述描述描述描述描述描述</view>
                					<view class="mt10">月销量200+</view>
                				</view>
                			</view>
                			<view class="">1.3k</view>
                		</view>
                		<view class="df jcsb mt20">
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                			<view>
                				<view><image class="w160 h150" src="/static/logo.png"></image></view>
                				<view>商品标题</view>
                				<view>xxxxxxxxxx</view>
                				<view>￥19.99</view>
                			</view>
                		</view>
                </view>
              </view>
              <!-- <view v-if="current === 1"><text class="content-text">选项卡2的内容</text></view> -->
						</view>
					</view>
		</view>
		<view class="pt40"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icos:{
					darr:[
						{id:'1',img:'/static/imgs/type/kdy.png',txt:'看电影'},
						{id:'1',img:'/static/imgs/type/gj.png',txt:'逛街'},
						{id:'2',img:'/static/imgs/type/ms.png',txt:'美食'},
						{id:'3',img:'/static/imgs/type/jbs.png',txt:'密室剧本杀'},
						{id:'5',img:'/static/imgs/type/wangba.png',txt:'电竞网咖'},
						{id:'6',img:'/static/imgs/type/jb.png',txt:'静吧酒馆'},
						{id:'6',img:'/static/imgs/type/kge.png',txt:'量贩K歌'},
						{id:'6',img:'/static/imgs/type/yry.png',txt:'一日游(12h)'},
						{id:'6',img:'/static/imgs/type/chwl.png',txt:'吃喝玩乐'},
						{id:'6',img:'/static/imgs/type/nuanchang.png',txt:'暖场'},
						{id:'6',img:'/static/imgs/type/shangwu.png',txt:'商务谈判'},
						{id:'6',img:'/static/imgs/type/chayi.png',txt:'茶艺'},
						{id:'6',img:'/static/imgs/type/gaoerfu.png',txt:'高尔夫'},
						{id:'6',img:'/static/imgs/type/yujia.png',txt:'瑜伽'},
						{id:'6',img:'/static/imgs/type/qiu.png',txt:'球类'},
						{id:'6',img:'/static/imgs/type/yingyu.png',txt:'英语'},
						{id:'6',img:'/static/imgs/type/qilei.png',txt:'棋类'},
						{id:'6',img:'/static/imgs/type/meinv.png',txt:'超高颜值'},
					]
				},
        
        
        items: ['距离最近', '销售最高'],
        styles: [{
            value: 'button',
            text: '按钮',
            checked: true
          },
          {
            value: 'text',
            text: '文字'
          }
        ],
        colors: ['#007aff', '#4cd964', '#dd524d'],
        current: 0,
        colorIndex: 0,
        activeColor: '#007aff',
        styleType: 'text'
      }
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			onClickItem(e) {
							if (this.current !== e.currentIndex) {
								this.current = e.currentIndex
							}
						},
            styleChange(e) {
				if (this.styleType !== e.detail.value) {
					this.styleType = e.detail.value
				}
			},
			colorChange(e) {
				if (this.styleType !== e.detail.value) {
					console.log(e.detail.value);
					this.activeColor = e.detail.value
				}
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		// width: 750rpx;
		padding: 0px 30px;
	}

	.content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.content-text {
		font-size: 14px;
		color: #666;
	}

	.color-tag {
		width: 25px;
		height: 25px;
	}

	.uni-list {
		flex: 1;
	}

	.uni-list-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		background-color: #FFFFFF;
	}


	.uni-list-item__container {
		padding: 12px 15px;
		width: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
	}

	.uni-list-item__content-title {
		font-size: 14px;
	}
</style>

