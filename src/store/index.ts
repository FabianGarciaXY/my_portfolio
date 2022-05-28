import { createStore } from 'vuex'

export default createStore({
  state: {

    projects: {
      project_1: {
        id_el: "a",
        name: 'Restaurant Page with Vue Js',
        link : 'https://fabiangarciaxy.github.io/Practica_Semana5_Vue/#/',
        repository: 'https://github.com/FabianGarciaXY/Practica_Semana5_Vue',
        img: 'image1'
      },
      project_2: {
        id_el: "b",
        name: ' Etch a Sketch',
        link: 'https://fabiangarciaxy.github.io/Etch_a_Sketch/',
        repository: 'https://github.com/FabianGarciaXY/Etch_a_Sketch',
        img: 'image2'
      },
      project_3: {
        id_el: "c",
        name: 'Hack The Ocean',
        link: '',
        repository: 'https://github.com/OmarVenturaP/HackTheOcean',
        img: "image3"
      },
      project_4: {
        id_el: "d",
        name: 'Calculator',
        link: ' https://fabiangarciaxy.github.io/Calculator/',
        repository: 'https://github.com/FabianGarciaXY/Calculator',
        img: "image4"
      },
      project_5: {
        id_el: "e",
        name: 'Telegram Bot',
        link: '',
        repository: '',
        img: "image1"
      },
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
  },
});