(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{467:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"オプション"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#オプション"}},[t._v("#")]),t._v(" オプション")]),t._v(" "),s("p",[t._v("以下の表は、利用可能なすべてのオプションを示しています。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名前")]),t._v(" "),s("th",[t._v("型")]),t._v(" "),s("th",[t._v("デフォルト値")]),t._v(" "),s("th",[t._v("説明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("duration")])]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("10000")])]),t._v(" "),s("td",[t._v("チャートの表示時間（どのくらいの期間のデータを表示するか）をミリ秒単位で指定します。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ttl")])]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("データが保持される期間をミリ秒単位で指定します。設定されていない場合は、古いデータがチャートから消えると自動的に削除されます。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("delay")])]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("値が追加され完全に線がプロットされてから表示するようにするために、チャートに追加する遅延をミリ秒単位で指定します。これにより、チャートの右側がせわしなく揺れ動かずに、連続した流れのように見えます。予想される遅延時間の最大値を指定します。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("refresh")])]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("1000")])]),t._v(" "),s("td",[t._v("データの更新間隔をミリ秒単位で指定します。この間隔で "),s("code",[t._v("onRefresh")]),t._v(" コールバック関数が呼び出されます。")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#onrefresh"}},[s("code",[t._v("onRefresh")])])]),t._v(" "),s("td",[s("code",[t._v("function")])]),t._v(" "),s("td",[s("code",[t._v("null")])]),t._v(" "),s("td",[t._v("一定時間ごとに呼び出されるコールバック関数。"),s("a",{attrs:{href:"#onrefresh"}},[t._v("詳細...")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("frameRate")])]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("30")])]),t._v(" "),s("td",[t._v("画面にチャートが描画される頻度（1秒あたりのフレーム数）。CPU の消費電力を節約したい場合は、この値を小さくしてください。"),s("RouterLink",{attrs:{to:"/ja/guide/performance.html#cpu-使用率を下げる"}},[t._v("詳細...")])],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("pause")])]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v(" に設定すると、スクロールが停止します。"),s("code",[t._v("true")]),t._v(" に設定されていても、"),s("code",[t._v("onRefresh")]),t._v(" コールバックは呼び出されることに注意してください。")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("補足")]),t._v(" "),s("p",[t._v("これらのオプションの設定方法がわからない場合は、"),s("RouterLink",{attrs:{to:"/ja/guide/getting-started.html#設定"}},[t._v("設定")]),t._v("の項を参照してください。")],1)]),t._v(" "),s("p",[t._v("なお、"),s("code",[t._v("'realtime'")]),t._v(" スケールでは、以下の軸オプションは無視されます。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("bounds")])]),t._v(" "),s("li",[s("code",[t._v("max")])]),t._v(" "),s("li",[s("code",[t._v("min")])]),t._v(" "),s("li",[s("code",[t._v("offset")]),t._v("（常に "),s("code",[t._v("false")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("ticks.autoSkip")]),t._v("（常に "),s("code",[t._v("false")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("ticks.major.enabled")]),t._v("（常に "),s("code",[t._v("true")]),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"onrefresh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onrefresh"}},[t._v("#")]),t._v(" onRefresh")]),t._v(" "),s("p",[s("code",[t._v("onRefresh")]),t._v(" コールバック関数は、チャートオブジェクトへの参照である1つの引数を取ります。コールバック関数の "),s("code",[t._v("this")]),t._v(" キーワードには、スケールオブジェクトが設定されています。")]),t._v(" "),s("p",[t._v("この関数内でデータセットを更新することができます。チャートは関数から戻る際に自動的に更新されますので、"),s("code",[t._v("chart.update()")]),t._v(" を呼び出す必要はありません。次の例では、一定の更新間隔でデータを追加する方法を示しています。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myChart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scales"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'realtime'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        realtime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onRefresh")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dataset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);