(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(31),n(5)),o={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,h,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,o=t.error,e.next=3,n("blog",{deep:!0}).where({slug:{$eq:c.slug}}).limit(1).fetch().catch((function(t){o({statusCode:404,message:"Page not found"})}));case 3:return l=e.sent,h=Object(r.a)(l,1),article=h[0],e.abrupt("return",{article:article});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title}}},l=n(34),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("h1",[this._v(this._s(this.article.title))]),this._v(" "),e("nuxt-content",{attrs:{document:this.article}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);