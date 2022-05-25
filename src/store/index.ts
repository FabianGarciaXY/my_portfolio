import { createStore } from 'vuex'

export default createStore({
  state: {

    projects: {
      project_1: {
        name: 'Restaurant Page with Vue Js',
        link : 'https://fabiangarciaxy.github.io/Practica_Semana5_Vue/#/',
        repository: 'https://github.com/FabianGarciaXY/Practica_Semana5_Vue',
        img: 'image1'
      },
      project_2: {
        name: ' Etch a Sketch',
        link: 'https://fabiangarciaxy.github.io/Etch_a_Sketch/',
        repository: 'https://github.com/FabianGarciaXY/Etch_a_Sketch',
        img: 'image2'
      },
      project_3: {
        name: 'Hack The Ocean',
        link: '',
        repository: 'https://github.com/OmarVenturaP/HackTheOcean',
        img: "image3"
      },
      project_4: {
        name: 'Calculator',
        link: ' https://fabiangarciaxy.github.io/Calculator/',
        repository: 'https://github.com/FabianGarciaXY/Calculator',
        img: "image4"
      },
      project_5: {
        name: 'project 5',
        link: '',
        repository: '',
        img: "image1"
      },
      project_6: {
        name: 'project 6',
        link: '',
        repository: '',
        img: "image1"
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
