<template>
  <view>
    <view class="pl30 pr30 pt30">
      <view class="df jcsb aic">
        <view class="w600">
          <view class="bcccc p10 pl30 pr30"><input @click="conf.toPathDt('/pages/index/so')" placeholder="请输入搜索产品/商户名称"
              placeholder-class="c333" /></view>
        </view>
        <view class="">搜索</view>
      </view>
    </view>

    <view class="pl30 pr30 pt30">
      <view class="mt30 mb30 pb30 bb1ccc" @click="conf.toPathDt('/pages/shop/shopDetails')">
        <view class="df jcsb">
          <view class="df">
            <view class="w220">
              <image class="w200 h200" src="/static/logo.png"></image>
            </view>
            <view>
              <view class="fwb fs32 mt8">京东便利店</view>
              <view class="mt10 h85 w350">描述描述描述描述描述描述描述描述描述描述描述描述</view>
              <view class="mt10">月销量200+</view>
            </view>
          </view>
          <view class="">1.3k</view>
        </view>
        <view class="df jcsb mt20">
          <view>
            <view>
              <image class="w160 h150" src="/static/logo.png"></image>
            </view>
            <view>商品标题</view>
            <view>xxxxxxxxxx</view>
            <view>￥19.99</view>
          </view>
          <view>
            <view>
              <image class="w160 h150" src="/static/logo.png"></image>
            </view>
            <view>商品标题</view>
            <view>xxxxxxxxxx</view>
            <view>￥19.99</view>
          </view>
          <view>
            <view>
              <image class="w160 h150" src="/static/logo.png"></image>
            </view>
            <view>商品标题</view>
            <view>xxxxxxxxxx</view>
            <view>￥19.99</view>
          </view>
          <view>
            <view>
              <image class="w160 h150" src="/static/logo.png"></image>
            </view>
            <view>商品标题</view>
            <view>xxxxxxxxxx</view>
            <view>￥19.99</view>
          </view>
        </view>
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
    onShow() {

    },
    onLoad(e) {

    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>

</style>