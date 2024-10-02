import conf from './conf.js';
/*
	this.confhttp.getKV('kefusdianhuahoukuan').then((res)=>{
		this.kv.xxx=res;
	});
*/
//---------------------------------------------------------

var _http = {
	
	getKV(kk) {
		return new Promise((resolve, reject) => {
			conf.http('/api/sysinit/getone', {vkey: kk}, res => {
				if (res.data.error == '1') {resolve('');}
				resolve(res.data.data.vval);
			})
		});
	},

}
export default _http;







//-----------------------------------------------------------
/*
//首先封装一个计时器函数
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
//应用此函数
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
*/
//---------------------------------------------------------
/*
new Promise(function (resolve, reject) {
    console.log(1111);
    resolve(2222);
}).then(function (value) {
    console.log(value);
    return 3333;
}).then(function (value) {
    console.log(value);
    throw "An error";
}).catch(function (err) {
    console.log(err);
});

执行结果：

1111
2222
3333
An error
*/
//---------------------------------------------------------