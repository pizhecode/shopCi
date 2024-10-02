<template>
	<div class="switchx">
		<p class="hader">开关 - 改变颜色 - 改变大小 ：{{ switchValue ? '开' : '关' }}</p>
		<jp-zoosemy-switch color="#ff0000" size="60" v-model="switchValue"
			style="margin-right: 5px;"></jp-zoosemy-switch>
		<jp-zoosemy-switch color="#ff5500" size="80" v-model="switchValue"
			style="margin-right: 5px;"></jp-zoosemy-switch>
		<jp-zoosemy-switch color="#ffff00" size="100" v-model="switchValue"
			style="margin-right: 5px;"></jp-zoosemy-switch>
		<jp-zoosemy-switch color="#00aa00" size="120" v-model="switchValue"
			style="margin-right: 5px;"></jp-zoosemy-switch>
		<jp-zoosemy-switch color="#0055ff" style="margin-right: 5px;" size="140" v-model="switchValue"></jp-zoosemy-switch>
        <jp-zoosemy-switch color="#aa00ff" size="160" v-model="switchValue"></jp-zoosemy-switch>
		<p class="hader">开关：{{ switchValue ? '开' : '关' }}</p>
		<jp-zoosemy-switch v-model="switchValue"></jp-zoosemy-switch>
		<p class="hader">开关 - 改变颜色：{{ switchValue ? '开' : '关' }}</p>
		<jp-zoosemy-switch color="#00aaff" v-model="switchValue"></jp-zoosemy-switch>
		<p class="hader">开关 - 改变大小 ：{{ switchValue ? '开' : '关' }}</p>
		<jp-zoosemy-switch size="200" v-model="switchValue"></jp-zoosemy-switch>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				switchValue: false, // 开关状态
			};
		},
	};
</script>
<style scoped>
	.hader {
		line-height: 80rpx;
	}

	.switchx {
		padding: 0 20rpx;
	}
</style>