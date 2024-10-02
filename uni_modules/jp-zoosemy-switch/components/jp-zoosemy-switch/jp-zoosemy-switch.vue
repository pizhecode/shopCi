<template>
	<!-- <div :style="{width:(size+'rpx'),height:(size/2+'rpx'),borderRadius: (size/4+'rpx'),background: value?('linear-gradient(330deg, '+ color +' 30%,#fff 100%)'):''}" class="switch" @click="toggleSwitch"
		:class="{ 'switchs': value }">
		<div :style="{width:(size/3+'rpx'),height:(size/3+'rpx'),top: (((size/2)-(size/3))/2)+'rpx',left: value?(size-((size/3)+(((size/2)-(size/3))/2)))+'rpx':(((size/2)-(size/3))/2)+'rpx'}" class="slider"
			:class="{ on: value }"></div>
	</div> -->
	<div :style="{width:(size+'rpx'),height:(size/2+'rpx'),borderRadius: (size/4+'rpx'),background: value?('linear-gradient(330deg, '+ color +' 30%,#fff 100%)'):''}" class="switch" @click="toggleSwitch"
		:class="{ 'switchs': value }">
		<!-- <div :style="{width:(size/1.7+'rpx'),height:(size/1.7+'rpx'),top:'-5rpx',left:value?(size-((size/3)+(((size/2)-(size/3))/2)))+'rpx':'-5rpx'}" class="slider"
			:class="{ on: value }"></div> -->
			<div :style="{width:(size/1.7+'rpx'),height:(size/1.7+'rpx'),top:'-3.9rpx',left:value?(size-((size/3)+(((size/2)-(size/3))/2)))+'rpx':'-5rpx'}" class="slider"
				:class="{ on: value }"></div>
	</div>
</template>

<script>
	export default {
		props: {
			value: Boolean,
			color: {
				type: String,
				default: '#5b0eeb'
			},
			size: {
				type: [Number, String],
				default: 100
			},
		},
		methods: {
			toggleSwitch() {
				// 触发开关状态切换，同时触发自定义事件
				this.$emit('input', !this.value);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.switch {
		position: relative;
		display: inline-block;
		background-color: #eee;
		cursor: pointer;
		box-shadow: 0.3rpx 0.3rpx 22rpx #c8d0e7, -0.2rpx -0.2rpx 22rpx #FFFFFF;
	}

	.switchs {
		// background: linear-gradient(330deg, #5b0eeb 0%,#6d5dfc 50%, #8abdff 100%);
	}

	.slider {
		position: absolute;
		// top: 5px;
		// left: 5px;
		background-color: #777;
		border-radius: 50%;
		transition: left 0.2s;
	}

	.slider.on {
		background-color: #fff;
	}
</style>