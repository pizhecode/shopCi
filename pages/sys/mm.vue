<template>
	<view>
		<uni-section title="设置密码" type="line">
      <fui-input  @input="inputPassword1" label="密码" borderTop :padding="['20rpx','32rpx']" placeholder="请输入密码" :password="mm.password1">
      		<fui-icon :name="mm.password1?'invisible':'visible'" color="#B2B2B2" :size="50" @click="change1"></fui-icon>
      </fui-input>
      <fui-input  @input="inputPassword2" label="确认密码" borderTop :padding="['20rpx','32rpx']" placeholder="请输入密码" :password="mm.password2">
      		<fui-icon :name="mm.password2?'invisible':'visible'" color="#B2B2B2" :size="50" @click="change2"></fui-icon>
      </fui-input>
    </uni-section>
    <view class="pf b0 vw100">
      <fui-button>提交</fui-button>
    </view>
	</view>
</template>

<script>
  import fuiInput from "@/components/firstui/fui-input.vue"
  import fuiIcon from "@/components/firstui/fui-icon.vue"
  import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
   components:{fuiInput,fuiIcon,fuiButton},
		data() {
			return {
        mm:{
          password1: true,
          password2: true,
        },
        ffM:{
          password1:'',
          password2:''
        }
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			
     inputPassword1(e) {
     		// console.log(e)		
        this.ffM.password1 = e;
     	},
      inputPassword2(e){
        // console.log(e)
        this.ffM.password2 = e;
      },
     change1() {
       console.log("000");
        this.mm.password1 = !this.mm.password1
     },
     change2() {
        this.mm.password2 = !this.mm.password2
     }		
		}
	}
</script>

<style lang="less" scoped>
	
</style>
