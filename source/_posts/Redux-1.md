---
title: Redux(1)---Three Principles and Concepts
top: false
cover: false
toc: true
mathjax: true
date: 2020-04-07 13:47:32
password:
summary:
tags:
categories:
---
## Three Principles
#### 1. Single source of truth
 The state of your whole application is stored in an object tree within a single store.
#### 2. State is read-only
 The only way to change the state is to emit an action, an object describing what happened.
#### 3. Changes are made with pure functions
 To specify how the state tree is transformed by actions, you write pure reducers.
#### Other Tips
- Redux assumes you never mutate your data.
- Redux does not have the concept of a Dispatcher. This is because it relies on pure functions instead of event emitters, and pure functions are easy to compose and don't need an additional entity managing them.
- Redux doesn't care how you store the state—it can be a plain object, an Immutable object, or anything else.

## Three Concepts
#### 1. Action
Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
- Actions must have a <strong>type</strong> property that indicates the type of action being performed. 

#### 2. Reducer
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
- It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue).

#### Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random().

> We'll explore how to perform side effects in the advanced walkthrough. For now, just remember that the reducer must be pure. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

#### 3. Store
The Store is the object that brings <strong>Actions</strong> and <strong>Reducers</strong>  together. 

The store has the following responsibilities:
- Holds application state;
- Allows access to state via getState();
- Allows state to be updated via dispatch(action);
- Registers listeners via subscribe(listener);
- Handles unregistering of listeners via the function returned by subscribe(listener).
``` javascript
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)
```
> It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.


https://redux.js.org/introduction/three-principles
Learning Resources: https://redux.js.org/introduction/learning-resources