(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{253:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(248),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(265),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(77),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(52),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(251),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(247),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(249),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(250),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(252),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(26),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(21),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(22),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(53),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(78),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__),param_case__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(263),graphql__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(262),graphql__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(332),graphql__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(273),graphql__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(379),graphql__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(937);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_15__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var _={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var r,n;"string"==typeof e?_.content+=e:(_.content+=e.content,(r=_.prepend).push.apply(r,e.prepend||[]),(n=_.append).push.apply(n,e.append||[]))})),[].concat(_.prepend,[_.content],_.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var _;return"string"==typeof e?[(_={},_[e]={},_)]:Array.isArray(e)?e.map((function(e){var _;return"string"==typeof e?((_={})[e]={},_):e})):"object"==typeof e?Object.keys(e).reduce((function(_,r){var n;return[].concat(_,[(n={},n[r]=e[r],n)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,_,r){var n=0,t=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_17__.c)(e,{SelectionSet:{enter:function(e,n,a,i){if(!i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var o=e.selections||[];if(r&&o.length>0){var s=function(){if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_DEFINITION)return a.typeCondition.name.value;if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD){var e=t[t.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var _=e.getFields()[a.name.value];if(!_)throw new Error('Unable to find field "'+a.name.value+'" on type "'+e+'"!');return getBaseType(_.type).name}if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.OPERATION_DEFINITION){if("query"===a.operation)return r.getQueryType().name;if("mutation"===a.operation)return r.getMutationType().name;if("subscription"===a.operation)return r.getSubscriptionType().name}else if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.INLINE_FRAGMENT&&a.typeCondition)return a.typeCondition.name.value;return null}();t.push(r.getType(s))}}},leave:function(e){var _=e.selections||[];r&&_.length>0&&t.pop()}},Field:{enter:function(e,a,i,o,s){if(!e.name.value.startsWith("__")&&!s.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],c=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_SPREAD&&!_.includes(e.name.value)}));if((0===u.length||c.length>0)&&n++,r){var l=t[t.length-1];if(l&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(l)){var p=l.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+l+'"!');hasNullableTypeRecursively(p.type)&&n++}}}}},enter:{VariableDefinition:function(e,r,t,a,i){i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||n++},InputValueDefinition:function(e,r,t,a,i){i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||n++}}}),n>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var _=e.getTypeMap();for(var r in _){var n=e.getType(r);if(Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&isFederationObjectType(n)){var t,a=n.toConfig();a.fields=Object.assign(((t={})[resolveReferenceFieldName]={type:n},t),a.fields);var i=new graphql__WEBPACK_IMPORTED_MODULE_16__.f(a);i.astNode=i.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(i)).definitions[0],i.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:r}}}),_[r]=i}}return e}function removeFederation(e){var _=e.getQueryType().getFields();delete _._entities,delete _._service;var r=e.getTypeMap();return delete r._Service,delete r._Entity,delete r._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var _=e.enabled,r=e.schema;this.enabled=!1,this.enabled=_,this.schema=r,this.providesMap=this.createMapOfProvides()}var _=e.prototype;return _.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},_.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},_.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},_.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},_.skipField=function(e){var _=e.fieldNode,r=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(r)&&isFederationObjectType(r))&&this.isExternalAndNotProvided(_,r)},_.isResolveReferenceField=function(e){var _="string"==typeof e.name?e.name:e.name.value;return this.enabled&&_===resolveReferenceFieldName},_.transformParentType=function(e){var _=this,r=e.fieldNode,n=e.parentType,t=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&isFederationObjectType(n)&&r.name.value===resolveReferenceFieldName){var a=getDirectivesByName("key",n);if(a.length){var i=["{ __typename: '"+n.name+"' } &"],o=getDirectivesByName("requires",r).map(this.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]).map((function(e){return{name:e,required:Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(n.getFields()[e].type)}})),s=this.translateFieldSet(o,t),u=a.map((function(e){var r=_.extractFieldSet(e).map((function(e){return{name:e,required:!0}}));return _.translateFieldSet(r,t)})),c=u.length>1?["(",")"]:["",""],l=c[0],p=c[1];return i.push([l,u.join(" | "),p].join("")),o.length&&i.push("& "+s),i.join(" ")}}return t},_.isExternalAndNotProvided=function(e,_){return this.isExternal(e)&&!this.hasProvides(_,e)},_.isExternal=function(e){return getDirectivesByName("external",e).length>0},_.hasProvides=function(e,_){var r=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.name:e.name.value];return!(!r||!r.length)&&r.includes(_.name.value)},_.translateFieldSet=function(e,_){return"Pick<"+_+", "+e.map((function(e){return"'"+e.name+"'"})).join(" | ")+">"},_.extractFieldSet=function(e){var _=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(_))throw new Error("Nested fields in _FieldSet is not supported");return deduplicate(_.split(/\s+/g))},_.createMapOfProvides=function(){var e=this,_={};return Object.keys(this.schema.getTypeMap()).forEach((function(r){var n=e.schema.getType(r);Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(n)&&Object.values(n.getFields()).forEach((function(r){var n,t=getDirectivesByName("provides",r.astNode).map(e.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]),a=getBaseType(r.type);_[a.name]||(_[a.name]=[]),(n=_[a.name]).push.apply(n,t)}))})),_},e}();function isFederationObjectType(e){var _=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(e)).definitions[0]:e,r=_.name.value,n=_.directives,t=!["Query","Mutation","Subscription"].includes(r),a=!r.startsWith("__"),i=n.some((function(e){return"key"===e.name.value}));return t&&a&&i}function deduplicate(e){return e.filter((function(_,r){return e.indexOf(_)===r}))}function getDirectivesByName(e,_){var r;return(r=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(_)?_.astNode:_)&&r.directives?r.directives.filter((function(_){return _.name.value===e})):[]}var DetailedError=function(e){function _(r,n,t){var a;return(a=e.call(this,r)||this).message=r,a.details=n,a.source=t,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(a),_.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(a),_),a}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(_,e),_}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(254))},274:function(e,_){function r(e){return Promise.resolve().then((function(){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=274},275:function(e,_){function r(e){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=275},280:function(e,_){},941:function(e,_,r){"use strict";r.r(_),r.d(_,"codegen",(function(){return O})),r.d(_,"executePlugin",(function(){return E}));r(269);var n=r(268),t=r(278),a=r.n(t),i=(r(52),r(60),r(271),r(252),r(751),r(53),r(26),r(21),r(22),r(80),r(267),r(247),r(458),r(251),r(279)),o=r(253),s=r(935),u=r(379),c=r(273),l=r(332),p=r(308),d=r(347),f=r(754);function E(e,_){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark((function e(_,r){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.plugin&&"function"==typeof r.plugin){e.next=2;break}throw new o.b('Invalid Custom Plugin "'+_.name+'"',"\n        Plugin "+_.name+" does not export a valid JS object with \"plugin\" function.\n  \n        Make sure your custom plugin is written in the following form:\n  \n        module.exports = {\n          plugin: (schema, documents, config) => {\n            return 'my-custom-plugin-content';\n          },\n        };\n        ");case 2:if(n=_.schemaAst||Object(s.a)(_.schema,_.config),t=_.documents||[],!r.validate||"function"!=typeof r.validate){e.next=13;break}return e.prev=5,e.next=8,r.validate(n,t,_.config,_.outputFilename,_.allPlugins);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(5),new o.b('Plugin "'+_.name+'" validation failed:',"\n            "+e.t0.message+"\n          ");case 13:return e.abrupt("return",Promise.resolve(r.plugin(n,t,"object"==typeof _.config?Object.assign({},_.config):_.config,{outputFile:_.outputFilename,allPlugins:_.allPlugins})));case 14:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}function O(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(a.a.mark((function e(_){var r,t,s,l,p,m,O,g,D,v,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=_.documents||[]).length>0&&!_.skipDocumentsValidation&&b(r),t=Object.keys(_.pluginMap).map((function(e){return _.pluginMap[e]})),_.schemaAst||(_.schemaAst=Object(f.a)(Object.assign({schemas:[],typeDefs:[_.schema],convertExtensions:!0,assumeValid:!0,assumeValidSDL:!0},_.config))),s=!1,l=t.reduce((function(e,r){var n="function"==typeof r.addToSchema?r.addToSchema(_.config):r.addToSchema;return n?Object(f.a)({schemas:[e],typeDefs:[n]}):e}),_.schemaAst),p=M("federation",_.config),!P(p,!1)||l.getDirective("external")||l.getDirective("requires")||l.getDirective("provides")||l.getDirective("key")||(s=!0,l=Object(f.a)({schemas:[l],typeDefs:[o.d],convertExtensions:!0,assumeValid:!0,assumeValidSDL:!0})),s&&(_.schema=Object(u.parse)(Object(d.h)(l))),m="object"==typeof _.config&&!Array.isArray(_.config)&&_.config.skipDocumentsValidation,!(_.schemaAst&&r.length>0)||m){e.next=17;break}return O=_.config&&_.config.externalFragments?_.config.externalFragments:[],e.next=15,Object(d.i)(_.schemaAst,[].concat(r,O.map((function(e){return{location:e.importFrom,document:{kind:c.a.DOCUMENT,definitions:[e.node]}}}))));case 15:g=e.sent,Object(d.b)(g);case 17:return D=new Set,v=new Set,e.next=21,Promise.all(_.plugins.map(function(){var e=Object(i.a)(a.a.mark((function e(r){var t,i,s,u,c,p,d,f,m,O,g;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.keys(r)[0],i=_.pluginMap[t],s=r[t]||{},u="object"!=typeof s?s:Object.assign({},_.config,{},s),e.next=6,E({name:t,config:u,parentConfig:_.config,schema:_.schema,schemaAst:l,documents:_.documents,outputFilename:_.filename,allPlugins:_.plugins,skipDocumentsValidation:_.skipDocumentsValidation},i);case 6:if("string"!=typeof(c=e.sent)){e.next=11;break}return e.abrupt("return",c||"");case 11:if(!Object(o.f)(c)){e.next=15;break}if(c.append&&c.append.length>0)for(p=Object(n.a)(c.append);!(d=p()).done;)f=d.value,v.add(f);if(c.prepend&&c.prepend.length>0)for(m=Object(n.a)(c.prepend);!(O=m()).done;)g=O.value,D.add(g);return e.abrupt("return",c.content||"");case 15:return e.abrupt("return","");case 16:case"end":return e.stop()}}),e)})));return function(_){return e.apply(this,arguments)}}()));case 21:return y=e.sent,e.abrupt("return",[].concat(h(Array.from(D.values())),y,Array.from(v.values())).join("\n"));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return e.startsWith("/*")||e.startsWith("//")||e.startsWith(" *")||e.startsWith(" */")||e.startsWith("*/")?0:e.startsWith("package")?1:e.startsWith("import")?2:3}function h(e){return e.sort((function(e,_){var r=D(e),n=D(_);return r<n?-1:r>n?1:0}))}function b(e){var _={};e.forEach((function(e){Object(l.c)(e.document,{OperationDefinition:function(r){void 0!==r.name&&(_[r.name.value]||(_[r.name.value]={paths:new Set,contents:new Set}),_[r.name.value].paths.add(e.location),_[r.name.value].contents.add(Object(p.a)(r)))}})}));var r=Object.keys(_);if(r.length){var n=r.filter((function(e){return _[e].contents.size>1}));if(!n.length)return;var t=n.map((function(e){return("\n      * "+e+" found in:\n        "+[].concat(_[e].paths).map((function(e){return("\n            - "+e+"\n          ").trimRight()})).join("")+"\n  ").trimRight()})).join("");throw new o.b("Not all operations have an unique name: "+n.join(", "),"\n        Not all operations have an unique name\n        "+t+"\n      ")}}function P(){for(var e=arguments.length,_=new Array(e),r=0;r<e;r++)_[r]=arguments[r];var n=_.find((function(e){return"boolean"==typeof e}));return"boolean"!=typeof n?_[_.length-1]:n}function M(e,_){return(r=_)&&"object"==typeof r&&!Array.isArray(r)?_[e]:void 0;var r}}}]);