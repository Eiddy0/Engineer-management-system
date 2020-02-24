$(function(){
	load();
	$("#input").on("click",function(event){
		$("#AddInf").show();
		$("#FindInf").hide();
		$("#DeleteInf").hide();
		$("#ShowInf").hide();
	});
	$("#find").on("click",function(event){
		$("#AddInf").hide();
		$("#FindInf").show();
		$("#DeleteInf").hide();
		$("#ShowInf").hide();
	});
	$("#delete").on("click",function(event){
		$("#AddInf").hide();
		$("#FindInf").hide();
		$("#DeleteInf").show();
		$("#ShowInf").hide();
	});
	$("#allInf").on("click",function(event){
		$("#AddInf").hide();
		$("#FindInf").hide();
		$("#DeleteInf").hide();
		$("#ShowInf").show();
	});
	 
	$("#SubInf").on("click",function(event){
		var local=getDate();
		local.push({
			num:$("#num").val(),
			name:$("#name").val(),
			tel:$("#tel").val(),
			age:$("#age").val(),
			wage:$("#wage").val(),
			sex:$("#sex").val(),//*********bug********
			birth:$("#birth").val(),
			edu:$("#edu").val(),
		});
		saveDate(local);
		load();
	});

	function getDate() {
		var  data= localStorage.getItem("infor");
		if(data !==null){
			return JSON.parse(data);
		}else{
			return [];
		}
	}
	function saveDate(data){
		localStorage.setItem("infor",JSON.stringify(data));
	}
	function load(){
		var data=getDate();
		$("#ShowInf").empty();
		$.each(data,function(i,n) {
			$("#ShowInf").prepend("<div>编号："+n.num+"</br>姓名："+n.name+"</br>电话："+n.tel+"</br>年龄："+n.age+"</br>基本工资："+n.wage+"</br>性别："+n.sex+"</br>生日："+n.birth+"</br>学历："+n.edu+"</br></br></div>");
		})
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
		$(".infcontent").empty();
		$.each(data,function(i,n) {
			if(n.num == $("#FindInf .inputNum").val()||n.name == $("#FindInf .inputName").val()){
				$(".infcontent").prepend("<div>编号："+n.num+"</br>姓名："+n.name+"</br>电话："+n.tel+"</br>年龄："+n.age+"</br>基本工资："+n.wage+"</br>性别："+n.sex+"</br>生日："+n.birth+"</br>学历："+n.edu+"</br></br></div>");
			    flag=1;
			}
		})
		if(!flag){$(".infcontent").prepend("没有符合要求的工程师信息！");}
		
	});
	
	$(".btn-close").on("click",function(event){
		$(".btn-close").parents("form").hide();
	});
	
})