<template>
	<view>
        <view>
           <view>需付：￥9.9</view>
        </view>
        <view>
          <view>皮喆：19525541007</view>
          <view>河南省郑州市中原区</view>
        </view>
        
       <view class="m20">
         <view class="bb1999 df aic fs32 pb10">
           <image src="/static/logo.png" mode="" class="w50 h50 lh50"></image>
           <view>店铺名称</view>
         </view>
         
         <view class="pt30 df aic">
           <view>
             <image src="/static/logo.png" mode="" class="w150 h150"></image>
           </view>
           <view class="df jsbs fdc ml20 w400">
             <view>京东超市</view>
             <view>京东描述</view>
             <view>分类</view>
             <view class="df aic jcsb">
               <view>￥9.9</view>
               <view>X1</view>
             </view>
           </view>
         </view>
         
         <view class="">
           <view>订单编号：<text>210123123</text></view>
           <view>下单时间：<text>210123123</text></view>
           <view>商品数量：<text>210123123</text></view>
           <view>商品总额：<text>210123123</text></view>
         </view>
         <view class="df jcfe">应付：<text>￥19.9</text></view>
       </view>
       
       
       <fui-button radius="" width="" height="50rpx" @click="btnPhone()">联系商家</fui-button>
       
       <view class="pf b0 mb20">
           <view class="df aic jcsa vw100">
             <fui-button orderColor="#465CFF" background="#fff" color="#999" radius="" width="300rpx" height="50rpx" @click="btnRemoveOrder()">取消订单</fui-button>
             <fui-button type="danger" radius="" width="300rpx" height="50rpx" @click="btnGoPay()">去支付</fui-button>
           </view>
       </view>
       
       <fui-actionsheet @click="removeOrderOK(12)" @cancel="removeOrder.show=false" :maskClosable=true :show="removeOrder.show" :tips="removeOrder.tips" :itemList="removeOrder.itemList"></fui-actionsheet>
	</view>
</template>

<script>
  import fuiButton from "@/components/firstui/fui-button.vue"
  import fuiActionsheet  from "@/components/firstui/fui-actionsheet.vue"
	export default {
    components:{
    	fuiButton,fuiActionsheet
    },
		data() {
			return {
				title:'',
        removeOrder:{
          show: false,
          tips: '您确定要取消此订单吗？一旦取消，您将无法恢复此订单。',
          itemList: [{
            text: '取消订单',
            color: '#FF2B2B'
          }],
        },
			}
		},
		onShow() {
      uni.setNavigationBarTitle({title: this.title});
		},
		onLoad(e) {
      const Title = {1: '待收货',2: '待付款',3: '已完成',4: '已取消'};
			if (e.title != undefined && e.title != null && e.title != '') {this.title = Title[e.title];};		
		},
		methods: {
      
			btnPhone(){
         // this.conf.http('/api/sysinit/getKeyByVal', {key: 'kefudianhua'}, res => {
         //  this.dataList = res.data.data.vval;
        
          // });
          
          uni.makePhoneCall({
               phoneNumber: '195255541007'
            });
      },
      
      
      //取消订单
      btnRemoveOrder(){
        this.removeOrder.show = true;
      },
      removeOrderOK(id){
        this.removeOrder.show = false;
        this.conf.uaMsg(`取消订单成功id为${id}`)
      },
      btnGoPay(){
        this.conf.toPathDt('/pages/order/pay')
      }
		}
	}
</script>

<style lang="less" scoped>
	
</style>
