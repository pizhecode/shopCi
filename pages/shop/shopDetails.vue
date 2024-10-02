<template>
	<view>
		
		<view class="bceee">
			<view class="p30">
				<view class="bcfff p30 br20">
					<view class="df">
						<view class="mr20"><image class="br20 w200 h200" src="/static/logo.png"></image> </view>
						<view>
							<view></view>
							<view class="df">
								<view class="mr20 fs36">万象超市</view>
								<view class="mr20"><image class="br20 w40 h40" src="/static/logo.png"></image></view>
							</view>
							<view class="df">
								<view class="mr20"><image class="br20 w40 h40" src="/static/logo.png"></image></view>
								<view class="mr20">福田太阳城55号</view>
								<view class="mr20">1.3km</view>
							</view>
							<view>描述描述描述描述描述描述描述描述描述描述描述描述</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="df">
			<view class="bceee w200" style="min-height:1200rpx;">
				<view class="tac pt20 pb20">推荐</view>
				<view class="tac pt20 pb20">分类</view>
				<view class="tac pt20 pb20">分类分类</view>
				<view class="tac pt20 pb20">分类</view>
				<view class="tac pt20 pb20">分类</view>
				<view class="tac pt20 pb20">分类分类</view>
			</view>
			<view class="p30">
         <!-- @click="conf.toPathDt(`/pages/goods/goodsDetails?id=${item.id}`)" -->
				<view class="df mt10 mb40"  v-for="(item, index) in products" :key="index">
					<view class="mr20 w200" ><image class="br20 w200 h200" src="/static/logo.png"></image></view>
					<view class="w270">
						<view class="fs32">{{item.youname}}</view>
						<view class="mt10 fs24">{{item.say}}</view>
						<view class="mt10 fs24">月销{{item.pay}}</view>
						<view class="mt10 df jcsb">
							<view class="fs24">￥{{item.price}}</view>
              <!-- @click="addToCart(item, $event)" -->
							<view class="fs36"  @click="addToCart()">+</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 购物车 -->
     <view class="shopping-cart" @click="goPayCar()">
       
        <!-- <text class="item-count">{{ itemCount }}</text> -->
        
        <uni-badge class="uni-badge-left-margin" :text="itemCount" absolute="rightTop" :offset="[5,7]" size="normal">
        		 <image src="/static/imgs/b/car.png" mode="aspectFit"  class="w100 h100"></image>
        </uni-badge>
      </view>
    
    
    <!-- 弹出 -->
    <uni-popup ref="popup" background-color="#fff" @change="change">
      <view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
        <!-- 1 -->
        <view>
          <view><image src="/static/logo.png" alt="" class="w230 h230" /></view>
          <view>
            <view>￥19.9</view>
            <view>
                <view>已选</view>
                <view>规格1</view>
                <view>规格2</view>
            </view>
          </view>
        </view>
        <!-- 2 -->
        <view class="">规格</view>
        <!-- 3 -->
        <view class="">
        	<view class="pl100 pr100">
        		<view class="tac bcsys cfff pt20 pb20 br30" @click="BtnTanOK()">确定</view>
        	</view>
        </view>
      </view>
    </uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products:[
          {id:1,youname:"苹果",say:"苹果描述",pay:"500+",price:"10"},
        ],
         itemCount: 0,//g购物车数量
         type:''
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
     change(e) {
     	// console.log('当前模式：' + e.type + ',状态：' + e.show);
     },
     //点加弹出
      addToCart() {
        this.$refs.popup.open("bottom")
      },
      //确定后，关闭弹出
      BtnTanOK(){
        this.$refs.popup.close()
         this.itemCount += 1; // 每点击一次，加一
      },
      goPayCar(){
        if(this.itemCount == 0){
          this.conf.uaMsg("购物车为空")
          return
        }
        this.conf.toPathDt('/pages/cart/cart')
      },
		}


	}
</script>

<style scoped>
.shopping-cart {
  position: fixed; /* 使用 fixed 定位 */
  bottom: 20px; /* 距离底部20px */
  right: 20px; /* 距离右侧20px */
  display: inline-block; /* 使购物车图标和数量在一起 */
}
button {
  margin-top: 20px; /* 按钮与购物车的间距 */
}
</style>