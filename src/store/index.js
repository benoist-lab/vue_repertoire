import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adresseTest: {
      rue: "1 rue des paquerettes",
      codePostal: "29200",
      ville: "Brest"
    },
    adresseTest2: {
      rue: "18 place du port",
      codePostal: "76400",
      ville: "Fécamp"
    },
    adresses: [
      {
        id: 1,
        rue: "47 avenue du boulanger",
        codePostal: "29200",
        ville: "Brest"
      },
      {
        id: 2,
        rue: "25 Bis rue du cheval",
        codePostal: "76400",
        ville: "Fécamp"
      },
      {
        id: 3,
        rue: "rue du port",
        codePostal: "29830",
        ville: "Saint-Pabu"
      },
      {
        id: 4,
        rue: "123 rue des prés",
        codePostal: "29160",
        ville: "Lanvéoc"
      }
    ],
    personnes: [
      {
        id: 1,
        nom: "Paul",
        prenom: "Legal",
        sexe: "M",
        adresses: [3]
      },
      {
        id: 2,
        nom: "Marie",
        prenom: "Legal",
        sexe: "F",
        adresses: [3]
      },
      {
        id: 3,
        nom: "Pierre",
        prenom: "Lapioche",
        sexe: "M",
        adresses: [2]
      },
      {
        id: 4,
        nom: "Henri",
        prenom: "Death",
        sexe: "M",
        adresses: [1,4]
      }

    ]
  },
  getters: {
    firstAdresse: function (state) {

      return state.adresses[0];
    },
    findAdresse: (state) => (id) => {
      for (var i=0;i<state.adresses.length;i++)
      {
        if (state.adresses[i].id===id)
        {
          return state.adresses[i];
        }
      }
      return null;
    },
    findPersonne: (state) => (id) => {
      for (var i=0;i<state.personnes.length;i++)
      {
        if (state.personnes[i].id===id)
        {
          return state.personnes[i];
        }
      }
      return null;
      
    },
    findPersonneAdresse: (state, getters) => (perso) => {
      var tab=[];

      for(var i=0;i<perso.adresses.length;i++){
        tab[i]=getters.findAdresse (perso.adresses[i]);
      }

      return tab;
    } 
  },
  mutations: {
    saveAdresse (state,newAdresse) {
      var adr = this.getters.findAdresse (newAdresse.id);
      
      adr.id=newAdresse.id
			adr.rue=newAdresse.rue
			adr.codePostal=newAdresse.codePostal
      adr.ville=newAdresse.ville      
    },
    savePersonne (state,newPersonne) {
      var per = this.getters.findPersonne (newPersonne.id);

      per.nom=newPersonne.nom;
      per.prenom=newPersonne.prenom;
      per.sexe=newPersonne.sexe;

      for (var i=0;i<newPersonne.adresses.length;i++){
        per.adresses.push (newPersonne.adresses[i]);
      }
    }


  },
  actions: {
  },
  modules: {
  }
})
