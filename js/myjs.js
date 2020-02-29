$(function(){
	$("#input").on("click",function(event){
		$("#AddInf>form").show();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>form").hide();
	});
	$("#find").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").fadeIn(100);
		$("#DeleteInf>form").hide();
		$("#ChangeInf>form").hide();
	});
	$("#delete").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").fadeIn(100);
		$("#ChangeInf>form").hide();
	});
	$("#change").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		$("#ChangeInf>.chg").fadeIn(100);
	});
	$("#output").on("click",function(event){
		var content =getDate(); 
		downLoad(content);
	});
    $('#loadfile').on("click",function(event){
        $('#jobData').click();
    });
    $("#allInf").on("click",function(event){
		$("#AddInf>form").hide();
		$("#FindInf>form").hide();
		$("#DeleteInf>form").hide();
		var local=getDate();
		load(local);
	});
	$('#closesys').on("click",function(){
            if(confirm('你确定退出系统吗')){
                closewin();
            }else{ }
        });
	$(".btn-close").on("click",function(event){
		$(".btn-close").parents("form").hide();
	});
	
	$("#btn-add").on("click",function(event){
		var local=getDate();
		local.push({
			Rnum:$("#AddInf .Rnum").val(),
			Rname:$("#AddInf .Rname").val(),
			Rtel:$("#AddInf .Rtel").val(),
			Rage:$("#AddInf .Rage").val(),
			Rwage:$("#AddInf .Rwage").val(),
			Rsex:$("#AddInf .Rsex").val(),//*********bug********
			Rbirth:$("#AddInf .Rbirth").val(),
			Redu:$("#AddInf .Redu").val(),
		});
		saveDate(local);
		// $("#AddInf .Rnum").val()='';
		// $("#AddInf .Rname").val()='';
		// $("#AddInf .Rtel").val()='';
		// $("#AddInf .Rage").val()='';
		// $("#AddInf .Rwage").val()='';
		// $("#AddInf .Rsex").val()='';//*********bug********
		// $("#AddInf .Rbirth").val()='';
		// $("#AddInf .Redu").val()='';
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
		//var dt=getDate();
		$("#InformCont").empty();
		$.each(dt,function(i,n) {
			$("#InformCont").prepend("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>电话："+n.Rtel+"</br>年龄："+n.Rage+"</br>基本工资："+n.Rwage+"</br>性别："+n.Rsex+"</br>生日："+n.Rbirth+"</br>学历："+n.Redu+"</br></br></div>");
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
				$("#InformCont").prepend("<div>编号："+n.Rnum+"</br>姓名："+n.Rname+"</br>电话："+n.Rtel+"</br>年龄："+n.Rage+"</br>基本工资："+n.Rwage+"</br>性别："+n.Rsex+"</br>生日："+n.Rbirth+"</br>学历："+n.Redu+"</br></br></div>");
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
				$("#change-form .Rage").val(n.Rage);
				$("#change-form .Rwage").val(n.Rwage);
				$("#change-form .Rsex").val(n.Rsex);//*********bug*******
				$("#change-form .Rbirth").val(n.Rbirth);
				$("#change-form .Redu").val(n.Redu);
				$("#btn-change2").on("click",function(event){
					n.Rnum=$("#change-form .Rnum").val();
					n.Rname=$("#change-form .Rname").val();
					n.Rtel=$("#change-form .Rtel").val();
					n.Rage=$("#change-form .Rage").val();
					n.Rwage=$("#change-form .Rwage").val();
					n.Rsex=$("#change-form .Rsex").val();//*********bug*******
					n.Rbirth=$("#change-form .Rbirth").val();
					n.Redu=$("#change-form .Redu").val();
					saveDate(dt);
					$("#InformCont").prepend("已修改该工程师信息！");
					$("#btn-change2").parents("#change-form").hide();
				});
				$("#change-form .btn-close").on("click",function(event){
					$("#InformCont").prepend("修改工程师信息失败！");
				});
				//**************打印提示信息bug************
				flag1=1;
				return false;
			}
		})
		if(!flag1){$("#InformCont").prepend("没有符合要求的工程师信息！");}
	});

})