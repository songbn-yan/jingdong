$(function(){
	// banner图轮播
	var middle=$(".middle")[0]
	var imgs=$("img",$(".middle")[0])
	var btns=$(".btn",$(".anniu")[0])
	console.log(middle)
	var t;
	imgs[0].style.opacity=1;
	imgs[0].style.zIndex=1;
  t=setInterval(move,3000)
    btns[0].style.background="#b61b1f";
	var now=0;
	var next=0;
	// 自动轮播
    var flag=true;
	function move(){
		  next++;
		  if(next==imgs.length)
		  {
		  	next=0;
		  }
          for(var i=0;i<imgs.length;i++)
          {
          	imgs[i].style.opacity=0;
            imgs[i].style.zIndex=0
          	btns[1].style.background="#3e3e3e";
          }
          imgs[next].style.opacity=1
          imgs[next].style.zIndex=0;
          imgs[now].style.zIndex=1;
          imgs[now].style.opacity=1;
          animate(imgs[now],{opacity:0},200,function(){flag=true});
          btns[now].style.background="#3e3e3e";
          btns[next].style.background="#b61b1f";
          now=next;
	}
	function movel(){
		  next--;
		  if(next<0)
		  {
		  	next=imgs.length-1;
		  }
          for(var i=0;i<imgs.length;i++)
          {
          	imgs[i].style.opacity=0;
          	imgs[i].style.zIndex=0;
          	btns[1].style.background="#3e3e3e";
          }
          imgs[next].style.opacity=1
          imgs[next].style.zIndex=0;
          imgs[now].style.zIndex=1;
          imgs[now].style.opacity=1;
          animate(imgs[now],{opacity:0},200,function(){flag=true});
          btns[now].style.background="#3e3e3e";
          btns[next].style.background="#b61b1f";
          now=next;
	}
       // 下标控制
       for(var i=0;i<btns.length;i++)
       {
          btns[i].index=i;
          btns[i].onmouseover=function(){
            if(this.index==now)
            {
              return;
            }
          imgs[this.index].style.opacity=1
          imgs[this.index].style.zIndex=0;
          imgs[now].style.zIndex=1;
          imgs[now].style.opacity=1;
          animate(imgs[now],{opacity:0},200,function(){flag=true});
          btns[now].style.background="#3e3e3e";
          this.style.background="#b61b1f";
          now=this.index;
          next=this.index;
             }
       }
       // 左右轮播
       var left=$(".btnleft")[0];
       var right=$(".btnright")[0];
       middle.onmouseover=function(){
       	left.style.display="block";
       	right.style.display="block";
       	clearInterval(t);
       }
        middle.onmouseout=function(){
       	left.style.display="none";
       	right.style.display="none";
       	t=setInterval(move,3000)
       }
       left.onclick=function(){
       	if(flag)
            {movel();}
        flag=false;
       }
       right.onclick=function(){
       	if(flag)
            {move();}
        flag=false;
       }



// tuijian 节点轮播
       var tuijian=$(".jiedian")[0];
       var tuijian1=$(".jiedian1")[0];
       var tuijian2=$("a",tuijian1);
       var tuil=$(".tuil")[0];
       var tuir=$(".tuir")[0];
       var flag2=true;
       tuijian.onmouseover=function(){
       	tuil.style.display="block"
       	tuir.style.display="block"
       }
        tuijian.onmouseout=function(){
       	tuil.style.display="none";
       	tuir.style.display="none";
       }

       var ww=parseInt(getStyle(tuijian2[0],"width"));
       tuijian1.style.width=tuijian2.length*ww+"px";
       function remove(){
				 animate(tuijian1,{left:-ww*4},function(){
				 for(var i=0;i<4;i++)
				 {

				 var first=getFirst(tuijian1);
				 tuijian1.appendChild(first)
				}
				 tuijian1.style.left=0;
				 flag2=true;
				 })}
	  function removel(){
	  	        for(var i=0;i<4;i++)
				 {var first=getFirst(tuijian1);
				  var last=getLast(tuijian1);
				  tuijian1.insertBefore(last,first);}
				 tuijian1.style.left=-ww*4+"px";
				 animate(tuijian1,{left:0},function(){flag2=true})}
	  tuil.onclick=function(){
	  	if(flag2)
             {
            removel();
             	
             }
           flag2=false;
	  }
	  tuir.onclick=function(){
	  	if(flag2)
             {
            remove();
             }
          flag2=false;
	  }


	// 第一层
	  var floor_1=$(".floor_1")[0]
	  var firstl=$(".mt1")[0]
  
    var main=$(".main",floor_1);
      console.log(main.length)
    navsty(firstl,main);
    function navsty(obj1,obj2){
	  var bar=$("a",obj1);
    obj2[0].style.display="block"
	  for(var i=0;i<bar.length;i++)
	  {
	  	bar[i].index=i;
	  	bar[i].onmouseover=function(){
               for(var i=0;i<bar.length;i++)
               {
               	bar[i].className="style1"
                obj2[i].style.display="none";
               }
                this.className="style2"
                obj2[this.index].style.display="block";
	  	}
	  } 
  }


//第二层 
     var floor_2=$(".floor_2")[0]
      var first2=$(".mt1",floor_2)[0]  
      var main=$(".content2",floor_2);
       navsty(first2,main);
    // 轮播
	 var mianban2=$(".content2l")[0];
     play(mianban2,".lunbo2")
	 function play(obj,obj1)
	 {
	 var lunbo_2=$(obj1,obj);
	 var btn_2=$(".btn",obj); 
	 var left2=$(".tuil",obj)[0];
	 var right2=$(".tuir",obj)[0];
	 var now2=0;
	 var next2=0;
	 var flag1=true;
	 btn_2[0].style.background="#b61b1f";
	 var ww2=parseInt(getStyle(lunbo_2[0],"width"))
	 var t2=setInterval(move2,3000)
	 for(var i=0;i<lunbo_2.length;i++)
	 {
	 	if(i==0)
	 		{continue;}
	 	lunbo_2[i].style.left=ww2+"px";
	 }
	 function move2()
	 {
         next2++;
         if(next2==lunbo_2.length)
         {
         	next2=0
         }
         lunbo_2[next2].style.left=ww2+"px";
         animate(lunbo_2[now2],{left:-ww2});
         animate(lunbo_2[next2],{left:0},function(){flag1=true});
         btn_2[now2].style.background="#3e3e3e";
         btn_2[next2].style.background="#b61b1f";
         now2=next2;
	 }
	 function move2l()
	 {
         next2--;
         if(next2<0)
         {
         	next2=lunbo_2.length-1
         }
         lunbo_2[next2].style.left=-ww2+"px";
         animate(lunbo_2[now2],{left:ww2});
         animate(lunbo_2[next2],{left:0},function(){flag1=true});
         btn_2[now2].style.background="#3e3e3e";
         btn_2[next2].style.background="#b61b1f";
         now2=next2;
	 }
	 obj.onmouseover=function(){
	 	clearInterval(t2)
	 	left2.style.display="block"
	 	right2.style.display="block"
	 }
	  obj.onmouseout=function(){
	 	 t2=setInterval(move2,3000)
	 	 left2.style.display="none"
	 	right2.style.display="none"
	 }
	 for(var i=0;i<btn_2.length;i++)
	 {  
	 	btn_2[i].index=i;
	 	btn_2[i].onmouseover=function(){
          if(now2==this.index)
          {
          	return;
          }
          else if(now2<this.index)
          {
          lunbo_2[this.index].style.left=ww2+"px";
         animate(lunbo_2[now2],{left:-ww2});
         animate(lunbo_2[this.index],{left:0});
         btn_2[now2].style.background="#3e3e3e";
         this.style.background="#b61b1f";

          }
          else if(now2>this.index)
           {
         lunbo_2[this.index].style.left=-ww2+"px";
         animate(lunbo_2[now2],{left:ww2});
         animate(lunbo_2[this.index],{left:0});
         btn_2[now2].style.background="#3e3e3e";
         this.style.background="#b61b1f";
           }
          now2=this.index;
          next2=this.index;
	 	}
	 }
   left2.onclick=function(){
   	if(flag1)
   	{
   	  move2l();
   	}
   	flag1=false;
   }
   right2.onclick=function()
   {
   	if(flag1)
   	{
   	  move2();
   	}
   	flag1=false;
   }
}
// 第三层
      var floor_3=$(".floor_3")[0]
      var first3=$(".mt1",floor_3)[0]  
      var main3=$(".main3",floor_3);
      navsty(first3,main3);
     var mianban3=$(".main3t1")
   console.log(mianban3)
   for(var i=0;i<mianban3.length;i++)
   {
    play(mianban3[i],"a")
  }
  //第四层
      var floor_4=$(".floor_3")[1]
      var first4=$(".mt1",floor_4)[0]  
      var main4=$(".main3",floor_4);
      navsty(first4,main4);
  //第五层
      var floor_5=$(".floor_3")[2]
      var first5=$(".mt1",floor_5)[0]  
      var main5=$(".main3",floor_5);
      navsty(first5,main5);
  // 第六层
      var floor_6=$(".floor_5")[0]
      var first6=$(".mt1",floor_6)[0]  
      var main6=$(".main5",floor_6);
      console.log(main6.length)
      navsty(first6,main6);
  var mianban6=$(".list52");
  for(var i=0;i<mianban6.length;i++)
   {
    play(mianban6[i],".list521")
  }
 //第七层
      var floor_7=$(".floor_5")[1]
      var first7=$(".mt1",floor_7)[0]  
      var main7=$(".main5",floor_7);
      navsty(first7,main7);
  //第八层
      var floor_8=$(".floor_5")[2]
      var first8=$(".mt1",floor_8)[0]  
      var main8=$(".main5",floor_8);
      
      navsty(first8,main8);
   //第九层
      var floor_9=$(".floor_5")[3]
      var first9=$(".mt1",floor_9)[0]  
      var main9=$(".main5",floor_9);
  
      navsty(first9,main9);
  // 第十层
      var floor_10=$(".floor_5")[4]
      var first10=$(".mt1",floor_10)[0]  
      var main10=$(".main5",floor_10);
      
      navsty(first10,main10);
  var mianban10=$(".ten_021")[0]
  play(mianban10,"a");
  // 第十一层
      var floor_11=$(".floor_3")[3]
      var first11=$(".mt1",floor_11)[0]  
      var main11=$(".main3",floor_11);
      console.log(main11.length)
      navsty(first11,main11);
  // serve
  var mianban12=$(".gg1");
  for(var i=0;i<mianban12.length;i++)
   {
    play(mianban12[i],"a")
  }
  //cheap
  var readall=$(".read")[0]
  var reads=$(".read1");

  console.log(reads)
  reads[0].style.top=0;
  reads[1].style.top=123+"px";
  for(var i=0;i<reads.length;i++)
  {
    if(i>1)
    {
      reads[i].style.top=-123+"px";
    }
  }
  var nowday=0;
  var front;
  var nextday=0;
  var ct=setInterval(xiabo,2000)
  readall.onmouseover=function(){
    clearInterval(ct)
  }
  readall.onmouseout=function(){
    ct=setInterval(xiabo,2000)
  }
  function xiabo(){
    front=nowday-1
    nextday=nowday+1
    if(front<0)
    {
      front=reads.length-1
    }
    if(nextday==reads.length)
    {
      nextday=0;
    }
    reads[front].style.top=-123+"px";
    animate(reads[nowday],{top:123})
    animate(reads[front],{top:0})
    animate(reads[nextday],{top:246})
    nowday=front;
    nextday=nowday;
  }





  // 选项卡  head
  var headleft=$(".headleft")[0]
  var map=$(".map")[0]
  var xiala1=$("#xiala1");
  var xiala2=$("#xiala2");
  var xiala3=$("#xiala3");
  var xiala4=$("#xiala4");
  var number=$("#number");
  var app=$("#app");
  var xiala5=$("#xiala5");
  var customer=$("#customer");
  var xiala6=$("#xiala6");
  var cap=$("#cap");
  function select(obj1,obj2){
  obj1.onmouseover=function(){
    obj2.style.display="block";
    obj1.style.background="#fff";
  }
  obj1.onmouseout=function(){
    obj2.style.display="none";
    obj1.style.background="#f1f1f1";
  }
}
  select(headleft,map);
  select(xiala1,xiala2);
  select(xiala3,app);
  select(xiala4,number);
  select(xiala5,customer);
  select(xiala6,cap);




  //右侧导航  
  var obj=document.body.scrollTop?
      document.body:document.documentElement;
  var back=$(".backDing")[0];
  back.onclick=function(){      
    animate(document.body,{scrollTop:0},100);
    animate(document.documentElement,{scrollTop:0},100);
  }
// 回到顶部动画
  var topImg=$(".topImg");
  for(var i=0;i<topImg.length;i++){
    hover(topImg[i],function(){
      var width=this.offsetWidth;
      this.style.background="#B1191A";
      this.style.overflow="inherit";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:80},300);
    },function(){
      var that=this;
      that.style.background="#7A6E6E";
      that.style.overflow="hidden";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:0},100);
    })
  }





  // banner侧导航
  function sidebar(obj1,obj2){
    obj1.onmouseover=function(){
      obj2.style.display="block"
    }
    obj1.onmouseout=function(){
      obj2.style.display="none"
    }
  }
  var item=$(".item");
  var items=$(".items");
  for(var i=0;i<item.length;i++){
  sidebar(item[i],items[i]);}



  //楼层跳转
  var louceng=$(".louceng")[0];
  var num=$(".num");
  var num1=$(".num4");
  var num2=$(".num2");
  var floor_0=$(".floor_0");
  var lnow;
  var sflag=true;
  for(var i=0;i<floor_0.length;i++)
  {
    floor_0[i].h=floor_0[i].offsetTop;
  }
  window.onscroll=function(){ 
    if(sflag)
        {var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(floor_0[0].h<=obj.scrollTop+800)
        {
            louceng.style.display="block";
        }
        else 
        {
          louceng.style.display="none";

        }
        // 楼层显示

        for(var i=0;i<floor_0.length;i++)
        {    
          if(floor_0[i].h<=obj.scrollTop+200)
          {  
             for(var j=0;j<floor_0.length;j++)
            {
             num2[j].style.display="block";
             num1[j].style.display="none";
             num1[j].className="num4 num1"
              }
             num2[i].style.display="none";
             num1[i].style.display="block";
             num1[i].className="num4 num3";
             lnow=i;
          }       
        }
    }
}
console.log(lnow)
 for(var i=0;i<num.length;i++)
    {   
      num[i].index=i;
      if(i<=num.length)
      {   
        if(this.index==lnow)
        {
          num[i].onmouseover=function(){
            num4[i].className="num4 num1"
          }
        }
        num[i].onmouseover=function(){
          num1[this.index].style.display="block";
          num2[this.index].style.display="none";
        }
        num[i].onmouseout=function(){
          num1[this.index].style.display="none";
          num2[this.index].style.display="block";
        }
        num[i].onclick=function(){
        animate(document.body,{scrollTop:floor_0[this.index].h-200},function(){sflag=true})
        animate(document.documentElement,{scrollTop:floor_0[this.index].h-200},function(){sflag=true})
        sflag=false;
      } 
          
        }
    }
})

//懒加载
var a=jQuery.noConflict();
a(document).ready(function(){
  a("img.lazy").lazyload({

  });
})