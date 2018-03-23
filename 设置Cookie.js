function setCookie(){
        var user = { "userInfo":{"username" :"xujing"}}
        alert(JSON.stringify(user));
        
        htmlobj = $.ajax({  
//            url:"http://web.safe.com:5000/set_cookie",  
            url:"http://api.safe.com:5000/guacdToken",
            type:'POST', 
//            dataType:'JSONP',  // 处理Ajax跨域问题
            data : JSON.stringify(user), //http://blog.csdn.net/yuan882696yan/article/details/47025963
            dataType : "json",  
            contentType : 'application/json',
//            beforeSend: function(xhr) {
//               xhr.setRequestHeader("content-type");
//            },
            async : true,  
            success : function(mydata) {  
                    var objMydata = JSON.stringify(mydata);
                    alert(objMydata)
                    var userToken = mydata.userTokenEncode;
                    alert(userToken);                   
                    document.cookie = "GUAC_AUTH="+userToken+";path=/guacamole/;domain=.safe.com"
//                    alert(obj);
                    //无法获取Set-Cookie的值
//                    alert(mydata.getResponseHeader("Set-Cookie"));
            },  
            
//            success: function(data, textStatus, request){
//              alert(request.getResponseHeader('Set-Cookie'));
//              alert($.cookie('GUAC_AUTH'));
//            },
            error : function() {  
                    alert("calc failed");  
            }  
        }); 
           
    }