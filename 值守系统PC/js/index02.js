/***********************从这个版本开始，将整合所有的js,以便进行修改维护，以前分开写的js,将会逐步迁进 2018-08-21************************/






/************************顶部 js start******************************/
/*放大还原按钮js*/
$(".fdhy").click(function () {
    var fangda=$(".btnsss .fdhy a").hasClass("fangda");
    if(fangda==true){
        $(".btnsss .fdhy a").removeClass("fangda").addClass("huanyuan");
    }else {
        $(".btnsss .fdhy a").removeClass("huanyuan").addClass("fangda");
    }
})


function showTime(){//----------------------获取系统日期时间周几------------------------------
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();
    month<10?month='0'+month:month;
    date<10?date='0'+date:date;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    var now_time=+year+'-'+month+'-'+date+' '+show_day[day]+' '+hour+':'+minutes+':'+second;


    document.getElementById('weather-deta').innerHTML=now_time;

    setTimeout("showTime();",1000);
}
$(function () {//调用时间方法
    $("#weather-deta").append(showTime());
});

/************************顶部 js end********************************/






/************************侧边栏 js start******************************/

//侧边栏 导航切换 start
$('.navigation').find('li').click(function(){$(this).addClass('active').siblings().removeClass('active');})

// 修改侧边栏切换逻辑


var zhuye=$("#zhuye");//主页
var OnDuty_Scheduling=$("#OnDuty_Scheduling");//值班排班
var xitongsezhi_width=$("#xitongsezhi_width");//系统设置
var communication_log=$("#communication_log");//通讯记录
var Communication_management=$("#Communication_management");//通讯管理
//导航切换页面
$(".navigation ul li:nth-child(1)").click(function () {//显示主页
    zhuye.removeAttr("style").css("display","block");
    OnDuty_Scheduling.removeAttr("style").css("display","none");
    xitongsezhi_width.removeAttr("style").css("display","none");
    communication_log.removeAttr("style").css("display","none");
    Communication_management.removeAttr("style").css("display","none");
})
$(".navigation ul li:nth-child(3)").click(function () {//显示值班排班
    zhuye.removeAttr("style").css("display","none");
    OnDuty_Scheduling.removeAttr("style").css("display","block");
    xitongsezhi_width.removeAttr("style").css("display","none");
    communication_log.removeAttr("style").css("display","none");
    Communication_management.removeAttr("style").css("display","none");
})
$(".navigation ul li:nth-child(8)").click(function () {//显示系统设置
    zhuye.removeAttr("style").css("display","none");
    OnDuty_Scheduling.removeAttr("style").css("display","none");
    xitongsezhi_width.removeAttr("style").css("display","block");
    communication_log.removeAttr("style").css("display","none");
    Communication_management.removeAttr("style").css("display","none");
})
$(".navigation ul li:nth-child(9)").click(function () {//显示通讯记录
    zhuye.removeAttr("style").css("display","none");
    OnDuty_Scheduling.removeAttr("style").css("display","none");
    xitongsezhi_width.removeAttr("style").css("display","none");
    communication_log.removeAttr("style").css("display","block");
    Communication_management.removeAttr("style").css("display","none");
})
$(".navigation ul li:nth-child(10)").click(function () {//显示通讯管理
    zhuye.removeAttr("style").css("display","none");
    OnDuty_Scheduling.removeAttr("style").css("display","none");
    xitongsezhi_width.removeAttr("style").css("display","none");
    communication_log.removeAttr("style").css("display","none");
    Communication_management.removeAttr("style").css("display","block");
})
//侧边栏 导航切换 end






/************************侧边栏 js end********************************/
















