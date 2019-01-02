(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2097"],{2798:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("Row",[n("Col",[n("Card",[n("Row",{staticClass:"operation"},[n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.addRole}},[t._v("添加角色")]),n("Button",{attrs:{icon:"md-trash"},on:{click:t.delAll}},[t._v("批量删除")]),n("Button",{attrs:{icon:"md-refresh"},on:{click:t.init}},[t._v("刷新")])],1),n("Row",[n("Alert",{attrs:{"show-icon":""}},[t._v("\n                        已选择 "),n("span",{staticClass:"select-count"},[t._v(t._s(t.selectCount))]),t._v(" 项\n                        "),n("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])])],1),n("Row",[n("Table",{ref:"table",attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data,sortable:"custom"},on:{"on-sort-change":t.changeSort,"on-selection-change":t.changeSelect}})],1),n("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[n("Page",{attrs:{current:t.pageNumber,total:t.total,"page-size":t.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)],1),n("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.roleModalVisible,callback:function(e){t.roleModalVisible=e},expression:"roleModalVisible"}},[n("Form",{ref:"roleForm",attrs:{model:t.roleForm,"label-width":80,rules:t.roleFormValidate}},[n("FormItem",{attrs:{label:"角色名称",prop:"name"}},[n("Input",{attrs:{placeholder:"按照Spring Security约定建议以‘ROLE_’开头"},model:{value:t.roleForm.name,callback:function(e){t.$set(t.roleForm,"name",e)},expression:"roleForm.name"}})],1),n("FormItem",{attrs:{label:"备注",prop:"description"}},[n("Input",{model:{value:t.roleForm.description,callback:function(e){t.$set(t.roleForm,"description",e)},expression:"roleForm.description"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:t.cancelRole}},[t._v("取消")]),n("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.submitRole}},[t._v("提交")])],1)],1),n("Modal",{attrs:{title:"分配权限(点击选择)","mask-closable":!1,width:500,styles:{top:"30px"}},model:{value:t.permModalVisible,callback:function(e){t.permModalVisible=e},expression:"permModalVisible"}},[n("Tree",{ref:"tree",attrs:{data:t.permData,multiple:""}}),t.treeLoading?n("Spin",{attrs:{size:"large"}}):t._e(),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:t.cancelPermEdit}},[t._v("取消")]),n("Button",{on:{click:t.selectTreeAll}},[t._v("全选/反选")]),n("Button",{attrs:{type:"primary",loading:t.submitPermLoading},on:{click:t.submitPermEdit}},[t._v("提交")])],1)],1)],1)},i=[],o=(n("7f7f"),n("ac6a"),n("55dd"),n("365c")),c={name:"role-manage",data:function(){var t=this;return{loading:!0,treeLoading:!0,submitPermLoading:!1,sortColumn:"createdAt",sortType:"desc",modalType:0,roleModalVisible:!1,permModalVisible:!1,modalTitle:"",roleForm:{description:""},roleFormValidate:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},submitLoading:!1,selectList:[],selectCount:0,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"角色名称",key:"name",sortable:!0},{title:"备注",key:"description",sortable:!0},{title:"创建时间",key:"createdAt",sortable:!0,sortType:"desc"},{title:"更新时间",key:"updateTime",sortable:!0},{title:"是否设置为注册用户默认角色",key:"defaultRole",align:"center",render:function(e,n){return n.row.defaultRole?e("div",[e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.cancelDefault(n.row)}}},"取消默认")]):e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.setDefault(n.row)}}},"设为默认")])}},{title:"操作",key:"action",align:"center",width:300,render:function(e,n){return e("div",[e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.editPerm(n.row)}}},"分配权限"),e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.edit(n.row)}}},"编辑"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n.row)}}},"删除")])}}],data:[],pageNumber:1,pageSize:10,total:0,permData:[],editRolePermId:"",selectPermList:[],selectAllFlag:!1}},methods:{init:function(){this.getRoleList(),this.getPermList()},changePage:function(t){this.pageNumber=t,this.getRoleList(),this.clearSelectAll()},changePageSize:function(t){this.pageSize=t,this.getRoleList()},changeSort:function(t){this.sortColumn=t.key,this.sortType=t.order,"normal"===t.order&&(this.sortType=""),this.getRoleList()},getRoleList:function(){var t=this;this.loading=!0;var e={pageNumber:this.pageNumber,pageSize:this.pageSize,sort:this.sortColumn,order:this.sort};Object(o["R"])(e).then(function(e){t.loading=!1,!0===e.success&&(t.data=e.result.content,t.total=e.result.totalElements)})},getPermList:function(){var t=this;this.treeLoading=!0,Object(o["I"])().then(function(e){t.treeLoading=!1,!0===e.success&&(t.deleteDisableNode(e.result),t.permData=e.result)})},deleteDisableNode:function(t){var e=this;t.forEach(function(t){-1===t.status&&(t.title="[已禁用] "+t.title,t.disabled=!0),t.children&&t.children.length>0&&e.deleteDisableNode(t.children)})},cancelRole:function(){this.roleModalVisible=!1},submitRole:function(){var t=this;this.$refs.roleForm.validate(function(e){e&&(0===t.modalType?(t.submitLoading=!0,Object(o["f"])(t.roleForm).then(function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("操作成功"),t.getRoleList(),t.roleModalVisible=!1)})):(t.submitLoading=!0,Object(o["B"])(t.roleForm).then(function(e){t.submitLoading=!1,!0===e.success&&(t.$Message.success("操作成功"),t.getRoleList(),t.roleModalVisible=!1)})))})},addRole:function(){this.modalType=0,this.modalTitle="添加角色",this.$refs.roleForm.resetFields(),delete this.roleForm.id,this.roleModalVisible=!0},edit:function(t){for(var e in this.modalType=1,this.modalTitle="编辑角色",t)null===t[e]&&(t[e]="");var n=JSON.stringify(t),r=JSON.parse(n);this.roleForm=r,this.roleModalVisible=!0},remove:function(t){var e=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除角色 "+t.name+" ?",onOk:function(){Object(o["p"])(t.id).then(function(t){!0===t.success&&(e.$Message.success("删除成功"),e.getRoleList())})}})},setDefault:function(t){var e=this;this.$Modal.confirm({title:"确认设置",content:"您确认要设置所选的 "+t.name+" 为注册用户默认角色?",onOk:function(){var n={id:t.id,isDefault:!0};Object(o["ab"])(n).then(function(t){!0===t.success&&(e.$Message.success("操作成功"),e.getRoleList())})}})},cancelDefault:function(t){var e=this;this.$Modal.confirm({title:"确认取消",content:"您确认要取消所选的 "+t.name+" 角色为默认?",onOk:function(){var n={id:t.id,isDefault:!1};Object(o["ab"])(n).then(function(t){!0===t.success&&(e.$Message.success("操作成功"),e.getRoleList())})}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(t){this.selectList=t,this.selectCount=t.length},delAll:function(){var t=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var e="";t.selectList.forEach(function(t){e+=t.id+","}),e=e.substring(0,e.length-1),Object(o["p"])(e).then(function(e){!0===e.success&&(t.$Message.success("删除成功"),t.clearSelectAll(),t.getRoleList())})}})},editPerm:function(t){this.editRolePermId=t.id;var e=t.permissions;this.checkPermTree(this.permData,e),this.permModalVisible=!0},checkPermTree:function(t,e){var n=this;t.forEach(function(t){n.hasPerm(t,e)?t.selected=!0:t.selected=!1,t.children&&t.children.length>0&&n.checkPermTree(t.children,e)})},hasPerm:function(t,e){for(var n=!1,r=0;r<e.length;r++)if(t.id===e[r].id){n=!0;break}return!!n},selectTreeAll:function(){this.selectAllFlag=!this.selectAllFlag;var t=this.selectAllFlag;this.selectedTreeAll(this.permData,t)},selectedTreeAll:function(t,e){var n=this;t.forEach(function(t){t.selected=e,t.children&&t.children.length>0&&n.selectedTreeAll(t.children,e)})},submitPermEdit:function(){var t=this;this.submitPermLoading=!0;var e="",n=this.$refs.tree.getSelectedNodes();n.forEach(function(t){e+=t.id+","}),e=e.substring(0,e.length-1),Object(o["C"])(this.editRolePermId,{permIds:e}).then(function(e){t.submitPermLoading=!1,!0===e.success&&(t.$Message.success("操作成功"),t.getRoleList(),t.permModalVisible=!1)})},cancelPermEdit:function(){this.permModalVisible=!1}},mounted:function(){this.init()}},u=c,s=(n("4261"),n("2877")),l=Object(s["a"])(u,r,i,!1,null,null,null);l.options.__file="roleManage.vue";e["default"]=l.exports},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"365c":function(t,e,n){"use strict";n.d(e,"U",function(){return i}),n.d(e,"K",function(){return o}),n.d(e,"X",function(){return c}),n.d(e,"cb",function(){return u}),n.d(e,"db",function(){return s}),n.d(e,"h",function(){return l}),n.d(e,"bb",function(){return a}),n.d(e,"T",function(){return d}),n.d(e,"g",function(){return f}),n.d(e,"D",function(){return b}),n.d(e,"G",function(){return m}),n.d(e,"t",function(){return g}),n.d(e,"q",function(){return h}),n.d(e,"V",function(){return p}),n.d(e,"W",function(){return O}),n.d(e,"c",function(){return j}),n.d(e,"v",function(){return v}),n.d(e,"l",function(){return y}),n.d(e,"J",function(){return k}),n.d(e,"R",function(){return R}),n.d(e,"f",function(){return L}),n.d(e,"B",function(){return P}),n.d(e,"ab",function(){return M}),n.d(e,"C",function(){return A}),n.d(e,"p",function(){return w}),n.d(e,"I",function(){return B}),n.d(e,"d",function(){return F}),n.d(e,"y",function(){return z}),n.d(e,"n",function(){return T}),n.d(e,"N",function(){return S}),n.d(e,"S",function(){return C}),n.d(e,"m",function(){return I}),n.d(e,"j",function(){return V}),n.d(e,"L",function(){return $}),n.d(e,"b",function(){return _}),n.d(e,"u",function(){return x}),n.d(e,"F",function(){return D}),n.d(e,"s",function(){return E}),n.d(e,"k",function(){return N}),n.d(e,"M",function(){return J}),n.d(e,"P",function(){return q}),n.d(e,"e",function(){return G}),n.d(e,"z",function(){return H}),n.d(e,"Y",function(){return K}),n.d(e,"Z",function(){return Q}),n.d(e,"o",function(){return U}),n.d(e,"O",function(){return W}),n.d(e,"H",function(){return X}),n.d(e,"x",function(){return Y}),n.d(e,"A",function(){return Z}),n.d(e,"w",function(){return tt}),n.d(e,"a",function(){return et}),n.d(e,"i",function(){return nt}),n.d(e,"Q",function(){return rt}),n.d(e,"E",function(){return it}),n.d(e,"r",function(){return ot});n("cadf"),n("551c"),n("097d");var r=n("7f80"),i=function(t){return Object(r["b"])("/common/captcha/init")},o=function(t,e){return Object(r["b"])("/common/captcha/draw/".concat(t))},c=function(t){return Object(r["c"])("/login",t)},u=function(t){return Object(r["b"])("/user/info",t)},s=function(t){return Object(r["c"])("/user/edit",t)},l=function(t){return Object(r["c"])("/user/modifyPass",t)},a=function(t){return Object(r["c"])("/user/unlock",t)},d=function(t){return Object(r["b"])("/user/getByCondition",t)},f=function(t){return Object(r["c"])("/user/admin/add",t)},b=function(t){return Object(r["c"])("/user/admin/edit",t)},m=function(t,e){return Object(r["c"])("/user/admin/enable/".concat(t),e)},g=function(t,e){return Object(r["c"])("/user/admin/disable/".concat(t),e)},h=function(t,e){return Object(r["a"])("/user/delByIds/".concat(t),e)},p=function(t){return Object(r["b"])("/department/getByParentId/0",t)},O=function(t,e){return Object(r["b"])("/department/getByParentId/".concat(t),e)},j=function(t){return Object(r["c"])("/department/add",t)},v=function(t){return Object(r["c"])("/department/edit",t)},y=function(t,e){return Object(r["a"])("/department/delByIds/".concat(t),e)},k=function(t){return Object(r["b"])("/role/getAllList",t)},R=function(t){return Object(r["b"])("/role/getAllByPage",t)},L=function(t){return Object(r["c"])("/role/save",t)},P=function(t){return Object(r["c"])("/role/edit",t)},M=function(t){return Object(r["c"])("/role/setDefault",t)},A=function(t,e){return Object(r["c"])("/role/editRolePerm/".concat(t),e)},w=function(t,e){return Object(r["a"])("/role/delAllByIds/".concat(t),e)},B=function(t){return Object(r["b"])("/permission/getAllList",t)},F=function(t){return Object(r["c"])("/permission/add",t)},z=function(t){return Object(r["c"])("/permission/edit",t)},T=function(t,e){return Object(r["a"])("/permission/delByIds/".concat(t),e)},S=function(t){return Object(r["b"])("/log/getAllByPage",t)},C=function(t){return Object(r["b"])("/log/search",t)},I=function(t,e){return Object(r["a"])("/log/delByIds/".concat(t),e)},V=function(t){return Object(r["a"])("/log/delAll",t)},$=function(t){return Object(r["b"])("/config/getByCondition",t)},_=function(t){return Object(r["c"])("/config/add",t)},x=function(t){return Object(r["c"])("/config/edit",t)},D=function(t,e){return Object(r["c"])("/config/enable/".concat(t),e)},E=function(t,e){return Object(r["c"])("/config/disable/".concat(t),e)},N=function(t,e){return Object(r["a"])("/config/delByIds/".concat(t),e)},J=function(){return Object(r["b"])("/home/statistics")},q=function(t){return Object(r["b"])("/quartzJob/getAllByPage",t)},G=function(t){return Object(r["c"])("/quartzJob/add",t)},H=function(t){return Object(r["c"])("/quartzJob/edit",t)},K=function(t){return Object(r["c"])("/quartzJob/pause",t)},Q=function(t){return Object(r["c"])("/quartzJob/resume",t)},U=function(t,e){return Object(r["a"])("/quartzJob/delByIds/".concat(t),e)},W=function(t){return Object(r["b"])("/profit/getByCondition",t)},X=function(t){return Object(r["b"])("/agent/getByCondition",t)},Y=function(t){return Object(r["c"])("/agent/changeMobile",t)},Z=function(t){return Object(r["c"])("/agent/changeRelation",t)},tt=function(t){return Object(r["c"])("/agent/changeLevel",t)},et=function(t){return Object(r["c"])("/agent/add",t)},nt=function(t){return Object(r["c"])("/agent/checkRecommend",t)},rt=function(t){return Object(r["c"])("/agent/getMyRecommend",t)},it=function(t,e){return Object(r["c"])("/agent/enableAreaAgent/".concat(t),e)},ot=function(t,e,n){return Object(r["c"])("/agent/disableAreaAgent/".concat(t,"/").concat(e),n)}},4261:function(t,e,n){"use strict";var r=n("b240"),i=n.n(r);i.a},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d8e8"),o=n("4bf8"),c=n("79e5"),u=[].sort,s=[1,2,3];r(r.P+r.F*(c(function(){s.sort(void 0)})||!c(function(){s.sort(null)})||!n("2f21")(u)),"Array",{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},b240:function(t,e,n){}}]);