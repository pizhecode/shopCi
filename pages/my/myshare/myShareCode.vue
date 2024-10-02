<template>
	<view class="">
	    <view>
        <image src="/static/imgs/fx.png" mode=""></image>
      </view>
			<view class="df aic jcc pt50">
				<view class="cfff bcsys2 br99 w200 h70 lh70 tac ml10" @click="saveImage(conf.uaImgJUrl(this.dataList.inviteimg))">保存图片</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		},
		onShow() {
			
			
		},
		methods: {
			saveImage(url) {
				var _this = this;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode != 200) {
							uni.showToast({title: '保存失败',icon: "none",duration: 1000});
							return;
						}
						uni.showToast({title: '已成功保存',icon: "none",duration: 1000})
						let filePath = res.tempFilePath;
						uni.saveImageToPhotosAlbum({
							filePath,
							success: (res) => {
								uni.showToast({
									title: "成功保存到本地相册",
									icon: "none"
								});
							},
							fail: (err) => {
								let errType = err.errMsg.includes(
									"saveImageToPhotosAlbum:fail cancel") ? "取消保存" : "保存失败";
								uni.showModal({title: errType,content: err.errMsg,showCancel: false,});
							},
						});
			
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
</style>