webpackJsonp([6],{"iS/l":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("ZWLy"),e=s("dQCR"),o={components:{headerTop:n.a,Footer:e.a},data:function(){return{allChecked:!0,dialogVisible:!1,goodsList:[{id:1,urlImg:"http://p3.vanclimg.com/232/232/product/6/3/7/6373824/mid/6373824-1j201709151927089726.jpg",name:"凡客棉线衫 绞花套衫 男款 米白色",price:999,num:1},{id:2,urlImg:"http://p3.vanclimg.com/232/232/product/6/3/7/6375158/mid/6375158-1j201709190939204939.jpg",name:"凡客棉线衫 绞花套衫 男款 米白色",price:1999,num:1},{id:3,urlImg:"http://p3.vanclimg.com/232/232/product/6/3/7/6373824/mid/6373824-1j201709151927089726.jpg",name:"凡客棉线衫 绞花套衫 男款 米白色",price:939,num:1},{id:4,urlImg:"http://p3.vanclimg.com/232/232/product/6/3/7/6375736/mid/6375736-1j201703161122076681.jpg",name:"凡客棉线衫 绞花套衫 男款 米白色",price:459,num:1},{id:5,urlImg:"http://p3.vanclimg.com/232/232/product/6/3/7/6377950/mid/6377950-1j201709181637233065.jpg",name:"凡客棉线衫 绞花套衫 男款 米白色",price:555,num:1},{id:6,urlImg:"//h2.appsimg.com/a.appsimg.com/upcb/2018/12/03/9/ias_154380537062855.jpg.webp",name:"凡客棉线衫 绞花套衫 男款 米白色",price:669,num:1}]}},methods:{add:function(t){this.goodsList[t].num++},reduce:function(t){this.goodsList[t].num--},del:function(t){this.goodsList.splice(t,1)},handleClose:function(t){this.$confirm("确认关闭？").then(function(i){t()}).catch(function(t){})}},mounted:function(){this.goodsList&&this.$notify({title:"成功",message:"已添加到购物车",type:"success"})},computed:{totalPrice:function(){var t=0;return this.goodsList.forEach(function(i,s){t+=i.num*i.price}),t}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"shopping"},[s("headerTop"),t._v(" "),s("div",{staticClass:"main-container"},[0==t.goodsList.length?s("div",{staticClass:"empty-container"},[s("h1",[t._v("购物车空空如也~~~~")])]):s("table",{staticClass:"cartTable"},[t._m(0),t._v(" "),s("tbody",[t._l(t.goodsList,function(i,n){return s("tr",{key:n},[s("td",{staticClass:"goods"},[s("img",{attrs:{src:i.urlImg,alt:""}}),s("span",[t._v(t._s(i.name))])]),t._v(" "),s("td",{staticClass:"price"},[t._v(t._s(i.price))]),t._v(" "),s("td",{staticClass:"count"},[s("span",{staticClass:"reduce"},[s("i",{directives:[{name:"show",rawName:"v-show",value:i.num>1,expression:"goods.num>1"}],on:{click:function(i){t.reduce(n)}}},[t._v("-")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:i.num,expression:"goods.num"}],staticClass:"count-input",attrs:{type:"text"},domProps:{value:i.num},on:{input:function(s){s.target.composing||t.$set(i,"num",s.target.value)}}}),s("span",{staticClass:"add",on:{click:function(i){t.add(n)}}},[t._v("+")])]),t._v(" "),s("td",{staticClass:"subtotal"},[t._v(t._s(i.price*i.num))]),t._v(" "),s("td",{staticClass:"operation"},[s("span",{staticClass:"delete btn btn-danger",on:{click:function(i){t.dialogVisible=!0}}},[t._v("删除")])])])}),t._v(" "),s("tr",{staticClass:"total-box"},[s("td",{attrs:{colspan:"5"}},[t._v("\n                        总价："),s("span",[t._v(t._s(t.totalPrice))]),t._v(" "),s("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:"/order"}},[t._v("\n                            去结算\n                        ")])],1)])],2)]),t._v(" "),s("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(i){t.dialogVisible=i}}},[s("span",[t._v("确定删除吗？")]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(i){t.del(t.index),t.dialogVisible=!1}}},[t._v("\n                确 定\n            ")])],1)])],1),t._v(" "),s("Footer",{staticClass:"footer"})],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("thead",[s("tr",[s("th",[t._v("商品")]),t._v(" "),s("th",[t._v("单价")]),t._v(" "),s("th",[t._v("数量")]),t._v(" "),s("th",[t._v("小计")]),t._v(" "),s("th",[t._v("操作")])])])}]};var c=s("VU/8")(o,a,!1,function(t){s("x0cU")},"data-v-0fce523d",null);i.default=c.exports},x0cU:function(t,i){}});
//# sourceMappingURL=6.164d6925e4dafff6af3f.js.map