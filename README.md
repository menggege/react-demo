## React-router和React-router-dom

### React-router和React-router-dom的选择
  很多刚使用react在接触到react-router、react-router-dom的概念的时候会很模糊，二者到底有什么区别？
  1、React-router
     React-router提供了一些router的核心api，包括Router, Route, Switch等，但是它没有提供dom操作进行跳转的api。
  2、React-router-dom
     React-router-dom提供了BrowserRouter, Route, Link等api,我们可以通过dom的事件控制路由。例如点击一个按钮进行跳转，大多数情况下我们是这种情况，所以在开发过程中，我们更多是使用React-router-dom。

### React-router-dom的核心用法
HashRouter和BrowserRouter，它们两个是路由的基本，我们需要将它们包裹在最外层，我们只要选择其一就可以了，它们的不同：
HashRouter它是通过hash值来对路由进行控制
BrowserRouter很多情况下我们并不新闻路径带#，这时我们就需要用到BrowserRouter

### Switch
Switch常常会用来包裹Route，它里面不能放其他元素，用来只显示一个路由。

### Route
控制路径对应显示的组件。我们经常用的是exact、path以及component属性。
exact控制匹配到/路径时不会再继续向下匹配，path标识路由的路径，component表示路径对应显示的组件

### Link和NavLink的选择
两者都是可以控制路由跳转的，不同点是NavLink的api更多
```
<Link to="/path"/>
<Link to={{
            pathname:'/path',
            search:'?id=1'}
          }/>
```

### NavLink
它可以为当前选中的路由设置类名、样式以及回调函数等
exact用于严格匹配，匹配到/则不会继续向下匹配，to则是控制跳转的路径，activeClassName是选中状态的类名，我们可以为其添加样式
```
<NavLink activeClassName="selected" to="/path"/>
```

### match
match是在使用router之后被放入props中的一个属性，在class创建的组件中我们需要通过this.props.match来获取match之中的信息


## redux、react-redux
产生原因：组件直接传递参数或者事件都需要props一层层代理，对于复杂组件，它可能嵌套的子组件非常多，层级也比较深，那么，如果还采用props链条来维护组件通信或者数据共享，将非常困难，也不利于开发和维护。
Redux并不是专为React开发的，它可以应用在任何框架上。针对React工程，可以使用react-redux库帮助我们更快，更便捷得搭建Redux工程，让代码更加精简。

### Action
 Action 是把数据从应用传到 store 的有效载荷
 Action 本质上是 JavaScript 普通对象。我们约定，action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作，除了 type 字段外，action 对象的结构完全由你自己决定

 ### Reducer
 Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state
 reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

 ### Store
 在前面的章节中，我们学会了使用 action 来描述“发生了什么”，和使用 reducers 来根据 action 更新 state 的用法。Store 就是把它们联系到一起的对象
 再次强调一下 Redux 应用只有一个单一的 store，当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store

### connect
connect方法做的事情是将state和dispatch绑定到Connect组件的参数上，然后Connect组件将你当前的App组件封装起来，使得App组件可以通过props获取到父组件Connect传递的state和props。
这也就是为什么你可以在自己写的组件上面直接通过this.props访问到state和action。有的人是通过store去读取state和dispatch action，也是一样的道理。

### Provider
Provider是顶层组件的作用，将store作为上下文提供给全局共享，而Connect组件是局部组件，将某个react组件包装起来，传递指定的state和props给该组件访问。
