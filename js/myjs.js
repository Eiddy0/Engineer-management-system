$(function(){
	load();
	// $("#input").on("click",function(event){

	// });
	
	$("#SubInf").on("click",function(event){
		var local=getDate();
		console.log(local);
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
			$("#ShowInf").prepend("<div>编号："+n.num+"</br>姓名："+n.name+"</br>电话："+n.tel+"</br>年龄："+n.age+"</br>基本工资："+n.wage+"</br>性别："+n.sex+"</br>生日："+n.birth+"</br>学历："+n.edu+"</br></div>");
		})
	}
	
	$("#ch1").on("click",function(event){
		$("#iNum").show();
		$("#iName").hide();
	});
	$("#ch2").on("click",function(event){
		$("#iNum").hide();
		$("#iName").show();
	});
	$("#find").on("click",function(event){
		var local=getDate();
		console.log(local);
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

	
})