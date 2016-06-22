.button{
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    background: #f91546;
    border-width: 0;
    border-style: solid;
    border-color: #1B7DE0;
    padding: 0 15px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none!important;
    outline: none;
}
.shop-cart {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 2;
    font-size: 12px;
    color: #fff;
    text-align: center;
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f91546;
    -webkit-transition: bottom .2s ease-in;
    transition: bottom .2s ease-in;
}
.shop-cart-count {
    position: absolute;
    top: -2px;
    left: 30px;
    display: inline-block;
    padding: 1px 4px;
    line-height: 14px;
    font-size: 12px;
    font-weight: normal;
    color: #fff;
    background: #000;
    border-radius: 14px;
}
/*首页和全部商品添加购物车button*/
.button-round {
    position: absolute;
    right: 5px;
    bottom: 8px;
    display: block;
    padding: 0;
    width: 32px;
    height: 32px;
    background: #f91546;
    border: 0;
    border-radius: 50%;
    text-indent: -999em;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none!important;
    outline: none;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    z-index: 2;
}

.button-round:before {
    content: "";
    display: block;
    position: absolute;
    width: 17px;
    overflow: hidden;
    top: 15px;
    left: 8px;
    height: 0;
    border-top: 2px solid #fff;
}

.button-round:after {
    content: "";
    display: block;
    position: absolute;
    height: 17px;
    overflow: hidden;
    top: 8px;
    left: 15px;
    width: 0;
    border-left: 2px solid #fff;
}
/*清除浮动*/
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}

/*.clearfix{*+height:1%;} ie特有属性*/

/*字体大小开始*/
.font10
{
	font-size: 10px;
}
.font11
{
	font-size: 11px;
}
.font12
{
	font-size: 12px;
}
.font13
{
	font-size: 13px;
}
.font14
{
	font-size: 14px;
}
.font15
{
	font-size: 15px;
}
.font16
{
	font-size: 16px;
}
.font17
{
	font-size: 17px;
}
.font18
{
	font-size: 18px;
}
/*字体大小结束*/

/*字体颜色开始*/
.txt-grey
{
	color:#999999;
}
.txt-grey-main
{
	color:#666;
}
.txt-low-grey
{
	color:#cccccc;
}
.txt-red
{
	color:#f91546;
}
.txt-blue
{
	color:#0079fe;
}
.txt-spec
{
	color:#97af44;
}
.txt-goldy
{
  color:#aea130;
}
/*边线颜色*/
.border-low-grey
{
	border-color:#e8e8e8;
}
/*margin start*/
.mt5
{
  margin-top: 5px;
}
.mt8
{
  margin-top: 8px;
}
.mt10
{
  margin-top: 10px;
}
/*margin end*/
/*点击触发的效果*/
.click-btn{
	transition: background-color,color .3s;
	-webkit-transition: background-color,color .3s;
}
.click-btn-default{
	transition: background-color,color .3s;
	-webkit-transition: background-color,color .3s;
}
.click-btn-default:active{
	background-color:#f91546;
	color: #fff;
}
.click-btn:active{
	background-color:white;
	color: #f91546;
}
.click-bg{
	transition: background-color .3s;
	-webkit-transition: background-color .3s;
}
.click-bg:active{
	background-color:#AAAAAA;
}
.grey-click-bg{
    transition: background-color .3s;
    -webkit-transition: background-color .3s;
}
.grey-click-bg:active{
    background-color:#AAAAAA;
}

.p_break{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
}

