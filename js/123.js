function ajax(Url,fun1,fun2){
	// 1.创建XMLHttpRequest对象
	if(window.XMLHttpRequest){//非IE56
		var xhr=new XMLHttpRequest();
	}else{//IE56
		var xhr=new ActiveXObject("Microsoft.XMLHTTP");
	};
	// 2.与服务器建立连接
	xhr.open('get',Url,true);
	// 3.发送给服务器
	xhr.send(null);//get请求参数为空或null
	// 4.接收数据
	xhr.onreadystatechange=function (){
		if (xhr.readyState==4) {//请求完成
			if (xhr.status==200) {//ok
				fun1(xhr.responseText);
			} else{
				if (fun2) {
					fun2();
				} else{
					alert(xhr.status);
				};
			};
		};
	}
}