(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{431:function(t,a,s){"use strict";s.r(a);var e=s(64),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"migration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migration"}},[t._v("#")]),t._v(" Migration")]),t._v(" "),s("h2",{attrs:{id:"migrating-to-v2-0-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-v2-0-0"}},[t._v("#")]),t._v(" Migrating to v2.0.0")]),t._v(" "),s("h3",{attrs:{id:"breaking-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[t._v("#")]),t._v(" Breaking Changes")]),t._v(" "),s("p",[t._v("Make sure to also read the "),s("a",{attrs:{href:"https://www.chartjs.org/docs/latest/getting-started/v3-migration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js v3 migration guide"),s("OutboundLink")],1),t._v(" since you may be impacted by more general breaking changes due to this new Chart.js version.")]),t._v(" "),s("h4",{attrs:{id:"explicit-plugin-registration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explicit-plugin-registration"}},[t._v("#")]),t._v(" Explicit Plugin Registration")]),t._v(" "),s("p",[t._v("As described in the "),s("RouterLink",{attrs:{to:"/guide/getting-started.html#module"}},[t._v("getting started")]),t._v(", it's now required to manually register this plugin when building using module bundlers:")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chart.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ChartStreaming "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chartjs-plugin-streaming'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nChart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ChartStreaming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"default-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),s("p",[t._v("The plugin default options are now accessible in "),s("code",[t._v("Chart.defaults.plugins.streaming.*")]),t._v(" instead of "),s("code",[t._v("Chart.defaults.global.plugins.streaming.*")]),t._v(" and can be modified using:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugins.streaming'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/getting-started.html#configuration"}},[t._v("Getting Started > Configuration")]),t._v(" for details.")],1),t._v(" "),s("h4",{attrs:{id:"transition-mode-for-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition-mode-for-update"}},[t._v("#")]),t._v(" Transition Mode for Update")]),t._v(" "),s("p",[t._v("When you append data outside the "),s("code",[t._v("onRefresh")]),t._v(" callback function, "),s("code",[t._v("chart.update()")]),t._v(" needs to be called explicitly. To avoid interrupting the current animation, the previous version provided support for the "),s("code",[t._v("preservation")]),t._v(" config property for the "),s("code",[t._v("update")]),t._v(" function, but it is no longer supported.")]),t._v(" "),s("p",[t._v("Chart.js v3 introduced the transition mode argument, and this plugin now supports the "),s("code",[t._v("'quiet'")]),t._v(" mode for this purpose.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quiet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/guide/data-feed-models.html#pull-model-polling-based-asynchronous"}},[t._v("Data Feed Models > Pull Model (Polling Based) - Asynchronous")]),t._v(" for details.")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);