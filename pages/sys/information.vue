<template>
	<view>
    <fui-list>
    	<fui-list-cell arrow @click="upImg()">
    		 <view v-if="ffM.img != ''">
    		   <image :src="conf.uaImgJUrl(ffM.img)" mode="" class="w100 h100 br99"></image>
    		 </view>
    		 <view v-else>
    		   <image src="/static/logo.png" mode="" class="w100 h100 br99"></image>
    		 </view>
    	</fui-list-cell>
    </fui-list>
    <fui-input label="昵称" borderTop placeholder="请输入昵称" :value="ffM.name"></fui-input>
    <fui-list-cell :highlight="false">
    	<view class="fui-list__cell fui-flex__center">
    		<text class="fs32 mr30">性别：</text>
    		<fui-dropdown-menu :isCheckbox="true" selectedColor="" splitLine :options="options"
    			ref="ddmTag" @click="tagItemClick" @close="tagClose">
    			<view class="fui-select fui-flex__between" @tap="tagTap">
    				<text class="fs32">{{tag}}</text>
    				<view class="fui-filter__icon" :class="{'fui-icon__ani':tagShow}">
    					<fui-icon name="turningdown" :size="32"></fui-icon>
    				</view>
    			</view>
    		</fui-dropdown-menu>
    	</view>
    </fui-list-cell>
    <view class="pf b0 vw100">
      <fui-button>提交</fui-button>
    </view>
	</view>
</template>

<script>
  import fuiList from "@/components/firstui/fui-list.vue"
	import fuiDropdownMenu from "@/components/firstui/fui-dropdown-menu.vue"
	import fuiListCell from "@/components/firstui/fui-list-cell.vue"
  import fuiIcon from "@/components/firstui/fui-icon.vue"
  import fuiInput from "@/components/firstui/fui-input.vue"
  import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
		components:{fuiDropdownMenu,fuiListCell,fuiIcon,fuiInput,fuiButton,fuiList},
		data() {
			return {
				options: ['男', '女', '保密'],tag: '请选择',tagShow: false,
        ffM:{
          name:'丁嘉俊',
          img:''
        }
        
      }
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
      upImg() {
        this.conf.upImgHttp(res => {
          this.ffM.img = res;
          
          // this.conf.http('/api/usr/upUimg', {uimg:res}, res => {
          //   this.conf.uaMsg(res.data.msg);
          //   if(res.data.error=='1'){return;}
          //   this.usersInfo.uimg=res;
          // });
          
        })
      },
			tagTap() {
					this.$refs.ddmTag.show()
					this.tagShow = true;
				},
				tagItemClick(e) {
					console.log(e)
					this.tag = e.text
					this.tagClose()
				},
				tagClose() {
					this.tagShow = false;
				}
		}
	}
</script>

<style lang="less" scoped>
	.fui-filter__icon {
		transition: all .15s linear;
	}
	
	.fui-icon__ani {
		transform: rotate(180deg);
	}
	
	.fui-list__cell {
		width: 100%;
	}
	
	.fui-select {
		flex: 1;
		height: 80rpx;
		padding: 32rpx;
		box-sizing: border-box;
		position: relative;
	}
	
	.fui-select::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 200%;
		height: 200%;
		border: 1px solid #eee;
		transform: scale(.5);
		transform-origin: 0 0;
		pointer-events: none;
	}
	.fui-flex__center {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.fui-flex__between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

</style>
