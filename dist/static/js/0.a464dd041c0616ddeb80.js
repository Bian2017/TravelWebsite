webpackJsonp([0],{G9XZ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("mtWM"),i=e.n(n),s={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[a("div",{staticClass:"wrapper"},[a("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,e){return a("swiper-slide",{key:e},[a("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var l=e("VU/8")(s,r,!1,function(t){e("k85M")},"data-v-3352e72c",null).exports,o={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var c=e("VU/8")({name:"FadeAnimation"},o,!1,function(t){e("UE2G")},"data-v-3a4c7b45",null).exports,d={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},components:{CommonGallary:l,FadeAnimation:c},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[e("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),e("div",{staticClass:"banner-info"},[e("div",{staticClass:"banner-title"},[t._v("\n        "+t._s(this.sightName)+"\n      ")]),t._v(" "),e("div",{staticClass:"banner-number"},[e("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),e("fade-animation",[e("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var m=e("VU/8")(d,h,!1,function(t){e("IEtx")},"data-v-0011cb40",null).exports,u={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var a=t/140;a=a>1?1:a,this.opacityStyle={opacity:a},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{to:"/",tag:"div"}},[a("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var f=e("VU/8")(u,v,!1,function(t){e("azap")},"data-v-42f9e04a",null).exports,g={name:"DetailList",props:{list:Array}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.list,function(a,n){return e("div",{key:n,staticClass:"item"},[e("div",{staticClass:"item-title border-bottom"},[e("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(a.title)+"\n    ")]),t._v(" "),a.children?e("div",{staticClass:"item-children"},[e("detail-list",{attrs:{list:a.children}})],1):t._e()])}))},staticRenderFns:[]};var y={name:"Detail",components:{DetailBanner:m,DetailHeader:f,DetailList:e("VU/8")(g,p,!1,function(t){e("Yuk1")},"data-v-079a29a7",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){i.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSuc)},handleGetDataSuc:function(t){if((t=t.data).ret&&t.data){var a=t.data;this.sightName=a.sightName,this.bannerImg=a.bannerImg,this.gallaryImgs=a.gallaryImgs,this.list=a.categoryList}}},mounted:function(){this.getDetailInfo()}},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),a("detail-header"),this._v(" "),a("div",{staticClass:"content"},[a("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var _=e("VU/8")(y,b,!1,function(t){e("b75x")},"data-v-3d4d279c",null);a.default=_.exports},IEtx:function(t,a){},UE2G:function(t,a){},Yuk1:function(t,a){},azap:function(t,a){},b75x:function(t,a){},k85M:function(t,a){}});
//# sourceMappingURL=0.a464dd041c0616ddeb80.js.map