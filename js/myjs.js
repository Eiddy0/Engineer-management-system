$(function(){
	$("#input").on("click",function(event){
		$("#AddInf>form").show();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").hide();
		$("#CountWage>form").hide();
	});
	$("#find").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").fadeIn(100);
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").hide();
		$("#CountWage>form").hide();
	});
	$("#delete").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").fadeIn(100);
		$("#ChangeInf>.chg").hide();
		$("#CountWage>form").hide();
	});
	$("#change").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").fadeIn(100);
		$("#CountWage>form").hide();
	});
	$("#output").on("click",function(event){
		var content =getDate();
		var Infcontent = JSON.stringify(content);
		downLoad(Infcontent);
		$("#InformCont").empty();
		$("#InformCont").prepend("信息已成功导出！");
	});
    $('#loadfile').on("click",function(event){
        $('#jobData').click();
    });
    $("#allInf").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").hide();
		$("#CountWage>form").hide();
		var local=getDate();
		load(local);
	});
	$('#closesys').on("click",function(){
            if(confirm('你确定退出系统吗')){
                closewin();
            }else{ }
        });
	$("#count").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").hide();
		$("#CountWage>form").fadeIn(100);		
	});

	$(".btn-close").on("click",function(event){
			$(".btn-close").parents("form").hide();
		});
	$("#btn-add").on("click",function(event){
		var local=getDate();
		local.push({
			Rnum:$("#AddInf .Rnum").val()*1,
			Rname:$("#AddInf .Rname").val(),
			Rtel:$("#AddInf .Rtel").val(),
			Rwkyear:$("#AddInf .Rwkyear").val()*1,
			Rbase:$("#AddInf .Rbase").val()*1,
			Rsex:$("#AddInf .Rsex").val(),
			Rbirth:$("#AddInf .Rbirth").val(),
			Redu:$("#AddInf .Redu").val(),
		});
		saveDate(local);
		$("#InformCont").empty();
		$("#InformCont").prepend('成功添加该工程师信息！</br><div>编号：'+$("#AddInf .Rnum").val()+'</br>姓名：'+$("#AddInf .Rname").val()+'</br>电话：'+$("#AddInf .Rtel").val()+'</br>工龄：'+$("#AddInf .Rwkyear").val()+'</br>基本工资：'+$("#AddInf .Rbase").val()+'</br>性别：'+$("#AddInf .Rsex").val()+'</br>生日：'+$("#AddInf .Rbirth").val()+'</br>学历：'+$("#AddInf .Redu").val()+'</br></br></div>');
	});

	function getDate() {
		var  data= localStorage.getItem("RgInfor");
		if(data !==null){
			return JSON.parse(data);
		}else{
			return [];
		}
	}
	function saveDate(data){
		localStorage.setItem("RgInfor",JSON.stringify(data));
	}
	function load(dt){
		$("#InformCont").empty();
		$.each(dt,function(i,n) {
			$("#InformCont").prepend("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>电话："+n.Rtel+"</br>工龄："+n.Rwkyear+"</br>基本工资："+n.Rbase+"</br>性别："+n.Rsex+"</br>生日："+n.Rbirth+"</br>学历："+n.Redu+"</br></br></div>");
		})
	}

	function countWage(base,wkday,income,wkyear,insure){
		//（基本工资＋10*月有效工作日天数＋月效益*工作年限÷100）*0.9－月保险金
		return ((base+10*wkday+income*wkyear/100)*0.9-insure).toFixed(2);
	}

	function getSortFun(sortBy, order) 
		{ 
		　　var ordAlpah = (order == 'desc') ? '>' : '<'; 
		　　var sortFun = new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1'); 
		　　return sortFun;
		}
	function sortChinese (arr, dataLeven) { // 参数：arr 排序的数组; dataLeven 数组内的需要比较的元素属性
    /* 获取数组元素内需要比较的值 */
	    function getValue (option) { // 参数： option 数组元素
	      if (!dataLeven) return option
	      var data = option
	      dataLeven.split('.').filter(function (item) {
	        data = data[item]
	      })
	      return data + ''
	    }
	    arr.sort(function (item1, item2) {
	      return -getValue(item1).localeCompare(getValue(item2), 'zh-CN');
	    })
    }
  	function downLoad(content){
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "save.txt");
    }
	function closewin(){
            var userAgent = navigator.userAgent;
		    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
		        location.href = "about:blank";
		    } else {
		        self.opener = null;
		        self.open('', '_self');
		    }
		    self.close();
        }
    $("form :input.required").each(function () {
        var $required = $('<strong style="color: red; font-size: large; ">*</strong>');
        $(this).parent().append($required);
    });
    
	$(".ch1").on("click",function(event){
		$(".iNum").show();
		$(".iName").hide();
	});
	$(".ch2").on("click",function(event){
		$(".iNum").hide();
		$(".iName").show();
	});
	$("#btn-find").on("click",function(event){
		var data = getDate();
		var flag=0;
		$("#InformCont").empty();
		$.each(data,function(i,n) {
			if(n.Rnum == $("#FindInf .inputNum").val()||n.Rname == $("#FindInf .inputName").val()){
				$("#InformCont").prepend("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>电话："+n.Rtel+"</br>工龄："+n.Rwkyear+"</br>基本工资："+n.Rbase+"</br>性别："+n.Rsex+"</br>生日："+n.Rbirth+"</br>学历："+n.Redu+"</br></br></div>");
			    flag=1;return false;
			}
		})
		if(!flag){$("#InformCont").prepend("没有符合要求的工程师信息！");}
	});
	
	$("#btn-delete").on("click",function(event){
		var dt = getDate();
		var flag=0;
		$("#InformCont").empty();
		$.each(dt,function(i,n) {
			if(n.Rnum == $("#DeleteInf .inputNum").val()||n.Rname == $("#DeleteInf .inputName").val()){
				dt.splice(i,1);flag=1;return false;
			}
		})
		if(!flag){$("#InformCont").prepend("没有符合要求的工程师信息！");}
		else {$("#InformCont").prepend("已删除该工程师信息！");}
		saveDate(dt);
	});

	$("#btn-change1").on("click",function(event){
		var dt = getDate();
		var flag1=0;
		$("#InformCont").empty();
		$.each(dt,function(i,n) {
			if(n.Rnum == $("#ChangeInf .inputNum").val()||n.Rname == $("#ChangeInf .inputName").val()){
				$("#change-form").fadeIn(100);
				$("#change-form .Rnum").val(n.Rnum);
				$("#change-form .Rname").val(n.Rname);
				$("#change-form .Rtel").val(n.Rtel);
				$("#change-form .Rwkyear").val(n.Rwkyear);
				$("#change-form .Rbase").val(n.Rbase);
				$("#change-form .Rsex").val(n.Rsex);
				$("#change-form .Rbirth").val(n.Rbirth);
				$("#change-form .Redu").val(n.Redu);
				$("#btn-change2").on("click",function(event){
					n.Rnum=$("#change-form .Rnum").val()*1;
					n.Rname=$("#change-form .Rname").val();
					n.Rtel=$("#change-form .Rtel").val();
					n.Rwkyear=$("#change-form .Rwkyear").val()*1;
					n.Rbase=$("#change-form .Rbase").val()*1;
					n.Rsex=$("#change-form .Rsex").val();
					n.Rbirth=$("#change-form .Rbirth").val();
					n.Redu=$("#change-form .Redu").val();
					saveDate(dt);
					$("#InformCont").prepend("已修改该工程师信息！");
					$("#btn-change2").parents("#change-form").hide();
				});
				// $("#change-form .btn-close").on("click",function(event){
				// 	$("#InformCont").prepend("修改工程师信息失败！");
				// });
				//**************打印提示信息bug************
				flag1=1;
				return false;
			}
		})
		if(!flag1){$("#InformCont").prepend("没有符合要求的工程师信息！");}
	});
	$("#btn-count").on("click",function(event){
		var data = getDate();
		$("#InformCont").empty();
		$.each(data,function(i,n){
			if(n.Rnum == $("#CountWage .Rnum").val()){
				n.Rwkday=$("#CountWage .Rwkday").val()*1;
				n.Rincome=$("#CountWage .Rincome").val()*1;
				n.Rinsure=$("#CountWage .Rinsure").val()*1;
				n.Rwage=countWage(n.Rbase,n.Rwkday,n.Rincome,n.Rwkyear,n.Rinsure)*1;
				return false;
			}
		})
		saveDate(data);
		$.each(data,function(i,n) {
			$("#InformCont").prepend("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>薪水："+n.Rwage+"</br></br></div>"); 
		})
	});

	$("#upsortNum").on("click",function(event){
		var data = getDate();
		var newdata=data.sort(getSortFun('Rnum', 'asc'));
		load(newdata);

	});
	$("#dosortNum").on("click",function(event){
		var data = getDate();
		var newdata=data.sort(getSortFun('Rnum', 'desc'));
		load(newdata);
	});
	$("#upsortName").on("click",function(event){
		var data = getDate();
		sortChinese(data,'Rname'); 
  		load(data);
	});
	$("#dosortName").on("click",function(event){
		var data = getDate();
		sortChinese(data,'Rname');
		$("#InformCont").empty();
		$.each(data,function(i,n) {
			$("#InformCont").append("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>电话："+n.Rtel+"</br>工龄："+n.Rwkyear+"</br>基本工资："+n.Rbase+"</br>性别："+n.Rsex+"</br>生日："+n.Rbirth+"</br>学历："+n.Redu+"</br></br></div>");
		})
	});
	$("#upsortWky").on("click",function(event){
		var data = getDate();
		var newdata=data.sort(getSortFun('Rwkyear', 'asc'));
		load(newdata);
	});
	$("#dosortWky").on("click",function(event){
		var data = getDate();
		var newdata=data.sort(getSortFun('Rwkyear', 'desc'));
		load(newdata);
	});

	$("#InfReport").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">信息报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>编号</th> <th>姓名</th> <th>性别</th> <th>出生日期</th> <th>籍贯</th> <th>住址</th> <th>学历</th> <th>电话</th> <th>工龄</th> <th>基本工资</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var data = getDate();
		$.each(data,function(i,n) {
			$("#InformReport").prepend('<tr><td>'+n.Rnum+'</td><td>'+n.Rname+'</td><td>'+n.Rsex+'</td><td>'+n.Rbirth+'</td><td></td><td></td><td>'+n.Redu+'</td><td>'+n.Rtel+'</td><td>'+n.Rwkyear+'</td><td>'+n.Rbase+'</td><tr>');
		})
	});
	$("#WageReport").on("click",function(event){
		$("#InformCont").empty();
		$("#InformCont").prepend('<div id="ShowReport"> <div class="row"> <div class="col-md-12"> <br> <h2 style="text-align: center;margin-top: 0px;">薪水报表</h2> <div class="table-responsive"> <table class="table table-striped table-bordered"data-name="cool-table"> <thead> <tr> <th>编号</th> <th>姓名</th> <th>工龄</th> <th>基本工资</th> <th>工作天数</th> <th>当月收益</th> <th>扣除保险金</th> <th>当月薪水</th> </tr> </thead> <tbody id="InformReport"> <tbody> </table> </div> </div> </div> </div>');
		var data = getDate();
		$.each(data,function(i,n) {
			$("#InformReport").prepend('<tr><td>'+n.Rnum+'</td><td>'+n.Rname+'</td><td>'+n.Rwkyear+'</td><td>'+n.Rbase+'</td><td>'+n.Rwkday+'</td><td>'+n.Rincome+'</td><td>'+n.Rinsure+'</td><td>'+n.Rwage+'</td><tr>');
		})
	});

})