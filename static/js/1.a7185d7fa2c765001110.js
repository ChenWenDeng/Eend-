webpackJsonp([1],{"/WGg":function(t,i){},"9LcL":function(t,i){},DBD2:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("ZWLy"),o=e("dQCR"),a={props:{scale:{type:Number,default:2.5},url:{type:String,required:!0},bigUrl:{type:String,default:null},scroll:{type:Boolean,default:!1},showEidt:{type:Boolean,default:!1}},data:function(){return{id:null,cover:null,imgbox:null,imgwrap:null,orginUrl:null,bigImgUrl:null,bigOrginUrl:null,imgUrl:null,img:null,canvas:null,ctx:null,rectTimesX:0,rectTimesY:0,imgTimesX:0,imgTimesY:0,init:!1,step:0,bigStep:0,vertical:!1,showImg:!0}},created:function(){for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",i=t.length,e="",s=0;s<10;s++)e+=t.charAt(Math.floor(Math.random()*i));this.id=e,this.imgUrl=this.url,this.orginUrl=this.url,this.bigImgUrl=this.bigUrl,this.bigOrginUrl=this.bigUrl},watch:{url:function(t){this.imgUrl=t,this.orginUrl=t,this.initTime()},bigUrl:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}(function(){this.bigImgUrl=bigUrl,this.bigOrginUrl=bigUrl,this.initTime()})},mounted:function(){var t=this;this.$nextTick(function(){t.initTime()})},methods:{initTime:function(){var t=this;this.init=!1;var i=this.$refs[this.id];this.imgbox=i,this.cover=i.querySelector(".mouse-cover"),this.cover.style.width=this.imgbox.offsetWidth/this.scale+"px",this.cover.style.height=this.imgbox.offsetHeight/this.scale+"px",this.cover.style.left="-100%",this.cover.style.top="-100%",this.imgwrap=i.querySelector("img");var e=void 0;e=this.bigImgUrl?this.bigImgUrl:this.imgUrl,this.img=new Image,this.img.src=e,this.img.onload=function(){t.rectTimesX=t.imgbox.offsetWidth/t.scale/t.imgwrap.offsetWidth,t.rectTimesY=t.imgbox.offsetHeight/t.scale/t.imgwrap.offsetHeight,t.imgTimesX=t.img.width/t.imgwrap.offsetWidth,t.imgTimesY=t.img.height/t.imgwrap.offsetHeight,t.vertical=t.img.width<t.img.height,t.init=!0},this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null),this.canvas=document.createElement("canvas"),this.canvas.className="mouse-cover-canvas",this.canvas.style.position="absolute",this.canvas.style.left=this.imgbox.offsetLeft+this.imgbox.offsetWidth+10+"px",this.canvas.style.top=this.imgbox.offsetTop+"px",this.canvas.style.border="1px solid #eee",this.canvas.style.zIndex="99999",this.canvas.height=this.imgbox.offsetHeight,this.canvas.width=this.imgbox.offsetWidth,this.canvas.style.display="none",document.body.append(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},initBox:function(){var t=this;this.showImg=!1,this.canvas.style.display="none";var i=this.$refs[this.id],e=void 0;e=this.bigImgUrl?this.bigImgUrl:this.imgUrl,this.img=new Image,this.img.src=e,this.img.onload=function(){t.vertical=t.img.width<t.img.height,t.showImg=!0;i.querySelector("img");setTimeout(function(){t.rectTimesX=t.imgbox.offsetWidth/t.scale/i.querySelector("img").offsetWidth,t.rectTimesY=t.imgbox.offsetHeight/t.scale/i.querySelector("img").offsetHeight},20)}},mousemove:function(t){if(!this.init)return!1;var i=this;var e,s=t||event,o={x:(e=s).clientX-i.cover.offsetWidth/2,y:e.clientY-i.cover.offsetHeight/2},a=function(t){var i=null,e=null,s=t.offsetParent;for(i+=t.offsetLeft,e+=t.offsetTop;s;)-1===navigator.userAgent.indexOf("MSIE 8.0")&&(i+=s.clientLeft,e+=s.clientTop),i+=s.offsetLeft,e+=s.offsetTop,s=s.offsetParent;return{left:i,top:e}}(this.imgwrap),n={minX:a.left,maxX:a.left+this.imgwrap.offsetWidth-this.cover.offsetWidth,minY:a.top-document.documentElement.scrollTop,maxY:a.top-document.documentElement.scrollTop+this.imgwrap.offsetHeight-this.cover.offsetHeight};o.x>n.maxX&&(o.x=n.maxX),o.x<n.minX&&(o.x=n.minX),o.y>n.maxY&&(o.y=n.maxY),o.y<n.minY&&(o.y=n.minY),this.cover.style.left=o.x+"px",this.cover.style.top=o.y+"px",this.ctx.clearRect(0,0,this.imgwrap.offsetWidth,this.imgwrap.offsetHeight);var r=o.x-(a.left-document.documentElement.scrollLeft),c=o.y-(a.top-document.documentElement.scrollTop);this.ctx.drawImage(this.img,r*this.imgTimesX,c*this.imgTimesY,this.img.width*this.rectTimesX,this.img.height*this.rectTimesY,0,0,this.imgbox.offsetWidth,this.imgbox.offsetHeight)},mouseover:function(t){if(!this.init)return!1;t=t||event,this.scroll||(t.currentTarget.addEventListener("mousewheel",function(t){t.preventDefault()},!1),t.currentTarget.addEventListener("DOMMouseScroll",function(t){t.preventDefault()},!1)),this.cover.style.display="block",this.canvas.style.display="block"},mouseleave:function(){if(!this.init)return!1;this.cover.style.display="none",this.canvas.style.display="none"},rotate:function(t){var i=this,e=new Image;if(e.crossOrigin="Anonymous",e.src=this.orginUrl,e.onload=function(){i.rotateImg(e,t,i.step)},this.bigOrginUrl){var s=new Image;e.crossOrigin="Anonymous",s.src=this.bigOrginUrl,s.onload=function(){i.rotateImg(s,t,i.bigStep,!0)}}},rotateImg:function(t,i,e){var s=this,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(null!=t){var a=t.height,n=t.width;null==e&&(e=0),"right"==i?++e>3&&(e=0):--e<0&&(e=3);var r=document.createElement("canvas"),c=90*e*Math.PI/180,l=r.getContext("2d");switch(r.width=a,r.height=n,l.rotate(c),l.drawImage(t,0,-a),e){case 0:r.width=n,r.height=a,l.drawImage(t,0,0);break;case 1:r.width=a,r.height=n,l.rotate(c),l.drawImage(t,0,-a);break;case 2:r.width=n,r.height=a,l.rotate(c),l.drawImage(t,-n,-a);break;case 3:r.width=a,r.height=n,l.rotate(c),l.drawImage(t,-n,0)}var h=r.toDataURL();o?(this.bigImgUrl=h,this.bigStep=e,this.initBox()):(this.imgUrl=h,this.step=e,this.$nextTick(function(){s.initBox()}))}}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:t.id,staticClass:"magnifier-box",class:t.vertical?"vertical":"",on:{mousemove:t.mousemove,mouseover:t.mouseover,mouseleave:t.mouseleave}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],attrs:{src:t.imgUrl,alt:""}}),t._v(" "),e("div",{staticClass:"mouse-cover"}),t._v(" "),t.showEidt?e("div",{staticClass:"edit-wrap"},[e("span",{staticClass:"rotate-left",on:{click:function(i){t.rotate("left")}}}),t._v(" "),e("span",{staticClass:"rotate-right",on:{click:function(i){t.rotate("right")}}})]):t._e()])},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(t){e("/WGg")},"data-v-3ba7a195",null).exports,c={name:"detail",components:{headerTop:s.a,PicZoom:r,Footer:o.a},data:function(){return{num1:1,imgUrl:[{index:1,url:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192462761649_1280.jpg"},{index:2,url:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192477717937_1280.jpg"},{index:1,url:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192494906650_1280.jpg"},{index:2,url:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192511524855_1280.jpg"},{index:1,url:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192527198747_1280.jpg"}],ImgUrl:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_05968192462761649_1280.jpg"}},methods:{getIndex:function(t){this.ImgUrl=t},handleChange:function(t){console.log(t)}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"details-container"},[e("headerTop"),t._v(" "),e("div",{staticClass:"goodDetails-container"},[e("div",{staticClass:"goodDetails-left"},[e("div",{staticClass:"sm-container"},[e("ul",t._l(t.imgUrl,function(i,s){return e("li",{key:s,staticClass:"sm-li",on:{mouseover:function(e){t.getIndex(i.url)}}},[e("img",{attrs:{src:i.url}})])}))]),t._v(" "),e("div",{staticClass:"magnifier-container"},[e("pic-zoom",{staticClass:"magnifier-img",attrs:{url:t.ImgUrl,scale:3}})],1)]),t._v(" "),e("div",{staticClass:"goodDetails-right"},[e("h5",{staticClass:"title"},[t._v("[简约的翻领设计]LuckyOzasec女士灯笼袖珍珠装饰后抽绳侧开叉毛呢外套S68328 珊瑚杏仁色 S")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"number-container"},[e("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},on:{change:t.handleChange},model:{value:t.num1,callback:function(i){t.num1=i},expression:"num1"}})],1),t._v(" "),e("div",{staticClass:"button-container"},[e("router-link",{staticClass:"btn btn-danger",attrs:{tag:"button",to:"/shopping"}},[t._v("\n                    加入购物车\n                ")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:"/order"}},[t._v("\n                    立即购买\n                ")])],1)])]),t._v(" "),t._m(1),t._v(" "),e("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",{staticClass:"price-container"},[i("span",{staticClass:"price-title"},[this._v("价格：")]),i("span",{staticClass:"price"},[i("i",[this._v("￥")]),this._v("399")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"product-container"},[i("header",[this._v("\n            产品信息\n        ")]),this._v(" "),i("div",{staticClass:"img-container"},[i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_01_1280.jpg",alt:""}}),this._v(" "),i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_02_1280.jpg",alt:""}}),this._v(" "),i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_03_1280.jpg",alt:""}}),this._v(" "),i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_04_1280.jpg",alt:""}}),this._v(" "),i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_05_1280.jpg",alt:""}}),this._v(" "),i("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_06_1280.jpg",alt:""}})])])}]};var h=e("VU/8")(c,l,!1,function(t){e("9LcL")},"data-v-3d2e8905",null);i.default=h.exports}});
//# sourceMappingURL=1.a7185d7fa2c765001110.js.map