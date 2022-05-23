import { createStore } from 'vuex'

export default createStore({
  state: {

    projects: {
      project_1: {
        name: 'Project 1',
        repository: ''
      },
      project_2: {
        name: 'project 2',
        repository: ''
      },
      project_3: {
        name: 'project 3',
        repository: ''
      },
      project_4: {
        name: 'project 4',
        repository: ''
      },
      project_5: {
        name: 'project 5',
        repository: ''
      },
      project_6: {
        name: 'project 6',
        repository: ''
      }
    }
  },
  getters: {

    getProjects(state) {
      return state.projects
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
