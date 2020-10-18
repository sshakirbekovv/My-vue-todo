import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    addActivity (state, newTodo) {
      state.todos.push(newTodo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteActivity (state, id) {
      state.todos = state.todos.filter((val) => val.id !== id)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
    async addActivity ({ commit }, { newTodo }) {
      commit('addActivity', newTodo)
    }
  },
  state: {
    todos: [{
      id: 1,
      title: 'Hello!',
      completed: false
    },
    {
      id: 2,
      title: 'How are you?',
      completed: false
    },
    {
      id: 3,
      title: 'What is your name?',
      completed: false
    }],
    errorMessage: ''
  },
  getters: {
    allTodos (state) {
      const todos = JSON.parse(localStorage.getItem('todos'))
      if (todos && todos.length > 0) {
        state.todos = todos
      }
      return state.todos
    }
  }
})
