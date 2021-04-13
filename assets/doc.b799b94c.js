import{c as t,o as d,D as e}from"./index.bd4b4460.js";const o={class:"markdown-body"},n=e('<h1>Dialog 对话框</h1><h3>介绍</h3><p>模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。</p><p>弹出框组件支持函数调用和组件调用两种方式。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Dialog } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Dialog);\n</code></pre><h2>标签式写法</h2><p>如果Dialog内容有复杂交互，可使用Dialog的标签式用法。注意标签使用的时候，属性不建议使用驼峰，推荐使用如下写法</p><pre><code class="language-html">&lt;nut-dialog :title=&quot;title&quot; :close-on-click-overlay=&quot;false&quot; :content=&quot;content&quot; v-model:visible=&quot;visible&quot;&gt;&lt;/nut-dialog&gt;\n</code></pre><pre><code class="language-javascript">import { ref } from &#39;vue&#39;;\n\nexport default {\n  setup() {\n    const visible = ref(true);\n    const title = &#39;标签式使用&#39;;\n    const content = &#39;内容&#39;;\n  \n    return { visible,title,content };\n  },\n};\n</code></pre><h2>Props</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>String</td><td>-</td></tr><tr><td>content</td><td>内容，支持HTML</td><td>String</td><td>-</td></tr><tr><td>close-on-click-overlay</td><td>点击蒙层是否关闭对话框</td><td>Boolean</td><td>true</td></tr><tr><td>noFooter</td><td>是否隐藏底部按钮栏</td><td>Boolean</td><td>false</td></tr><tr><td>noOkBtn</td><td>是否隐藏确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>noCancelBtn</td><td>是否隐藏取消按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelText</td><td>取消按钮文案</td><td>String</td><td>”取消“</td></tr><tr><td>okText</td><td>确定按钮文案</td><td>String</td><td>”确 定“</td></tr><tr><td>okBtnDisabled</td><td>禁用确定按钮</td><td>Boolean</td><td>false</td></tr><tr><td>cancelAutoClose</td><td>取消按钮是否默认关闭弹窗</td><td>Boolean</td><td>true</td></tr><tr><td>textAlign</td><td>文字对齐方向，可选值同css的text-align</td><td>String</td><td>“center”</td></tr><tr><td>closeOnPopstate</td><td>是否在页面回退时自动关闭</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>背景是否锁定</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>ok</td><td>确定按钮回调</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>取消按钮回调</td><td>Function</td><td>-</td></tr><tr><td>open</td><td>关闭按钮回调</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>关闭回调，任何情况关闭弹窗都会触发</td><td>Function</td><td>-</td></tr></tbody></table>',14),r={expose:[],setup:e=>(e,r)=>(d(),t("div",o,[n]))};export default r;
