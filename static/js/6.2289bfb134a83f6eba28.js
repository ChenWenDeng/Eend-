webpackJsonp([6],{g9F6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ZWLy"),r=n("dQCR"),s={components:{headerTop:a.a,Footer:r.a},data:function(){return{number:null}},methods:{payment:function(){399!=this.number?this.$notify({title:"警告",message:"金额不正确,请重新输入",type:"warning"}):(this.$notify({title:"成功",message:"支付成功",type:"success"}),this.$router.push({path:"/"}))}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"payment-container"},[n("headerTop"),e._v(" "),n("div",{staticClass:"main-container"},[n("header",[e._v("请输入支付的金额")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"text"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.number},on:{click:e.payment}},[e._v("\n            立即支付\n        ")])]),e._v(" "),n("Footer")],1)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(e){n("mLj5")},"data-v-66a95b99",null);t.default=o.exports},mLj5:function(e,t){}});
//# sourceMappingURL=6.2289bfb134a83f6eba28.js.map