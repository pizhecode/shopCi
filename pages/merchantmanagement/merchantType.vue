<template>
	<view>
		<!-- 商户店铺分类 -->
		<fui-swipeaction-group v-for="(item, index) in dataList" :key="index">
			<fui-swipe-action :buttons="buttons" @click="(action) => onClick(item, action)">
				<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">{{ item.name }}</fui-list-cell>
			</fui-swipe-action>
		</fui-swipeaction-group>
    <!-- 增加add -->
  <fui-dialog :show="add.visible" title="添加分类"  :buttons="add.buttons" @click="addOnTap">
     <fui-input borderTop placeholder="请输入分类名称"></fui-input>
  </fui-dialog>
  <!-- 修改updata -->
  <fui-dialog :show="updata.visible" title="修改分类"  :buttons="updata.buttons" @click="updataOnTap">
      <fui-input borderTop placeholder="请输入分类名称" v-model="updata.value"></fui-input>
  </fui-dialog>
  <!-- 删除del-->
  <fui-dialog :show="del.visible" title="删除分类"   :buttons="del.buttons" @click="delOnTap">
      <view>确定要删除{{del.items.name}}分类吗？</view>
  </fui-dialog>
  <view class="pf b0 vw100">
    <fui-button @click="btnAdd()">添加分类</fui-button>
  </view>
	</view>
</template>

<script>
import fuiInput from "@/components/firstui/fui-input.vue"
import fuiListCell from "@/components/firstui/fui-list-cell.vue";
import fuiSwipeactionGroup from "@/components/firstui/fui-swipeaction-group.vue";
import fuiSwipeAction from "@/components/firstui/fui-swipe-action/fui-swipe-action.vue";
import fuiButton from "@/components/firstui/fui-button.vue"
import fuiDialog from "@/components/firstui/fui-dialog.vue"
export default {
	components: { fuiSwipeactionGroup, fuiSwipeAction, fuiListCell,fuiButton,fuiDialog ,fuiInput},
	data() {
		return {
			dataList: [],
			buttons: [{text: '修改',background: '#465CFF',action: 'modify'},{text: '删除',background: '#FF2B2B',action: 'delete'}],
      add:{items:{},visible: false,buttons: [{text: '确定', color: '#FF2B2B' }]},
      updata:{items:{},value:'',visible: false, buttons: [{text: '确定',color: '#FF2B2B' }]},
      del:{items:{},visible: false,buttons: [{text: '确定', color: '#FF2B2B' }]},
      
      
		};
	},
	onShow() {},
	onLoad(e) {
		this.getList();
	},
	methods: {
		onClick(item, action) {
			if (action.item.action === 'modify') {
				console.log(`修改 - ID: ${item.id}`);
        this.updata.visible=true;
        this.updata.items = item; 
        this.updata.value = item.name;
				// 执行修改操作
			} else if (action.item.action === 'delete') {
				// console.log(`删除 - ID: ${item.id}`);
				// 执行删除操作
        this.del.visible=true;
        this.del.items = item; 
			}
		},
    btnAdd(){
      this.add.visible=true;
    },
    addOnTap(){
      this.add.visible=false;
       this.conf.uaMsg(`添加成功`)
    },
    updataOnTap(){
      this.updata.visible=false;
       this.conf.uaMsg(`修改的id是${this.updata.items.id}`)
    },
    delOnTap(){
      this.del.visible=false;
      this.conf.uaMsg(`删除的id是${this.del.items.id}`)
    },
		getList() {
			this.dataList = [
				{ id: 999, name: '商品1' },
				{ id: 888, name: '商品2' },
			];
		},
		change(e) {}
	}
}
</script>



<style>
	.fui-menu__box {
		width: 160rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.fui-menu__btn {
		width: 88rpx;
		height: 88rpx;
		background: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

</style>
