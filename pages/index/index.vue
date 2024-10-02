<template>
	<view>
		
		
		
		<view class="pl30 pr30 pt30">
			<view class="df">
				<view><image class="w40 h40" src="/static/logo.png"></image></view>
				<view class="ml20">郑州市</view>
			</view>
		</view>
		
		
		
		<view class="pl30 pr30 pt30">
			<view class="df jcsb">
				<view><image class="w160 h60" src="/static/logo.png"></image></view>
				<view class="w500">
					<view class="bcccc p10 pl30 pr30"><input @click="conf.toPathDt('/pages/index/so')" placeholder="请输入搜索产品/商户名称" placeholder-class="c333" /></view>
				</view>
			</view>
		</view>
		
		
		<!-- 轮播图 -->
		<view class="pl30 pr30 pt30">
      <view v-if="banner.fff.txt2!=''">
            <swiper class="wb100 h300  oh" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500" >
              <swiper-item v-for="(item, index) in banner.fff.txt2" :key="index">
                <view class="wb100 h300 tac" >
                  <image class="wb100 h300" :src="conf.urlImg+item" mode="scaleToFill"></image>
                </view>
              </swiper-item>
            </swiper>
       </view>
		</view>
		
		
		
		<view class="pl30 pr30 pt30">
			<view class="df jcsb">
				<view class="bcccc w330 h200">
					慈善捐赠
				</view>
				<view class="bcccc w330 h200" @click="conf.toPathDt('/pages/shop/shop')">
					慈善超市
				</view>
			</view>
		</view>
		
		
		
		<view class="pl30 pr30 pt30">
			<view class="bcccc">slogan</view>
		</view>
		
		
		
		
		<view class="pl30 pr30 pt30">
			<view class="df">
				<view class="mr20 fwb">距离最近</view>
				<view class="c888">销量最高</view>
			</view>
			
			<view class="mt30 mb30 pb30 bb1ccc" @click="conf.toPathDt('/pages/shop/shopDetails')">
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
		
		
		
		<view class="pt40"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        //轮播图
				banner:{
				        dataList:[],
                fff:{
                  txt2:'',
                },
				        ffM:{
                    page:'',
                    size:'',
                    tid:1,//   tid类别ID
				        }
				    },
			}
		},
		onShow() {
			
		},
		onLoad(e) {
      // this.getBanner()
		},
		methods: {
			//轮播图  /api/pub/banners/getlist
			getBanner(){
			    this.conf.http('/api/pub/banners/getlist',this.banner.ffM,res => {
			        this.banner.dataList=res.data.data;
              // this.banner.fff.txt1=this.banner.dataList.map(item => item.img).join(',')
              // this.banner.fff.txt2=this.banner.fff.txt1.split(',');
              this.banner.fff.txt2=this.banner.dataList.map(item => item.img).join(',').split(',')
              //http://192.168.31.165:60001/ivwzs/ldb/b1.jpg
              // console.log(this.conf.urlImg+this.banner.fff.txt2[0]);
			    });
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>
