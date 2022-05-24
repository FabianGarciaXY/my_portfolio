import { createStore } from 'vuex'

export default createStore({
  state: {

    projects: {
      project_1: {
        name: 'Restaurant Page with Vue Js',
        repo: 'https://github.com/fabiangarciaxy/Practica_Semana5_Vue',
        link : 'fabiangarciaxy.github.io/Practica_Semana5_Vue',
        img: '../assets/image1.png'
      },
      project_2: {
        name: ' Etch a Sketch',
        repository: '',
        img: '../assets/image1.png'
      },
      project_3: {
        name: 'project 3',
        repository: '',
        img: ""
      },
      project_4: {
        name: 'project 4',
        repository: '',
        img: ""
      },
      project_5: {
        name: 'project 5',
        repository: '',
        img: ""
      },
      project_6: {
        name: 'project 6',
        repository: '',
        img: ""
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
