---
title: Redux(2)---Data Flow
top: false
cover: false
toc: true
mathjax: true
date: 2020-04-07 14:48:55
password:
summary:
tags:
categories:
---
Redux architecture revolves around a <strong>strict unidirectional data<strong> flow.

### 1. You call store.dispatch(action)

from anywhere in your app, including components and XHR callbacks, or even at scheduled intervals.

### 2. The Redux store calls the reducer function you gave it.

The store will pass two arguments to the reducer: the <font color = orange>current state</font> tree and the <font color = orange>action</font>. 
``` javascript
// The current application state (list of todos and chosen filter)
let previousState = {
  visibleTodoFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Read the docs.',
      complete: false
    }
  ]
}

// The action being performed (adding a todo)
let action = {
  type: 'ADD_TODO',
  text: 'Understand the flow.'
}

// Your reducer returns the next application state
let nextState = todoApp(previousState, action)
```

> Note that a reducer is a pure function. It only computes the next state. It should be completely predictable: calling it with the same inputs many times should produce the same outputs. It shouldn't perform any side effects like API calls or router transitions. These should happen before an action is dispatched.

### 3. The root reducer may combine the output of multiple reducers into a single state tree.
### 4. The Redux store saves the complete state tree returned by the root reducer.

This new tree is now the next state of your app! Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.

Now, the UI can be updated to reflect the new state. If you use bindings like React Redux, this is the point at which component.setState(newState) is called.

https://redux.js.org/basics/data-flow