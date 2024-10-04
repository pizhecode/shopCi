<template>
    
    <view>
        <view class="content">
            <cc-twoCate colors="#fa436a" :current="currentTwo" :classList="categoryList" :dataList="dataList" :hideShow="true" @cateClick="cateClick" @itemClick="itemClick"></cc-twoCate>
        </view>
        
    </view>
    
</template>



<script>
	export default {
		components: {

		},
		data() {
			return {
				//分类列表
				categoryList: [
          {id: 0,name: '今日新品',}, 
					{id: 1,name: '今日推荐',}, 
					{id: 2,name: '每日特惠',}, 
				],
				// 选中序列
				currentTwo: 0,
				// 右边列表数据
				dataList: [
					{
						title: '精美五彩水果',goods_id: 201,money: '35.90',number: 1,hmoney: '45.90',
						img: 'https://cdn.pixabay.com/photo/2019/05/14/17/11/fruit-4202929_1280.png',
						youhui: true,baoyou: false,stock: 600,
						status: 1, //商品过期状态  0正常  1已失效
					},
				],

			};
		},


		methods: {
			// 分类点击
			cateClick(item) {// 这里可以写分类接口数据请求
				// uni.showModal({title: "点击分类条目",content: '点击分类条目 = ' + JSON.stringify(item)})
        this.currentTwo=item.id;
			},
			itemClick(e) {// 右边条目点击
				// uni.showModal({title: "点击右边商品条目",content: '点击右边商品条目 = ' + JSON.stringify(e)})
        // console.log(e.goods_id);
        this.conf.toPathDt(`/pages/shop/shopDetails?id=${e.goods_id}`)
			},
		}
	}
</script>

<style lang="scss" scoped>
   
</style>