<template>
	<view>
		
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
		<!-- 捐赠信息 -->
		<view class="mt20">
      捐赠信息
			<!-- <rich-text class="info" :nodes="replaceImg(data.info)"></rich-text> -->
		</view>
    <!-- btn -->
		<view class="mt100">
			<view class="pl100 pr100">
				<view class="tac bcsys cfff pt20 pb20 br30" @click="conf.toPathDt('/pages/donate/donateFm')">捐赠</view>
			</view>
		</view>
		
		<view class="h90"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        data: '',
        et: '',
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
			// this.getOne();
		},
		onLoad(e) {
			this.getBanner();
      // this.et = e.et;
		},
		methods: {
			//轮播图  /api/pub/banners/getlist
			getBanner(){
			    this.conf.http('/api/pub/banners/getlist',this.banner.ffM,res => {
			        this.banner.dataList=res.data.data;
			        this.banner.fff.txt2=this.banner.dataList.map(item => item.img).join(',').split(',')
			    });
			},
      
      replaceImg(html) { //script methods 方法  处理富文本默认图片大小
      	if (!html) return ''; // Add a check to return an empty string if html is undefined
      	let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
      		match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
      		match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
      		match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
      		return match;
      	});
      	newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
      		match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,'max-width:100%;');
      		return match;
      	});
      	newContent = newContent.replace(/<br[^>]*\/>/gi, '');
      	newContent = newContent.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
      	return newContent;
      
      },
      getOne() {
      	this.conf.http('/api/pub/details/getByETitle', {etitle:this.et}, res => {
      		this.data = res.data.data;
      		uni.setNavigationBarTitle({title: this.data.title});
      	});
      }
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .info img {
		max-width: 100%;
	}
</style>