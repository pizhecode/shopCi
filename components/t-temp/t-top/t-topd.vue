<template>
	<view>
		
		<view>
			<view class="p20 df aic">
				<view class="df aic">
					<view class="df aic cccc w150" @click="al_adr_show()">
						<view><image class="w30 h30 mr8 mt10" src="/static/imgs/icon/adr.png"></image> </view>
						<view class="fs28">郑州市</view>
					</view>
					<view class="ml20 w535">
						<view class="bcrd2 br50 pl20 pr20 pt5 pb5 df aic jcsb bc000">
							<image class="w40 h40 mr5" src="/static/imgs/icon/so_fff.png"></image>
							<input class="cbbb p10" :value="value" @input="$emit('input', $event.target.value)" placeholder="请输入关键词" placeholder-class="cbbb fs26" />
							<text class="w120 tac bcff7200 ceee br40 pt6 pb8 fs20" @click="so_btn()">搜索</text>
						</view> 
					</view>
				</view>
			</view>
		</view>
		
		<openAlert ref="al_adr" :AlertClass="3" :AlertPosition="'center'">
		    <view class="pf wb100 l0 b0 fs32">
				<view class="pb120 p20 ">
					<view class="bcfff br20 p30 tac h500 owxh">
						<view class="pt20 pb20">郑州市</view>
					</view>
					<view class="bcfff br20 p30 mt10">
						<view class="tac" @click="al_adr_Close()">取消</view>
					</view>
				</view>
			</view>
		</openAlert>
		  
	</view>
</template>

<script>
	import openAlert from '@/components/open-alert/open-alert.vue'
	export default {
		components: { openAlert },
		props: {
			value: String
		},
		data() {
			return {
				
			};
		},
		methods: {
			so_btn(){
				this.$emit('soBtn');
			},
			al_adr_show(){  this.$nextTick(function() { this.$refs.al_adr.Show(); });  },
			al_adr_Close(){  this.$nextTick(function() { this.$refs.al_adr.Close(); });  },
		}
	}
</script>

<style lang="less" scoped>
	
</style>