/*雪碧图*/
.ico {
    display: inline-block;
    vertical-align: middle;
    background: url('../images/sprite-icon.png') no-repeat;
    background-size: 300px 300px;
}
.ico-more {
    display: inline-block;
    vertical-align: middle;
    background: url('../images/sprite-icon-more.png') no-repeat;
    background-size: 280px 350px;
}
.ico-miniCart {
    position: absolute;
    top: 10px;
    left: 9px;
    width: 30px;
    height: 30px;
    background-position: -135px -50px;
}
.ico-del {
    width: 16px;
    height: 17px;
    background-position: -145px 0;
}
.ico-type
{
    width: 20px;
    height: 18px;
    margin-top: -2px;
    margin-right: 5px;
}
.ico-type1
{
  background-position: -180px -200px;
}
.ico-type2
{
  background-position: -200px -198px;
}
.ico-type3
{
    
    background-position: -220px -200px;
}
.ico-type4
{
    background-position:-244px -196px;
}
.ico-type5
{
    height: 21px;
    background-position:-200px  -216px;
}
.ico-type6
{
  background-position:-266px -198px;
    
}
.ico-type7
{
    
  background-position: -244px  -220px;
}
.ico-type8
{
   background-position: -220px  -220px;
}
.ico-type9
{
  background-position: -180px  -220px;
  
}
.selected .ico-type1
{
  background-position: 0px -138px;
}
.selected .ico-type2
{
  background-position: -21px -137px;
}
.selected .ico-type3
{
    
    background-position: -42px -137px;
}
.selected .ico-type4
{

  background-position: -68px -137px;
}
.selected .ico-type5
{

  background-position: -91px -136px;
}
.selected .ico-type6
{
    background-position: -115px -136px;
}
.selected .ico-type7
{
    height:20px;
    background-position: -0px -165px;
}
.selected .ico-type8
{
  background-position: -21px -165px;
}
.selected .ico-type9
{
   background-position: -43px -165px;
}
/*加载效果*/
.sp1 { 
   /* -webkit-animation: spstyle 1s infinite;
    animation: spstyle 1s infinite;*/
    }
.sp2 {
    -webkit-animation: spstyle 1s infinite;
    animation: spstyle 1s infinite;
    -webkit-animation-delay: 0.2s; 
      animation-delay: 0.2s;
    }
.sp3 {
      -webkit-animation: spstyle 1s infinite;
      animation: spstyle 1s infinite;
     -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;  
}
span.sp1,span.sp2,span.sp3
{
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background: #fff;
  display: inline-block;
  margin:0px 2px;
  vertical-align: middle;
}

.errtext
{
  color:#fff;
  background-color:#f91546;
}
@-webkit-keyframes spstyle {
    50% { /*-webkit-transform: scale(0);*/
          opacity: 0;
    }

    100% { /*-webkit-transform: scale(1);*/
        opacity: 1;
    } 
}
/*newloading*/
.fond {
    /*background:rgba(0,0,0,.2);*/
    position: absolute;
    max-width: 360px;
    padding:20px;
    text-align: center;
    z-index: 1000;
    -webkit-border-radius:12px;
    border-radius:12px;
}

.contener_general {
    -webkit-animation: animball_two 1s infinite;
    animation: animball_two 1s infinite;
    width: 44px;
    height: 44px;
    position: relative;
    margin: 0px auto;
}

.contener_mixte {
    width: 44px;
    height: 44px;
    position: absolute;
}

.ballcolor {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.ball_1,
.ball_2,
.ball_3,
.ball_4 {
    position: absolute;
    -webkit-animation: animball_one 1s infinite ease;
    -moz-animation: animball_one 1s infinite ease;
    -ms-animation: animball_one 1s infinite ease;
    animation: animball_one 1s infinite ease;
}

.ball_1 {
    background-color: #cb2025;
    top: 0;
    left: 0;
}

.ball_2 {
    background-color: #f8b334;
    top: 0;
    left: 24px;
}

.ball_3 {
    background-color: #00a096;
    top: 24px;
    left: 0;
}

.ball_4 {
    background-color: #97bf0d;
    top: 24px;
    left: 24px;
}
.fond-text {
  color:#4A90E2;
  font-size:16px;
  padding:20px 5px 5px
}
@-webkit-keyframes animball_one {
    0% {
        position: absolute;
    }
    50% {
        top: 12px;
        left: 12px;
        position: absolute;
        opacity: 0.5;
    }
    100% {
        position: absolute;
    }
}

@keyframes animball_one {
    0% {
        position: absolute;
    }
    50% {
        top: 12px;
        left: 12px;
        position: absolute;
        opacity: 0.5;
    }
    100% {
        position: absolute;
    }
}

@-webkit-keyframes animball_two {
    0% {
        -webkit-transform: rotate(0deg) scale(1);
    }
    50% {
        -webkit-transform: rotate(360deg) scale(1.3);
    }
    100% {
        -webkit-transform: rotate(720deg) scale(1);
    }
}

@keyframes animball_two {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(360deg) scale(1.3);
    }
    100% {
        transform: rotate(720deg) scale(1);
    }
}
