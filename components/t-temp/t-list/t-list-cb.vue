<template>
	<view>
		
		<view class="pl15 pr15 pt20 pb20">
			<view class="df fww">
				<view class="wb50">
					<view class="f22 ceee pr p10 pt0">
						<view class=""> <image class="wb100 h520 br30" src="/static/imgs/icon/goost.png"></image> </view>
						<view class="pa l0 b0 wb100">
							<view class="ml20 mr20 mb30 bcrd7 brbl30 brbr30">
								<view class="pl20 pr20 pb15 pt8">
									<view class="df jcsb">
										<view>名字</view>
										<view>
											<image class="w25 h25 mr5" src="/static/imgs/icon/adr_f.png"></image>
											<text>2km</text>
										</view>
									</view>
									<view class="df jcsb">
										<view>
											<image class="w25 h25 mr5" src="/static/imgs/icon/nv_f.png"></image>
											<text>21</text>
										</view>
										<view>45kg</view>
										<view>170cm</view>
									</view>
									<view class="df jcsb mt10">
										<view><text class="b1ff7200 cff7200 br20 pl20 pr20 pt5 pb7 fs20">打赏</text> </view>
										<view><text class="bcff7200 ceee br20 pl20 pr20 pt6 pb8 fs20" @click="al_xx_Show()">点击见面</text></view>
									</view>
								</view>
							</view>
						</view>
						<view class="pa r0 t0">
							<view class="mr10 mt30 bcrd7 brtl30 brbl30">
								<!-- <view class="pt5 pb8 pl18 pr10 fs20 df aic">
									<view class="bc67C23A w20 h20 brb50 mt6"></view>
									<view class="ml10">在线</view>
								</view> -->
								<view class="pt5 pb8 pl18 pr10 fs20 df aic">
									<view class="bcE6A23C w20 h20 brb50 mt6"></view>
									<view class="ml10">忙碌</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="wb50">
					<view class="f22 ceee pr p10 pt0">
						<view class=""> <image class="wb100 h520 br30" src="/static/imgs/icon/goost.png"></image> </view>
						<view class="pa l0 b0 wb100">
							<view class="ml20 mr20 mb30 bcrd7 brbl30 brbr30">
								<view class="pl20 pr20 pb15 pt8">
									<view class="df jcsb">
										<view>名字</view>
										<view>2km</view>
									</view>
									<view class="df jcsb">
										<view>21</view>
										<view>45kg</view>
										<view>170cm</view>
									</view>
									<view class="df jcsb mt10">
										<view><text class="b1ff7200 cff7200 br20 pl20 pr20 pt5 pb7 fs20">打赏</text> </view>
										<view><text class="bcff7200 ceee br20 pl20 pr20 pt6 pb8 fs20">点击见面</text></view>
									</view>
								</view>
							</view>
						</view>
						<view class="pa r0 t0">
							<view class="mr10 mt30 bcrd7 brtl30 brbl30">
								<view class="pt5 pb8 pl18 pr10 fs20 df aic">
									<view class="bc67C23A w20 h20 brb50 mt6"></view>
									<view class="ml10">在线</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="wb50">
					
				</view>
			</view>
		</view>
		
		
		<openAlert ref="al_xx" :AlertClass="3" :AlertPosition="'center'">
		    <view class="pf wb100 l0 b0 fs32">
				<view class="pb100">
					<view class="bcfff pb40 brtl10 brtr10">
						<view class="df pl30 pr30 pt40 pb40">
							<view class="dfg0">
								 <image class="w120 h150 br20 mr30" src="/static/imgs/icon/goost.png"></image>
							</view>
							<view class="dfg1">
								<view class="fs36 fwb">姓名</view>
								<view class="mt15 fs28 c666 ohd2">一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述一句话描述</view>
							</view>
						</view>
						<view class="p30 pt0 pb0 h500 owxh">
							
							<view class="pt15 pb15 df aic fs30">
								<view class="dfg1 df jcsb">
									<view>看电影</view>
									<view class="mr40 cff7200">128/小时</view>
								</view>
								<view class="dfg0 bceee">
									<uni-number-box :min="0" :max="9999" :value="0" @blur="(e)=>{ch_blur('abc',e)}" @change="(value)=>{ch_cg('abc',value)}" />  
								</view>
							</view>
							<view class="pt15 pb15 df aic fs30">
								<view class="dfg1 df jcsb">
									<view>游戏</view>
									<view class="mr40 cff7200">128/小时</view>
								</view>
								<view class="dfg0 bceee">
									<uni-number-box :min="0" :max="9999" :value="0"@blur="(e)=>{ch_blur('abc',e)}" @change="(value)=>{ch_cg('abc',value)}" />
								</view>
							</view>
							
							
							
						</view>
						<view>
							<view class="df jcsb pl30 pr30 pt40">
								<view class="cff7200">合计：￥0</view>
								<view><text class="bcff7200 cfff pl100 pr100 pt15 pb16 br50" @click="toOrder()">提交</text></view>
							</view>
						</view>
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
			AlertPosition: { type: String, default: 'center' },
		},
		data() {
			return {
				ch:{
					val:0,
				}
			};
		},
		created() {
		    // this.b_getList();
		},
		methods: {
			al_xx_Show(){  this.$nextTick(function() { this.$refs.al_xx.Show(); });  },
			al_xx_Close(){  this.$nextTick(function() { this.$refs.al_xx.Close(); });  },
			
			ch_cg(item,value){
				this.ch.val=value;
			},
			ch_blur(item,e){//
				console.log('blur:', e.detail.value);
				console.log(item)
			},
			
			toOrder(){
				this.al_xx_Close();
				uni.navigateTo({url:'/pagesUsr/order/ordershow'})
			},
		}
	}
</script>

<style lang="less" scoped>
</style>
