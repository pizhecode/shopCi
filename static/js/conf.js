const _privateWwwurl = 'http://192.168.31.165:60001'; 
var _conf = {
	url: '' + _privateWwwurl,
	urlUpImg: '' + _privateWwwurl + '/apifile/fileupload',/*上传图片api*/
	urlImg: '' + _privateWwwurl + '/ivwzs',/*访问图片路径前缀*/
	urlDyHd:''+_privateWwwurl+'/m/pages/login/dyLogin',
	version: 'V1.0.1', 
	webTitle:'慈善超市',
	Header() {return {'To': '' + uni.getStorageSync('token'),'Access-Control-Allow-Origin-Lp-api': '13fc9c059c01c51c9fa8e85bd2f58ab35b81479033143698','ydversion': _conf.version,'content-type': 'application/x-www-form-urlencoded'}},
	HeaderImg() {return {'To': '' + uni.getStorageSync('token'),'Access-Control-Allow-Origin-Lp-api': '13fc9c059c01c51c9fa8e85bd2f58ab35b81479033143698','ydversion': _conf.version}},
	
	/**http请求api;  this.conf.http('/api/url',{ id: this.id },res => {   this.data = res.data.data;   });    */
	http(url, params, fun) {return uni.request({url: _conf.url + url,method: 'POST',header: _conf.Header(),data: params,success: res => {if (res.data.error == 2) {uni.showModal({title: '未登录',content: '未登录,无法使用功能',cancelText: '取消',confirmText: '去登录',confirmColor: '#f04646',cancelColor: "#AAA",success(res) {if (res.confirm) {uni.reLaunch({url: '/pages/login/login'})}}})}if (res.statusCode != '200') {console.log('N2url', _conf.url);uni.showToast({title: 'error:N2',icon: "none",duration: 3000})};fun(res);},fail: fa => {uni.showToast({title: "error",icon: "none"});},complete: co => {}});},

	/*获取token;  this.conf.getToken(res=>{ this.usersInfo = res },e=>{ if(!e){ console.log('token错误') } });    */
	getToken(funusr, resDataError) {return uni.request({url: _conf.url + '/api/websocke',method: 'POST',header: _conf.Header(),data: '',success: res => {if (res.statusCode != '200') {uni.showToast({title: 'error:N2',icon: "none",duration: 3000});};if (res.data.error == '1') {resDataError(false);return;}resDataError(true);funusr(res.data.data);},fail: fa => {uni.showToast({title: "error",icon: "none"});resDataError(false);},complete: co => {}});},

	/*到登录页*/
	toLogin() {uni.navigateTo({url: '/pages/login/login'});},
	
	/*返回上一页*/
	toBack() {uni.navigateBack();},
	toBackTm() {setTimeout(function() { uni.navigateBack(); }, 1000);},
	/*确定取消*/
	uaMsgIs(msg,func){uni.showModal({title: '提示：',content: msg,success: function(res) {if(res.confirm) { func(); }}})},
	uaMsg(str) {uni.showToast({title:str , icon: "none"});},
	/*跳转到相应页面*/
	toPathDt(path) {setTimeout(function() {uni.navigateTo({url: path});}, 0);},
	/*复制*/
	uaCc(val) {uni.showToast({title: "复制成功",icon: "none"});
		// #ifdef APP-PLUS || MP-WEIXIN
			uni.setClipboardData({data: value,success: function() {}});
		// #endif
		// #ifdef H5
			var save = function(e) {e.clipboardData.setData('text/plain', val);e.preventDefault();};document.addEventListener('copy', save);return document.execCommand("copy");
		// #endif
	},

	/*拨打电话*/
	uaCall(phone) {uni.makePhoneCall({phoneNumber: "'" + phone + "'"});},



	/*图片增加url前缀返回1张图片*/
	uaImgJUrl(src) {var SrcArr = [];var SrcOne = '';if (src == undefined || src == null || src == '') {return;}if (src.indexOf(',') != -1) {SrcArr = src.split(',');} else {SrcOne = src;}if (SrcOne != '') {if (SrcOne.indexOf('http') != -1) {return SrcOne;} else {return _conf.urlImg + SrcOne;}} else {if (undefined == SrcArr[0] && '' != SrcArr[0]) {return;}if (SrcArr[0].indexOf('http') != -1) {return SrcArr[0];} else {return _conf.urlImg + SrcArr[0];}}},
	/*图片增加url前缀返回N张图片*/
	uaImgJUrlArr(src) {var SrcArr = [];var SrcOne = '';var rArr = [];if (src == undefined || src == null || src == '') {return;}if (src.indexOf(',') != -1) {SrcArr = src.split(',');} else {SrcOne = src;}if (SrcOne != '') {if (SrcOne.indexOf('http') != -1) {return SrcOne;} else {return rArr.push(_conf.urlImg + SrcOne);}} else {if (undefined == SrcArr[0]) {return;}for (var i = 0; i < SrcArr.length; i++) {if (undefined != SrcArr[i] && '' != SrcArr[i]) {if (SrcArr[i].indexOf('http') != -1) {rArr.push(SrcArr[i]);} else {rArr.push(_conf.urlImg + SrcArr[i]);}}}return rArr;}},
	/*替换在线编辑器里面的图片前缀*/
	uaInfoUrl(info) {info = info.replace(/\<img/gi, '<img style="max-width:100%;height:auto" '); /*正则替换*/info = info.replace(/\<video/gi, '<video style="width:100%;" '); /*正则替换*/info = info.replace(/ydf\//g, _conf.urlImg + 'ydf/'); /*正则替换*/return info;},
	/*图片增加url前缀返回1张图片*/
	uaImgJUrlZm(src,zm) {
		var SrcArr = [];
		var SrcOne = '';
		if (src == undefined || src == null || src == '') {
			return;
		}
		if (src.indexOf(',') != -1) {
			SrcArr = src.split(',');
		} else {
			SrcOne = src;
		}
		if (SrcOne != '') {
			if (SrcOne.indexOf('http') != -1) {
				return SrcOne;
			} else {
				SrcOne=SrcOne.substring(0,SrcOne.lastIndexOf('.'))+zm+'.jpg';
				return _conf.urlImg + SrcOne;
			}
		} else {
			if (undefined == SrcArr[0] && '' != SrcArr[0]) {
				return;
			}
			if (SrcArr[0].indexOf('http') != -1) {
				return SrcArr[0];
			} else {
				SrcArr[0]=SrcArr[0].substring(0,SrcArr[0].lastIndexOf('.'))+zm+'.jpg';
				return _conf.urlImg + SrcArr[0];
			}
		}
	},
	/*图片增加url前缀返回N张图片*/
	uaImgJUrlArrZm(src,zm) {
		var SrcArr = [];
		var SrcOne = '';
		var rArr = [];
		if (src == undefined || src == null || src == '') {
			return;
		}
		if (src.indexOf(',') != -1) {
			SrcArr = src.split(',');
		} else {
			SrcOne = src;
		}
		if (SrcOne != '') {
			if (SrcOne.indexOf('http') != -1) {
				return SrcOne;
			} else {
				SrcOne=SrcOne.substring(0,SrcOne.lastIndexOf('.'))+zm+'.jpg';
				return rArr.push(_conf.urlImg + SrcOne);
			}
		} else {
			if (undefined == SrcArr[0]) {
				return;
			}
			for (var i = 0; i < SrcArr.length; i++) {
				if (undefined != SrcArr[i] && '' != SrcArr[i]) {
					if (SrcArr[i].indexOf('http') != -1) {
						rArr.push(SrcArr[i]);
					} else {
						SrcArr[i]=SrcArr[i].substring(0,SrcArr[i].lastIndexOf('.'))+zm+'.jpg';
						rArr.push(_conf.urlImg + SrcArr[i]);
					}
				}
			}
			return rArr;
		}
	},
	uaImgZm(img,zm){
		img=img.substring(0,img.lastIndexOf('.'))+zm+'.jpg';
		return img;
	},
	
	
	
	
	
	
	
	
	
	/* 微信支付*/
	paying(res) {/*支付*/let that = this;return new Promise((resolve, reject) => {uni.requestPayment({provider: 'wxpay',"timeStamp": res.timeStamp,/*时间戳，自1970年以来的秒数*/"nonceStr": res.nonceStr,/*随机串*/"package": res.package,"signType": "MD5",/*微信签名方式*/"paySign": res.paySign,/*微信签名 */success: function(res) {if (res.errMsg == "requestPayment:ok") {resolve()}},fail: function(err) {console.log('fail:' + JSON.stringify(err));}});})},

	/*微信公众号支付;  this.conf.wxPaying(res.data).then(resp=>{   console.log(resp);   });    */
	wxPaying(res) {return new Promise((resolve, reject) => {WeixinJSBridge.invoke('getBrandWCPayRequest', {"appId": res.appId,/*公众号名称，由商户传入*/"timeStamp": res.timeStamp,/*时间戳，自1970年以来的秒数*/"nonceStr": res.nonceStr,/*随机串*/"package": res.package,"signType": "MD5",/*微信签名方式*/"paySign": res.paySign /*微信签名*/},function(res) {if (res.err_msg == "get_brand_wcpay_request:ok") {resolve()} /*支付成功*/if (res.err_msg == "get_brand_wcpay_request:cancel") {uni.showToast({title: "取消支付",icon: 'none',})}if (res.err_msg == "get_brand_wcpay_request:fail") {uni.showToast({title: "支付失败",icon: 'none',})} /*支付失败*/});})},

	/*微信app支付;  this.conf.wxApp(res.data).then(resp=>{   console.log(resp);   });    */
	wxApp(res) {return new Promise((resolve, reject) => {uni.requestPayment({"provider": "wxpay","orderInfo": {"appid": res.appid,/*微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致*/"noncestr": res.noncestr,/*随机字符串*/"package": res.package,/*固定值*/"partnerid": res.partnerid,/*微信支付商户号*/"prepayid": res.prepayid,/*统一下单订单号 */"timestamp": res.timestamp,/*时间戳（单位：秒）*/"sign": res.sign /*签名，这里用的 MD5/RSA 签名*/},success(res) {if (res.errMsg == "requestPayment:ok") {resolve()}},fail(e) {console.log('fail:' + JSON.stringify(e));}})})},
	
	/*微信静默授权*/
	hrefWxSq(invite) {var appid = 'wxd4';var backUrl = _conf.url + "/m/pages/login/wxcode?invite=" + (invite || '');window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + backUrl +"&response_type=code&scope=snsapi_userinfo#wechat_redirect";},
	hrefWxSq2(invite) {var appid = 'wxd4';var backUrl = _conf.url + "/m/pages/two/login/wxcode?invite=" + (invite || '');window.location.href ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" + backUrl +"&response_type=code&scope=snsapi_userinfo#wechat_redirect";},
	/*获取url参数*/	
	getUrlParamCN: function(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");var r = decodeURI(window.location.search).substr(1).match(reg);if (r != null) return unescape(r[2]);return null; /*返回参数值*/},

	/*上传图片;  this.conf.upImgHttp(res=>{   console.log(res);   })    */
	upImgHttp: function(funimg) {return uni.chooseImage({count: 1,/*选择1,2张一起上传*/sizeType: ['original', 'compressed'],sourceType: ['album', 'camera'],	/*可以指定相册,相机;默认者都有*/success: function(res) {const tempFilePaths = res.tempFilePaths; /*图片地址*/const tempFiles = res.tempFiles; /*图片大小*/let resSize = tempFiles[0].size;if (resSize > 6291456) {uni.showToast({title: "上传图片大小不能超过6MB",icon: 'none'});return}uni.getImageInfo({src: res.tempFilePaths[0],success: function(src) {this.originWidth = src.width;this.originHeight = src.height;}});uni.uploadFile({url: _conf.urlUpImg,filePath: res.tempFilePaths[0],header: _conf.HeaderImg(uni.getStorageSync('token')),name: 'file',success: (res) => {if (res.data.error == '1') {uni.showToast({title: "上传失败",icon: 'none'});}funimg(JSON.parse(res.data).filename);},fail: () => {uni.showToast({title: '网络错误',icon: 'none'});},complete: () => {}});}});},
	/*下载图片h5，只能浏览器h5能用  this.conf.fileDownloadFile('https://www.xx.com/xxx.png');   */
	ownloadFileHw(fileAdr){
		// #ifdef H5
		var oA = document.createElement("a");oA.download = '分享'; // 设置下载的文件名，默认是'下载'
		oA.href = fileAdr;document.body.appendChild(oA);oA.click();oA.remove(); // 下载之后把创建的元素删除
		// #endif
		
		// #ifdef APP-PLUS
		uni.downloadFile({url:fileAdr,success: downloadResult => { if (downloadResult.statusCode === 200) {uni.saveImageToPhotosAlbum({filePath: downloadResult.tempFilePath,success: () => {uni.showToast({title: '图片保存成功'});},fail: () => {uni.showToast({title: '图片保存失败',icon: 'none'});} }); } else {uni.showToast({title: '图片下载失败',icon: 'none'});} },fail: () => {uni.showToast({title: '图片下载失败',icon: 'none'});}});
		// #endif
	},
	
	
	/*播放声音*/
	usMusic() {var mps='/static/files/xindd.mp3';if (_conf.prMusic == null) {var music = null;music = uni.createInnerAudioContext(); /*创建播放器对象*/music.src = mps; /*static文件夹下的音频*/music.play(); /*执行播放*/music.onEnded(() => {/*播放结束*/music = null;_conf.prMusic = null;});}},
	usMusic_yao() {var mps='/static/files/yao.mp3';if (_conf.prMusic == null) {var music = null;music = uni.createInnerAudioContext(); /*创建播放器对象*/music.src = mps; /*static文件夹下的音频*/music.play(); /*执行播放*/music.onEnded(() => {/*播放结束*/music = null;_conf.prMusic = null;});}},
	usMusic_jinbi() {var mps='/static/files/jinbi.mp3';if (_conf.prMusic == null) {var music = null;music = uni.createInnerAudioContext(); /*创建播放器对象*/music.src = mps; /*static文件夹下的音频*/music.play(); /*执行播放*/music.onEnded(() => {/*播放结束*/music = null;_conf.prMusic = null;});}},
	
	/*系统首页进行播放*/
	// usMusicSys.autoplay = true;//自动播放
	// innerAudioContext.loop = true; //循环播放
	// innerAudioContext.play()//音乐播放
	// innerAudioContext.src ='/static/files/sys.mp3';//音乐地址
	prMusicSys:null,
	prMusicSysTf:false,//默认不播放
	usMusic_sys_ac(){
		var mps='/static/files/sys.mp3';
		_conf.prMusicSys = uni.createInnerAudioContext(); /*创建播放器对象*/
		_conf.prMusicSys.src = mps; /*static文件夹下的音频*/
		// _conf.prMusicSys.play(); /*执行播放*/
		_conf.prMusicSys.loop = true; //循环播放
		_conf.prMusicSysTf=false;
	},
	usMusic_sys_tf(){
		if(_conf.prMusicSysTf){
			_conf.prMusicSys.pause();
			_conf.prMusicSysTf = false
		}else{
			_conf.prMusicSys.play(); /*执行播放*/
			_conf.prMusicSysTf=true;
		}
	},
	
	/*超出显示ddd*/
	uaStrDdd(content, lengthSize) {var res = 0;for (var i = 0; i < content.length; i++) {if (content.charCodeAt(i) >= 0 && content.charCodeAt(i) <= 255) {res += 1;} /*判断是不是有中文*/else {res += 2;} /*中文，相当于占两位字符*/if (res >= lengthSize * 2) {return content.substring(0, i + 1) + "...";} /*如果占的位数超过了最大显示的位数*/}return content; /*如果占的位数没有超过最大显示的位数*/},
	
	//el下拉日期下拉去掉T和Z
	uaFormatDateTime(date) {if (date == '') {return ''}var y = date.getFullYear();var m = date.getMonth() + 1;m = m < 10 ? ('0' + m) : m;var d = date.getDate();d = d < 10 ? ('0' + d) : d;var h = date.getHours();h = h < 10 ? ('0' + h) : h;var minute = date.getMinutes();minute = minute < 10 ? ('0' + minute) : minute;var second = date.getSeconds();second = second < 10 ? ('0' + second) : second;return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;},

	//分隔逗号返回数组
	splitRarr(str){var rArr=[]; if(str==undefined||str==''||str==null){return rArr;} var strArr=str.split(','); for(var i=0;i<strArr.length;i++){ if(strArr[i].length>0){ rArr.push(strArr[i]); } }},

	/*加减乘除
		使用 import Decimal from '@/common/decimal.js'
		Decimal(glsP).add(Decimal(this.kv.lufeiqibujia)).toString();
	*/
	
	/*获取当前时间;ymd,ymdhm,mdhm,dhm*/
	timeGet(pl){let now = new Date();let year = now.getFullYear();let month = now.getMonth() + 1; /* 月份从 0 开始，所以要加 1*/let day = now.getDate();let hours = now.getHours();let minutes = now.getMinutes();let seconds = now.getSeconds();if(pl=='ymd'){return `${year}-${month}-${day}`;}else if(pl=='ymdhm'){return `${year}-${month}-${day} ${hours}:${minutes}`;}else if(pl=='mdhm'){return `${month}-${day} ${hours}:${minutes}`;}else if(pl=='dhm'){return `${hours}点${minutes}分`;}else{return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;}},
	/*获取当前时间*/
	timeGet_jia(pl,fen){let now = new Date();/* 将十分钟转换为毫秒（1 分钟 = 60000 毫秒）*/let tenMinutesInMillis = fen * 60000;let futureTime = new Date(now.getTime() + tenMinutesInMillis);let year = futureTime.getFullYear();let month = futureTime.getMonth() + 1; let day = futureTime.getDate();let hours = futureTime.getHours();let minutes = futureTime.getMinutes();let seconds = futureTime.getSeconds();if(pl=='ymd'){return `${year}-${month}-${day}`;}else if(pl=='ymdhm'){return `${year}-${month}-${day} ${hours}:${minutes}`;}else if(pl=='mdhm'){return `${month}月${day}日${hours}点${minutes}分`;}else if(pl=='hm'){return `${hours}点${minutes}分`;}else{return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;}},
	
	//小数点取位数
	xsdWei1(money){if(money.indexOf(".")=="-1"){/*没有小数补齐这个0*/money=money+".0";}else{money=money.substring(0,money.indexOf(".")+2);/*有小数截取前二位小数*/}return money},
	xsdWei2(money){if(money.indexOf(".")=="-1"){/*没有小数补齐这个0*/money=money+".00";}else{money=money.substring(0,money.indexOf(".")+3);/*有小数截取前二位小数*/}return money},
	
	/*const formattedDate = dataUts('2022-11-12T09:30:00', 'YYYY-MM-DD hh:mm:ss');*/
	dataUts(dateString, format) {
	  const date = new Date(dateString);
	  const formattedDate = format.replace(/YYYY/g, date.getFullYear())
	                             .replace(/MM/g, String(date.getMonth() + 1).padStart(2, '0'))
	                             .replace(/DD/g, String(date.getDate()).padStart(2, '0'))
	                             .replace(/hh/g, String(date.getHours()).padStart(2, '0'))
	                             .replace(/mm/g, String(date.getMinutes()).padStart(2, '0'))
	                             .replace(/ss/g, String(date.getSeconds()).padStart(2, '0'));
	  return formattedDate;
	},
	 
	 
	 
	 
	
	// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
	mapJl(lat1, lng1, lat2, lng2) {let EARTH_RADIUS = 6378.137;/* 地球半径*/ let radLat1 = lat1 * Math.PI / 180.0; /*lat1 * Math.PI / 180.0=>弧度计算*/let radLat2 = lat2 * Math.PI / 180.0;let a = radLat1 - radLat2;let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));s = s * EARTH_RADIUS; s = Math.round(s * 10000) / 10000;/*输出为公里*/return { m: s * 1000, km: Number(s.toFixed(2)) }},



	//打开外部导航 
	
	//定时器
	
	//base64转换
	
	//内置缓存增删改查.js
	
	//10zhuan16 16zhuan10进制
	
	
	//----vr-------
	// btn_daochu(){//导出
	// 	 window.location.href =this.conf.url +'/ivwzs/goods/excel?page='+(this.ffM.page?this.ffM.page:'1')+'&size='+(this.ffM.size ? this.ffM.size:'15')+
	// 		'&type='+(this.ffM.type?this.ffM.type:'')+
	// 		'&ishd='+(this.ffM.ishd?this.ffM.ishd:'')+
	// 		'&state='+(this.ffM.state?this.ffM.state:'');
	// },
	
	
}
export default _conf;