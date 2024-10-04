<template>
	<view>
    <fui-tabs :tabs="tabs" @change="Select"></fui-tabs>
   
    <view class="m20">
       <view class="bb1999 df aic jcsb fs32 pb10">
         <view>店铺名称</view>
         <view class="cf00">店铺状态</view>
       </view>
       
       <view class="pt30 df aic">
         <view>
           <image src="/static/logo.png" mode="" class="w150 h150"></image>
         </view>
         <view class="df jsbs fdc ml20">
           <view>下单时间：<text>2024.10.10 19:00:00</text></view>
           <view>订单编号：<text>21212312312312313231</text></view>
           <view>下单数量：<text>3件</text></view>
           <view>商品总数：<text>￥19.90</text></view>
         </view>
       </view>
       
       <view class="df aic jcsa mt20">
           <fui-button orderColor="#465CFF" background="#fff" color="#999" radius="96rpx" width="300rpx" height="50rpx" @click="btnRemoveOrder()">取消订单</fui-button>
           <fui-button type="danger" radius="96rpx" width="300rpx" height="50rpx" @click="btnGoPay()">去支付</fui-button>
       </view>
       
       <fui-actionsheet @click="removeOrderOK()" @cancel="removeOrder.show=false,removeOrder.id=''" :show="removeOrder.show" :tips="removeOrder.tips" :itemList="removeOrder.itemList"></fui-actionsheet>
    </view>
	</view>
</template>

<script>
import fuiTabs from "@/components/firstui/fui-tabs.vue"
import fuiButton from "@/components/firstui/fui-button.vue"
import fuiActionsheet  from "@/components/firstui/fui-actionsheet.vue"
export default {
	components:{
		fuiTabs,fuiButton,fuiActionsheet 
	},
		data() {
			return {
        tabs: ['全部','待付款','待发货','已完成','已取消'],
        removeOrder:{
          show: false,
          tips: '您确定要取消此订单吗？一旦取消，您将无法恢复此订单。',
          itemList: [{
            text: '取消订单',
            color: '#FF2B2B'
          }],
        },
        
				dataList: [],
        dataListMsg: '',
        ffM: {
          page: 1,
          size: 15,
          pages: 0,
          state: ''
        },
			}
		},
		onShow() {
			// this.getList();
		},
		onLoad(e) {
      if (e.gogo != undefined && e.gogo != null && e.gogo != '') {
        this.ffM.state = e.gogo;
      };
    },
    onReachBottom() {
      if (this.ffM.page < this.ffM.pages) {
        this.ffM.page++;
      }
    },
		methods: {
      Select(value){
        // console.log(value);
        this.dataList = [];
        this.dataListMsg = '';
        this.ffM = {page: 1,size: 15,pages: 0,state: value.index};
        this.getList('cl');
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
        this.conf.toPathDt(`/pages/my/myorder/myorderDetails?title=${1}`)
      },
			getList(cl) { //参与记录
          this.conf.http('/api/orders/getList', this.ffM, res => {
            let rList = res.data.data;
            if (rList < 1) {this.dataListMsg = '暂无更多数据';return;}
            if (cl != '') {this.dataList = [];}
            rList.forEach(item => {
              this.dataList.push(item);
            });
            this.ffM.pages = res.data.pages;
          });
        },
		}
	}
</script>

<style lang="less" scoped>
	
</style>
