webpackJsonp([4],{"9zw/":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("ZWLy"),i=a("dQCR"),n={components:{headerTop:e.a,Footer:i.a},data:function(){return{name:null,phone:null,address:null,endname:null,endphone:null,endaddress:null,num:0,lists:[],isdisabled:!0}},methods:{remoClass:function(){this.$refs.baocun.removeAttribute("data-dismiss")},setClass:function(){this.$refs.baocun.setAttribute("data-dismiss","modal")},add:function(){return null==this.name?(this.$notify({title:"警告",message:"收件人姓名不能为空",type:"warning"}),void this.remoClass()):null==this.phone?(this.$notify({title:"警告",message:"收件人电话不能为空",type:"warning"}),void this.remoClass()):null==this.address?(this.$notify({title:"警告",message:"收件人地址不能为空",type:"warning"}),void this.remoClass()):(this.lists.push([{name:"收件姓名",prop:this.name},{name:"收件电话",prop:this.phone},{name:"收件地址",prop:this.address}]),this.lists.length>0&&(this.name=null,this.phone=null,this.address=null),void this.setClass())},modify:function(){this.lists[this.num][0].prop=this.endname,this.lists[this.num][1].prop=this.endphone,this.lists[this.num][2].prop=this.endaddress,this.lists.length>0&&(this.endname="",this.endphone="",this.endaddress=""),null==this.lists[this.num][0].prop&&null==this.lists[this.num][1].prop&&null==this.lists[this.num][2].prop&&this.lists.splice(this.num,1)},dataXiu:function(t){this.num=t},deleteData:function(t){this.lists.length>1?this.lists.splice(t,1):this.$notify({title:"警告",message:"至少有一个收件地址",type:"warning"})},Order:function(){0==this.lists.length?this.$message.error("请填写收件地址"):this.$router.push({path:"/payment"})}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-container"},[a("headerTop"),t._v(" "),a("div",{staticClass:"receiving-container"},[a("header",[t._v("\n            收货信息\n        ")]),t._v(" "),a("div",{staticClass:"information-container"},[t._l(t.lists,function(s,e){return a("div",{key:e,staticClass:"add-container"},[t._l(s,function(s,e){return a("p",{key:e},[a("span",[t._v(t._s(s.name)+"：")]),t._v(" "),a("span",{ref:"nameBox",refInFor:!0},[t._v(t._s(s.prop))])])}),t._v(" "),a("div",{class:{modifyBox:t.lists.length>=1}},[a("span",{attrs:{"data-toggle":"modal","data-target":"#myModal"},on:{click:function(s){t.dataXiu(e)}}},[t._v("修改")]),t._v(" "),a("span",{on:{click:function(s){t.deleteData(e)}}},[t._v("删除")])])],2)}),t._v(" "),t._m(0)],2)]),t._v(" "),a("div",{staticClass:"modal-frame"},[a("div",{staticClass:"modal fade bs-example-modal-sm",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"mySmallModalLabel"}},[a("div",{staticClass:"modal-dialog modal-cd",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"input-container"},[a("div",{staticClass:"header-box"},[a("p",[a("span",[t._v("收件姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),a("p",[a("span",[t._v("收件电话")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),t._v(" "),a("p",[a("span",[t._v("收件地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],domProps:{value:t.address},on:{input:function(s){s.target.composing||(t.address=s.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("div",{ref:"baocun",staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal",disabled:t.isdisabled},on:{click:t.add}},[t._v("保存")])])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"input-container"},[a("div",{staticClass:"header-box"},[a("p",[a("span",[t._v("收件姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endname,expression:"endname"}],domProps:{value:t.endname},on:{input:function(s){s.target.composing||(t.endname=s.target.value)}}})]),t._v(" "),a("p",[a("span",[t._v("收件电话")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endphone,expression:"endphone"}],domProps:{value:t.endphone},on:{input:function(s){s.target.composing||(t.endphone=s.target.value)}}})]),t._v(" "),a("p",[a("span",[t._v("收件地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endaddress,expression:"endaddress"}],domProps:{value:t.endaddress},on:{input:function(s){s.target.composing||(t.endaddress=s.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{ref:"baocun2",staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.modify}},[t._v("保存")])])])])]),t._v(" "),a("div",{staticClass:"detailed-container"},[a("header",[t._v("\n            全部清单\n        ")]),t._v(" "),a("div",{staticClass:"commodity-container"},[t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"price-container"},[a("span",[t._v("应付总额：￥399")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:t.Order}},[t._v("\n                    提交订单\n                ")])])])]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"add-box",attrs:{"data-toggle":"modal","data-target":".bs-example-modal-sm"}},[s("span",{staticClass:"iconfont icon-jia"}),this._v(" "),s("p",[this._v("增加新地址")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("新增收货地址")]),this._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[this._v("修改收货地址")]),this._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"header-top"},[s("li",[s("span",[this._v("商品信息")]),this._v(" "),s("span",[this._v("单价")]),this._v(" "),s("span",[this._v("数量")]),this._v(" "),s("span",[this._v("小计")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"commodity-row"},[a("li",[a("span",{staticClass:"left-box"},[a("img",{attrs:{src:"http://ecimg.happigo.com/data/upload/shop/store/goods/1/495/247995/1_desc_750_01_1280.jpg",alt:""}}),t._v(" "),a("span",{staticClass:"img-title"},[t._v("女士灯笼袖珍珠装饰后抽绳侧开叉毛呢外套")])]),t._v(" "),a("span",[t._v("￥399")]),t._v(" "),a("span",[t._v("x1")]),t._v(" "),a("span",[t._v("￥399")])])])}]};var l=a("VU/8")(n,o,!1,function(t){a("Wcu6")},"data-v-3b3f786e",null);s.default=l.exports},Wcu6:function(t,s){}});
//# sourceMappingURL=4.f818246149f37fdc37c9.js.map