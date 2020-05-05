
    
	$('.dingwei').on('click',function(){    //点击定位图标，地图的窗口会切换出来
		var index02=$('.dingwei').index(this);
		$('.location').eq(index02).toggle(500);
//		$('.modd').fadeIn(500);
		$('.check_place').eq(index02).focus(); //输入地名框会获得焦点
//		$('.event_scrollbar').css("overflow","visible");//地图的窗口出来，滚动条消失
	})
	$('.close_box').on('click',function(){ //点击关闭按钮，地图会隐藏起来
		$('.location').fadeOut(500);
//		$('.event_scrollbar').css({"overflow":"auto","overflow-x":"hidden"});//地图的窗口出来，滚动条的auto属性恢复，横向滚动条消失
	})
//	$('.modd').click(function(){
//		$('.modd').fadeOut(500);
//	})
		
//  百度地图API功能
	//第一个地图定位地址
	var map1 = new BMap.Map("div_show");
	var point = new BMap.Point(114.221516,22.728893);
	map1.centerAndZoom(point,14);
	var geoc = new BMap.Geocoder(); 
	var marker = new BMap.Marker(point); // 创建标注    
    map1.addOverlay(marker); // 将标注添加到地图中  
	map1.enableScrollWheelZoom(); // 启动鼠标滚轮操作
	
	
	map1.addEventListener("click", function(e){        
		var pt = e.point;
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
//			var index03=$('.check_place').index(this);
			$('.check_place').eq(0).val(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            $('.check_place').eq(0).attr("title",(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber));//获取title值.修改title值  
		}); 
	});
	
	//第二个地图定位地址
	var map2 = new BMap.Map("allmap"); //设置卫星图为底图
	var point = new BMap.Point(114.221516,22.728893);
	map2.centerAndZoom(point,14);
	var geoc = new BMap.Geocoder(); 
	var marker = new BMap.Marker(point); // 创建标注    
    map2.addOverlay(marker); // 将标注添加到地图中  
	map2.enableScrollWheelZoom(); // 启动鼠标滚轮操作
	
	map2.addEventListener("click", function(e){        
		var pt = e.point;
		geoc.getLocation(pt, function(rs){
			var addComp = rs.addressComponents;
//			var index03=$('.check_place').index(this);
			$('.check_place').eq(1).val(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			$('.check_place').eq(1).attr("title",(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber));//获取title值.修改title值  
		}); 
	});

    