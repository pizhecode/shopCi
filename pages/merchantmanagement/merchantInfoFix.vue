<template>
	<view>
		<view class="m40">
      <view v-if="ffM.img != ''">
      	<image :src="conf.uaImgJUrl(ffM.img)" mode="" class="w200 h200"></image>
      </view>
      <view v-else>
      	<image src="/static/logo.png" mode="" class="w200 h200 "></image>
      </view>
		</view>
    <fui-input label="店铺名称" :bottomLeft="0" v-model="ffM.name" placeholder="请输入店铺名称"></fui-input>
    <fui-textarea flexStart label="店铺介绍" placeholder="请输入店铺介绍"></fui-textarea>
    <fui-input label="地址" :bottomLeft="0" v-model="ffM.add" placeholder="请输入地址"></fui-input>
    <fui-input  label="电话" :bottomLeft="0" v-model="ffM.Phone" placeholder="请输入电话"></fui-input>
    <view class="pf b0 vw100">
      <fui-button @click="btnOK()">确定</fui-button>
    </view>
	</view>
</template>

<script>
  import fuiTextarea from "@/components/firstui/fui-textarea.vue"
	import fuiButton from "@/components/firstui/fui-button.vue"
  import fuiInput from "@/components/firstui/fui-input.vue"
	export default {
	  components:{fuiButton,fuiInput,fuiTextarea},
		data() {
			return {
				ffM:{
          name:'',
				  add:'',
				  Phone:'',
          img:''
				}
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
      btnOK(){
        this.conf.uaMsg("修改成功！")
      }
		}
	}
</script>

<style lang="less" scoped>
	
</style>
