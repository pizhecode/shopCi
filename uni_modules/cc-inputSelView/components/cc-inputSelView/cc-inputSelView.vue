<template>
	<view>
		<view class="inputView">
			<text class="leftTitle">{{leftTitle}}</text>
			<input class="picker" :name="name" :value="value" :placeholder="placeholder" disabled="true" @click="chooseClick" />
			<!-- <image class="arrowImg0" mode="aspectFit" :src="bindImgSrc()"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		props: {
			// 左边标题栏
			leftTitle: {
				type: String,
				default: ""
			},
			// 默认输入占位符
			placeholder: {
				type: String,
				default: ""
			},
			// 输入框name
			name: {
				type: String,
				default: ""
			},
			// 选择输入框值
			value: {
				type: String,
				default: ""
			},

		},
		data() {
			return {


			}
		},
		onLoad() {


		},
		methods: {
			bindImgSrc() {
				// #ifdef VUE3
				return new URL('../assets/img/home/container_bg.png', import.meta.url).href;
				// #endif
				// #ifndef VUE3
				return require('./arrow_right.png');
				// #endif
			},
			chooseClick(e) {
				this.$emit("click", e);
			},
		}
	}
</script>

<style scoped>
</style>