jQuery(function($){  
    // 备份jquery的ajax方法    
    var _ajax=$.ajax;  
    // 重写ajax方法，先判断登录在执行success函数   
    $.ajax=function(opt){  
        var _success = opt && opt.success || function(a, b){};  
        var _opt = $.extend(opt, {  
            success:function(data, textStatus){  
                // 如果后台将请求重定向到了登录页，则data里面存放的就是登录页的源码，这里需要找到data是登录页的证据(标记)  
                if(data.indexOf('sessionIsTimeout') != -1) {
                	
                    //window.location.reload();  
                    return;  
                }  
                _success(data, textStatus);    
            }    
        });  
        _ajax(_opt);  
    };  
});  

//使用原生 js ajax
/**调用：
myajax ('GET','test.jsp',{a:'a',b:'b'},function(r){console.log(r)})
说明：data必须填写，并且总是一个对象，没有数据的时候填写{}空对象
在服务器端，总是$a=$_GET['a']或$a=$_POST['a']取得数据，然后json_decode($a,true)
有true以数组形式返回
没有true以stdObject的形式返回*/

var Ajax=new XMLHttpRequest();

ajax=function(getPost,url,data,callback){
  data='a='+JSON.stringify(data);
  if(getPost=='GET'){url+='?'+data}
  Ajax.open(getPost,url,true);
  Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  Ajax.onreadystatechange=function(){
    if(Ajax.readyState==4)if(Ajax.status==200)callback(Ajax.responseText);
  }
  if(getPost=='GET'){Ajax.send(null)}else{Ajax.send(data)}
}
get =function(url,data,callback){ajax('GET' ,url,data,callback)}
post=function(url,data,callback){ajax('POST',url,data,callback)}
