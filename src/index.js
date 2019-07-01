import { createStore } from 'redux'
import todoApp from './reducers'
import {
  addTodo,
  toggleTodoCompleted,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions'

// optionally takes default state as second arg
const store = createStore(todoApp)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTodo('get milk'))
store.dispatch(addTodo('get eggs'))
store.dispatch(addTodo('pay bills'))

store.dispatch(toggleTodoCompleted(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))

store.dispatch(toggleTodoCompleted(1))

unsubscribe()
