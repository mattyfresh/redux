import { combineReducers } from 'redux'

import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
} from './actions'

const { SHOW_ALL } = VisibilityFilters

// only deals with setting the visibility filter, hence state is just a string
export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// only deals with todos, hence state = array<Todo>
export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ]
    case TOGGLE_TODO:
      // generate a new list of todo's to avoid mutating state object directly
      return state.map((todo, i) => {
        if (i === action.index) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
})

export default todoApp

// the above is equivalent to:
// export const todoApp = (state = {}, action) => {
//   // returns the final state of your app.. the same as combineReducers()
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
