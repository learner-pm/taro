(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1008:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),c=(t(0),t(1810)),a=["components"],i={title:"\u4f7f\u7528 Redux"},p={unversionedId:"redux",id:"version-3.x/redux",isDocsHomePage:!1,title:"\u4f7f\u7528 Redux",description:"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 React \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 Redux \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002",source:"@site/versioned_docs/version-3.x/redux.md",slug:"/redux",permalink:"/taro/docs/redux",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/redux.md",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"\u793e\u533a\u4f18\u8d28\u7269\u6599",permalink:"/taro/docs/treasures"},next:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro/docs/css-modules"}},s=[{value:"Hooks",id:"hooks",children:[{value:"\u5728 Redux \u4e2d\u4f7f\u7528 Hooks",id:"\u5728-redux-\u4e2d\u4f7f\u7528-hooks",children:[]},{value:"<code>useSelector</code>",id:"useselector",children:[]},{value:"<code>useDispatch</code>",id:"usedispatch",children:[]},{value:"<code>useStore</code>",id:"usestore",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 Taro \u4e2d\u53ef\u4ee5\u81ea\u7531\u5730\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"React")," \u751f\u6001\u4e2d\u975e\u5e38\u6d41\u884c\u7684\u6570\u636e\u6d41\u7ba1\u7406\u5de5\u5177 ",Object(c.b)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," \u6765\u89e3\u51b3\u590d\u6742\u9879\u76ee\u7684\u6570\u636e\u7ba1\u7406\u95ee\u9898\u3002"),Object(c.b)("p",null,"\u9996\u5148\u8bf7\u5b89\u88c5 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u3001 ",Object(c.b)("inlineCode",{parentName:"p"},"react-redux")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"redux-thunk")," \u3001 ",Object(c.b)("inlineCode",{parentName:"p"},"redux-logger")," \u7b49\u4e00\u4e9b\u9700\u8981\u7528\u5230\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u4e2d\u95f4\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ yarn add redux react-redux redux-thunk redux-logger\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save redux react-redux redux-thunk redux-logger\n")),Object(c.b)("p",null,"\u968f\u540e\u53ef\u4ee5\u5728\u9879\u76ee ",Object(c.b)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u65b0\u589e\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"store")," \u76ee\u5f55\uff0c\u5728\u76ee\u5f55\u4e0b\u589e\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\u7528\u6765\u914d\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"store"),"\uff0c\u6309\u81ea\u5df1\u559c\u597d\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u7684\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982\u4e0b\u9762\u4f8b\u5b50\u4e2d\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"redux-thunk")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"redux-logger")," \u8fd9\u4e24\u4e2a\u4e2d\u95f4\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'},"import { createStore, applyMiddleware, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from '../reducers'\n\nconst composeEnhancers =\n  typeof window === 'object' &&\n  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   \n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n      // Specify extension\u2019s options like name, actionsBlacklist, actionsCreators, serialize...\n    }) : compose\n\nconst middlewares = [\n  thunkMiddleware\n]\n\nif (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {\n  middlewares.push(require('redux-logger').createLogger())\n}\n\nconst enhancer = composeEnhancers(\n  applyMiddleware(...middlewares),\n  // other store enhancers if any\n)\n\nexport default function configStore () {\n  const store = createStore(rootReducer, enhancer)\n  return store\n}\n")),Object(c.b)("p",null,"\u63a5\u4e0b\u6765\u5728\u9879\u76ee\u5165\u53e3\u6587\u4ef6 ",Object(c.b)("inlineCode",{parentName:"p"},"app.js")," \u4e2d\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u4e2d\u63d0\u4f9b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5c06\u524d\u9762\u5199\u597d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"store")," \u63a5\u5165\u5e94\u7528\u4e2d"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/app.js"',title:'"src/app.js"'},"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\n\nimport configStore from './store'\n\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  componentDidMount () {}\n\n  componentDidShow () {}\n\n  componentDidHide () {}\n\n  componentDidCatchError () {}\n\n  // \u5728 App \u7c7b\u4e2d\u7684 render() \u51fd\u6570\u6ca1\u6709\u5b9e\u9645\u4f5c\u7528\n  // \u8bf7\u52ff\u4fee\u6539\u6b64\u51fd\u6570\n  render () {\n    return (\n      <Provider store={store}>\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n\n")),Object(c.b)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u4e86\u3002\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u63a8\u8350\u7684\u90a3\u6837\uff0c\u53ef\u4ee5\u589e\u52a0"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"constants")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"action type")," \u5e38\u91cf"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"actions")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"actions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"reducers")," \u76ee\u5f55\uff0c\u7528\u6765\u653e\u7f6e\u6240\u6709\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"reducers"))),Object(c.b)("p",null,"\u4f8b\u5982\u6211\u4eec\u8981\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u52a0\u3001\u51cf\u8ba1\u6570\u5668\u529f\u80fd"),Object(c.b)("p",null,"\u65b0\u589e ",Object(c.b)("inlineCode",{parentName:"p"},"action type")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/constants/counter.js"',title:'"src/constants/counter.js"'},"export const ADD = 'ADD'\nexport const MINUS = 'MINUS'\n")),Object(c.b)("p",null,"\u65b0\u589e ",Object(c.b)("inlineCode",{parentName:"p"},"reducer")," \u5904\u7406"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/reducers/counter.js"',title:'"src/reducers/counter.js"'},"import { ADD, MINUS } from '../constants/counter'\n\nconst INITIAL_STATE = {\n  num: 0\n}\n\nexport default function counter (state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case ADD:\n      return {\n        ...state,\n        num: state.num + 1\n      }\n    case MINUS:\n      return {\n        ...state,\n        num: state.num - 1\n      }\n    default:\n      return state\n  }\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/reducers/index.js"',title:'"src/reducers/index.js"'},"import { combineReducers } from 'redux'\nimport counter from './counter'\n\nexport default combineReducers({\n  counter\n})\n\n")),Object(c.b)("p",null,"\u65b0\u589e ",Object(c.b)("inlineCode",{parentName:"p"},"action")," \u5904\u7406"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/actions/counter.js"',title:'"src/actions/counter.js"'},"import {\n  ADD,\n  MINUS\n} from '../constants/counter'\n\nexport const add = () => {\n  return {\n    type: ADD\n  }\n}\nexport const minus = () => {\n  return {\n    type: MINUS\n  }\n}\n\n// \u5f02\u6b65\u7684 action\nexport function asyncAdd () {\n  return dispatch => {\n    setTimeout(() => {\n      dispatch(add())\n    }, 2000)\n  }\n}\n\n")),Object(c.b)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u9875\u9762\uff08\u6216\u8005\u7ec4\u4ef6\uff09\u4e2d\u8fdb\u884c\u4f7f\u7528\uff0c\u6211\u4eec\u5c06\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u63d0\u4f9b\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u5c06 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u4e0e\u6211\u4eec\u7684\u9875\u9762\u8fdb\u884c\u8fde\u63a5"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/index/index.js"',title:'"src/pages/index/index.js"'},"import React, { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { View, Button, Text } from '@tarojs/components'\n\nimport { add, minus, asyncAdd } from '../../actions/counter'\n\nimport './index.css'\n\n\n@connect(({ counter }) => ({\n  counter\n}), (dispatch) => ({\n  add () {\n    dispatch(add())\n  },\n  dec () {\n    dispatch(minus())\n  },\n  asyncAdd () {\n    dispatch(asyncAdd())\n  }\n}))\nclass Index extends Component {\n  componentWillReceiveProps (nextProps) {\n    console.log(this.props, nextProps)\n  }\n\n  componentWillUnmount () { }\n\n  componentDidShow () { }\n\n  componentDidHide () { }\n\n  render () {\n    return (\n      <View className='index'>\n        <Button className='add_btn' onClick={this.props.add}>+</Button>\n        <Button className='dec_btn' onClick={this.props.dec}>-</Button>\n        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>\n        <View><Text>{this.props.counter.num}</Text></View>\n        <View><Text>Hello, World</Text></View>\n      </View>\n    )\n  }\n}\n\nexport default Index\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"connect")," \u65b9\u6cd5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570 ",Object(c.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"mapStateToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u53d7\u6700\u65b0\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"state")," \u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u4e8e\u5c06 ",Object(c.b)("inlineCode",{parentName:"li"},"state")," \u6620\u5c04\u5230\u7ec4\u4ef6\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"props")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"mapDispatchToProps"),"\uff0c\u51fd\u6570\u7c7b\u578b\uff0c\u63a5\u6536 ",Object(c.b)("inlineCode",{parentName:"li"},"dispatch()")," \u65b9\u6cd5\u5e76\u8fd4\u56de\u671f\u671b\u6ce8\u5165\u5230\u5c55\u793a\u7ec4\u4ef6\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"props")," \u4e2d\u7684\u56de\u8c03\u65b9\u6cd5")),Object(c.b)("h2",{id:"hooks"},"Hooks"),Object(c.b)("h3",{id:"\u5728-redux-\u4e2d\u4f7f\u7528-hooks"},"\u5728 Redux \u4e2d\u4f7f\u7528 Hooks"),Object(c.b)("p",null,"\u4f7f\u7528 hooks \u7684\u57fa\u672c\u8bbe\u7f6e\u548c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"connect")," \u7684\u8bbe\u7f6e\u662f\u4e00\u6837\u7684\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e\u4f60\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"store"),"\uff0c\u5e76\u628a\u4f60\u7684\u5e94\u7528\u653e\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const store = configreStore(rootReducer)\n\nclass App extends Components {\n    render () {\n        return (\n            <Provider store={store}>\n                <Index />\n            </Provider>\n        )\n    }\n}\n")),Object(c.b)("p",null,"\u5728\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"redux")," \u63d0\u4f9b\u7684 Hooks API \u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u3002"),Object(c.b)("h3",{id:"useselector"},Object(c.b)("inlineCode",{parentName:"h3"},"useSelector")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const result : any = useSelector(selector : Function, equalityFn? : Function)\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useSelector")," \u5141\u8bb8\u4f60\u4f7f\u7528 selector \u51fd\u6570\u4ece\u4e00\u4e2a Redux Store \u4e2d\u83b7\u53d6\u6570\u636e\u3002"),Object(c.b)("p",null,"Selector \u51fd\u6570\u5927\u81f4\u76f8\u5f53\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"connect")," \u51fd\u6570\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u53c2\u6570\u3002Selector \u4f1a\u5728\u7ec4\u4ef6\u6bcf\u6b21\u6e32\u67d3\u65f6\u8c03\u7528\u3002",Object(c.b)("inlineCode",{parentName:"p"},"useSelector")," \u540c\u6837\u4f1a\u8ba2\u9605 Redux store\uff0c\u5728 Redux action \u88ab dispatch \u65f6\u8c03\u7528\u3002"),Object(c.b)("p",null,"\u4f46 ",Object(c.b)("inlineCode",{parentName:"p"},"useSelector")," \u8fd8\u662f\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"mapStateToProps")," \u6709\u4e00\u4e9b\u4e0d\u540c\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e0d\u50cf ",Object(c.b)("inlineCode",{parentName:"li"},"mapStateToProps")," \u53ea\u8fd4\u56de\u5bf9\u8c61\u4e00\u6837\uff0cSelector \u53ef\u80fd\u4f1a\u8fd4\u56de\u4efb\u4f55\u503c\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a action dispatch \u65f6\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"useSelector")," \u4f1a\u628a selector \u7684\u524d\u540e\u8fd4\u56de\u503c\u505a\u4e00\u6b21\u6d45\u5bf9\u6bd4\uff0c\u5982\u679c\u4e0d\u540c\uff0c\u7ec4\u4ef6\u4f1a\u5f3a\u5236\u66f4\u65b0\u3002"),Object(c.b)("li",{parentName:"ul"},"Selector \u51fd\u6570\u4e0d\u63a5\u53d7 ",Object(c.b)("inlineCode",{parentName:"li"},"ownProps")," \u53c2\u6570\u3002\u4f46 selector \u53ef\u4ee5\u901a\u8fc7\u95ed\u5305\u8bbf\u95ee\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4f20\u9012\u4e0b\u6765\u7684 props\u3002")),Object(c.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),Object(c.b)("p",null,"\u57fa\u672c\u4f7f\u7528\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { useSelector } from 'react-redux'\n\nexport const CounterComponent = () => {\n  const counter = useSelector(state => state.counter)\n  return <View>{counter}</View>\n}\n")),Object(c.b)("p",null,"\u4f7f\u7528\u95ed\u5305\u51b3\u5b9a\u5982\u4f55 select \u6570\u636e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"export const TodoListItem = props => {\n  const todo = useSelector(state => state.todos[props.id])\n  return <View>{todo.text}</View>\n}\n\n")),Object(c.b)("h4",{id:"\u8fdb\u9636\u4f7f\u7528"},"\u8fdb\u9636\u4f7f\u7528"),Object(c.b)("p",null," \u4f60\u8fd8\u53ef\u4ee5\u8bbf\u95ee ",Object(c.b)("a",{parentName:"p",href:"https://react-redux.js.org/api/hooks#using-memoizing-selectors"},"react-redux \u6587\u6863")," \u4e86\u89e3\u5982\u4f55\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"reselect")," \u7f13\u5b58 selector\u3002"),Object(c.b)("h3",{id:"usedispatch"},Object(c.b)("inlineCode",{parentName:"h3"},"useDispatch")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const dispatch = useDispatch()\n")),Object(c.b)("p",null,"\u8fd9\u4e2a Hook \u8fd4\u56de Redux store \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"dispatch")," \u5f15\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765 dispatch actions\u3002"),Object(c.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b-1"},"\u4f7f\u7528\u6848\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { useDispatch } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <Button onClick={() => dispatch({ type: 'increment-counter' })}>\n        Increment counter\n      </Button>\n    </View>\n  )\n}\n")),Object(c.b)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"dispatch")," \u4f20\u9012\u56de\u8c03\u5230\u4e00\u4e2a\u5b50\u7ec4\u4ef6\u65f6\uff0c\u63a8\u8350\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"useCallback")," \u628a\u56de\u8c03\u7f13\u5b58\u8d77\u6765\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u53ef\u80fd\u56e0\u4e3a\u5f15\u7528\u6539\u53d8\u800c\u91cd\u65b0\u6e32\u67d3\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"// CounterComponent.js\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n  const incrementCounter = useCallback(\n    () => dispatch({ type: 'increment-counter' }),\n    [dispatch]\n  )\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <MyIncrementButton onIncrement={incrementCounter} />\n    </View>\n  )\n}\n\n// IncrementButton.js\nconst MyIncrementButton = ({ onIncrement }) => (\n  <Button onClick={onIncrement}>Increment counter</Button>\n)\n\nexport default Taro.memo(MyIncrementButton)\n")),Object(c.b)("h3",{id:"usestore"},Object(c.b)("inlineCode",{parentName:"h3"},"useStore")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const store = useStore()\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"useStore")," \u8fd4\u56de\u4e00\u4e2a store \u5f15\u7528\u548c ",Object(c.b)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u5f15\u7528\u5b8c\u5168\u4e00\u81f4\u3002"),Object(c.b)("p",null,"\u8fd9\u4e2a hook \u53ef\u80fd\u5e76\u4e0d\u7ecf\u5e38\u4f7f\u7528\u3002",Object(c.b)("inlineCode",{parentName:"p"},"useSelector")," \u5927\u90e8\u5206\u60c5\u51b5\u662f\u4f60\u7684\u7b2c\u4e00\u9009\u62e9\uff0c\u5982\u679c\u9700\u8981\u66ff\u6362 reducers \u7684\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u4f7f\u7528\u5230\u8fd9\u4e2a API\u3002"),Object(c.b)("h4",{id:"\u4f7f\u7528\u6848\u4f8b-2"},"\u4f7f\u7528\u6848\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react'\nimport { useStore } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const store = useStore()\n\n  // EXAMPLE ONLY! Do not do this in a real app.\n  // The component will not automatically update if the store state changes\n  return <div>{store.getState()}</div>\n}\n")))}u.isMDXComponent=!0},1810:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||c;return t?o.a.createElement(m,i(i({ref:n},s),{},{components:t})):o.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);