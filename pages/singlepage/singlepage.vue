<template>
	<view class="">
		<view><rich-text class="info" :nodes="replaceImg(data.info)"></rich-text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: '',
				et: ''
			};
		},
		onLoad(e) {
			this.et = e.et;
		},
		onShow() {
			this.getOne();
		},
		methods: {
			replaceImg(html) { //script methods 方法  处理富文本默认图片大小
				if (!html) return ''; // Add a check to return an empty string if html is undefined
				let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
					match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
					match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
					match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
					return match;
				});
				newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
					match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi,'max-width:100%;');
					return match;
				});
				newContent = newContent.replace(/<br[^>]*\/>/gi, '');
				newContent = newContent.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
				return newContent;

			},
			getOne() {
				this.conf.http('/api/pub/details/getByETitle', {etitle:this.et}, res => {
					this.data = res.data.data;
					uni.setNavigationBarTitle({title: this.data.title});
				});
			}
		}
	};
</script>
<style lang="less" scoped>
	/deep/ .info img {
		max-width: 100%;
	}
</style>