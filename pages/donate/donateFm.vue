<template>
	<view>
		<view class="m30">
      <view class="mt40  mb30">
        <uni-section title="捐赠物品信息" type="line">
              <uni-data-select v-model="section.value" :localdata="section.range" @change="sectionChange"></uni-data-select>
         </uni-section>
      </view>
    </view>
		
		<view v-for="(pv,indexPv) in pg.pv" :key="indexPv"><view :class="pv.dcss">
				<view v-for="(dts,indexDts) in pv.dts" :key="indexDts"><view :class="dts.lcss">
					<view v-for="(lts,indexLts) in dts.lts" :key="indexLts">
						
						<view v-if="lts.ht=='text'" :class="lts.class">{{lts.lable}}</view>
						<view v-if="lts.ht=='input'" :class="lts.class"><input v-model="lts.model" :placeholder="lts.placeholder" /> </view>
						<view v-if="lts.ht=='botton'" :class="lts.class" @click="btnOK()">{{lts.lable}}</view>
						
					</view>
				</view></view>
		</view></view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
        section:{
            value: 0,
            range: [
              { value: 0, text: "篮球" },
              { value: 1, text: "足球" },
              { value: 2, text: "游泳" },
            ],
        },
        
        //input
				pg:{pv:[
					{dcss:'m30',dts:[
						{lcss:'mt40 df mb30',lts:[
							{ht:'text', class:'w200',lable:'捐赠数量'},
							{ht:'input',class:'bb1ccc pb20 w490',placeholder:'请输入捐赠数量',model:''},
						]},
						{lcss:'mt40 df mb30',lts:[
							{ht:'text', class:'w200',lable:'捐赠者姓名'},
							{ht:'input',class:'bb1ccc pb20 w490',placeholder:'请输入捐赠者姓名',model:''},
						]},
            {lcss:'mt40 df mb30',lts:[
            	{ht:'text', class:'w200',lable:'捐赠者电话'},
            	{ht:'input',class:'bb1ccc pb20 w490',placeholder:'请输入捐赠者电话',model:''},
            ]},
            {lcss:'mt40 df mb30',lts:[
            	{ht:'text', class:'w200',lable:'捐赠者邮箱'},
            	{ht:'input',class:'bb1ccc pb20 w490',placeholder:'请输入捐赠者邮箱',model:''},
            ]},
            {lcss:'mt40 df mb30',lts:[
            	{ht:'text', class:'w200',lable:'上门收捐地址'},
            	{ht:'input',class:'bb1ccc pb20 w490',placeholder:'请输入上门收捐地址',model:''},
            ]},
					]},
					{dcss:'mt100 pl100 pr100',dts:[
						{lcss:'',lts:[
							{ht:'botton', class:'tac bcsys cfff pt20 pb20 br40',lable:'确定'},
						]},
					]}
				]}
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			sectionChange(e) {
			  console.log("e:", e);
			 },
       btnOK(){
         // console.log("click me!");
         this.conf.toPathDt('/pages/donate/donateDD')
       }
		}
	}
</script>

<style lang="less" scoped>
	
</style>
