import { createStore } from 'vuex'

export default createStore({
  state: {

    projects: {
      project_1: {
        id_el: "a",
        name: 'Restaurant Page with Vue Js',
        info: 'Project carried out during the LaunchX frontend programming Bootcamp. VueJs, JavaScript and CSS were used.',
        link : 'https://fabiangarciaxy.github.io/Practica_Semana5_Vue/#/',
        repository: 'https://github.com/FabianGarciaXY/Practica_Semana5_Vue',
        img: 'image1'
      },
      project_2: {
        id_el: "b",
        name: ' Etch a Sketch',
        link: 'https://fabiangarciaxy.github.io/Etch_a_Sketch/',
        info: 'Game made only with JavaScript HTML and CSS. The challenge was done as part of The Odin Project curriculum.',
        repository: 'https://github.com/FabianGarciaXY/Etch_a_Sketch',
        img: 'image2'
      },
      project_3: {
        id_el: "c",
        name: 'Hack The Ocean',
        info: 'Project carried out during the LaunchX Hackathon for developer training. We used Vue JS for the frontend and Node Js for the backend.',
        link: '',
        repository: 'https://github.com/OmarVenturaP/HackTheOcean',
        img: "image3"
      },
      project_4: {
        id_el: "d",
        name: 'Calculator',
        link: ' https://fabiangarciaxy.github.io/Calculator/',
        info: 'Online calculator made as part of The Odin Project curriculum using JavaScript, CSS and HTML only.',
        repository: 'https://github.com/FabianGarciaXY/Calculator',
        img: "image4"
      },
      project_5: {
        id_el: "e",
        name: 'Telegram Bot',
        info: 'Practice done during the LaunchX course for fullstack development to make a telegram bot using, Jest, Eslint, Express, telegram-bot-api and dotenv.',
        link: '',
        repository: 'https://github.com/FabianGarciaXY/Fizzbuzz',
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