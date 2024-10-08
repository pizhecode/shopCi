<template>
	<view>
    <!-- 申请店铺 -->
   <!-- <uni-section title="设置密码" type="line">
      
    </uni-section> -->
    <uni-section title="店铺信息" type="line">
      <fui-list-cell arrow @click="show = true">
         <view class="fui-list__item">
           <text class="fs32">店铺行业</text>
           <text class="fui-text__explain">{{ffM.title}}</text>
         </view>
       </fui-list-cell>
       
       <fui-input label="店铺名称" borderTop placeholder="请输入店铺名称"></fui-input>
       <fui-input label="店铺位置" borderTop placeholder="请输入店铺位置"></fui-input>
    </uni-section>
   
   <uni-section title="门头照" type="line">
      <view class="p30" @click="btnImage1()">
        <view v-if="ffM.img1 != ''">
          <image :src="conf.uaImgJUrl(ffM.img1)" mode="" class="w200 h200"></image>
        </view>
        <view v-else>
          <image src="/static/imgs/b/addImage.png" mode="" class="w200 h200"></image>
        </view>
      </view>
   </uni-section>
    <uni-section title="营业执照" type="line">
      <view class="p30" @click="btnImage2()">
        <view v-if="ffM.img2 != ''">
          <image :src="conf.uaImgJUrl(ffM.img2)" mode="" class="w200 h200"></image>
        </view>
        <view v-else>
          <image src="/static/imgs/b/addImage.png" mode="" class="w200 h200"></image>
        </view>
      </view>
    </uni-section>
    
    <uni-section title="负责人信息" type="line">
       <fui-input label="联系人" borderTop placeholder="请输入联系人"></fui-input>
       <fui-input label="联系电话" borderTop placeholder="请输入联系电话" maxlength="11"></fui-input>
       <!-- 申请店铺 -->
       <fui-bottom-popup :show="show" @close="closePopup">
       	<view class="fui-scroll__wrap">
       		<view class="fui-title">请选择店铺行业</view>
       		<scroll-view scroll-y class="fui-scroll__view">
       			<fui-list-cell v-for="(item,index) in itemList" :key="index" @click="TitleItem(item)">{{item}}</fui-list-cell>
       		</scroll-view>
       		<view class="fui-icon__close" @tap="closePopup">
       			<fui-icon name="close" :size="48"></fui-icon>
       		</view>
       	</view>
       </fui-bottom-popup>
     </uni-section>
     
     1
    <view  @click="btnTiJiao()" class="w300" style="margin: 0 auto;">
      <fui-button class="tac">提交申请</fui-button>
    </view>
    2
    <view class="tac cf00">审核中</view>
    3
     <view class="tac cf00">审核拒绝</view>
     <view class="tac cf00">原因：xxx</view>
     <view  @click="btnTiJiao()" class="w300" style="margin: 0 auto;">
       <fui-button class="tac">提交申请</fui-button>
     </view>
	</view>
</template>

<script>
   import fuiButton from "@/components/firstui/fui-button.vue"
	import fuiBottomPopup from "@/components/firstui/fui-bottom-popup.vue"
  import fuiListCell from "@/components/firstui/fui-list-cell.vue"
  import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
  import fuiInput from "@/components/firstui/fui-input.vue"
	export default {
		components:{fuiBottomPopup,fuiListCell,fuiIcon,fuiInput,fuiButton},
		data() {
			return {
				show: false,
				itemList: ["水果店","五金店","小吃店"],
        ffM:{
          title:'',
          img1:'',
          img2:'',
        }
        
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			//调用此方法显示底部弹出层
				showPopup(type) {
					this.show = true
				},
				closePopup(type) {
					this.show = false
				},
        TitleItem(item){
          // console.log(item);
          this.ffM.title = item;
          this.show = false;
        },
        btnTiJiao(){
          
        },
        btnImage1(){
          this.conf.upImgHttp(res => {
            this.ffM.img1 = res;
          })
        },
        btnImage2(){
          this.conf.upImgHttp(res => {
            this.ffM.img2 = res;
          })
        }
       
		}
	}
</script>

<style lang="less" scoped>
	.fui-scroll__wrap {
		padding-top: 30rpx;
		position: relative;
	}
	.fui-title {
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		padding-bottom: 24rpx;
	}
	.fui-icon__close {
		position: absolute;
		top: 24rpx;
		left: 24rpx;
	}
	
	.fui-scroll__view {
		width: 100%;
		height: 600rpx;
	}
page {
		font-weight: normal;
		/* 非nvue端使用此变量改变list线条颜色，nvue端请查看文档 */
		/* --fui-color-border:#B2B2B2; */
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-list__item {
		flex: 1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fui-text__explain {
		font-size: 28rpx;
		color: #7F7F7F;
		flex-shrink: 0;
	}

	.fui-list__icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 24rpx;
	}
</style>
