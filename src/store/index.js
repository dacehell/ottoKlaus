import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

function emptyToy()  {
  return{
    id: null,
      data: {
      name: '',
      price: 0,
      code: '',
      stock: 0
      }

  }
                
                  }

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false,
    //deleteProduct: {},
    currentToy: emptyToy(),
    overlay: false
  },
  mutations: {
    SET_TOYS(state, data) {state.toys = data},
    DISPLAY_TOY_FORM(state) {state.showForm = true},
    HIDE_TOY_FORM(state) {state.showForm = false},
    UPDATE_NAME(state, name) {state.currentToy.data.name = name},
    UPDATE_PRICE(state, price) {state.currentToy.data.price = price},
    UPDATE_CODE(state, code) {state.currentToy.data.code = code},
    UPDATE_STOCK(state, stock) {state.currentToy.data.stock = stock},
    SET_CURRENT_TOY(state, toy){state.currentToy = toy},
    DISPLAY_OVERLAY(state) {state.overlay = true},
    HIDE_OVERLAY(state) {state.overlay = false},
    SET_EMPTY_TOY(state) {
      state.currentToy.id = null;
      const empty = emptyToy()
      Object.keys(empty.data).forEach(key => {
        state.currentToy.data[key] = empty.data[key]
      })
    },

    //DELETE_PRODUCT(state, data) {state.deleteProduct = data}
  },
  actions: {
    setToys({commit}) {
      commit('DISPLAY_OVERLAY')
      axios.get('https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_EMPTY_TOY')
        commit('SET_TOYS', response.data)
      }).finally(() => {
        commit('HIDE_OVERLAY')
      })
      
    },
    displayToyForm({commit}) {commit('DISPLAY_TOY_FORM')},
    hideToyForm({commit}) {commit('HIDE_TOY_FORM')},
    updateName({commit}, name) {commit('UPDATE_NAME', name)},
    updatePrice({commit}, price) {commit('UPDATE_PRICE', price)},
    updateCode({commit}, code) {commit('UPDATE_CODE', code)},
    updateStock({commit}, stock) {commit('UPDATE_STOCK', stock)},
    cancelForm({commit}){
      commit('SET_EMPTY_TOY') 
      commit('HIDE_TOY_FORM')
    },
    postToy({dispatch, state}) {
      axios.post('https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toy', state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    },
    deleteProduct({dispatch}, id){
      axios.delete(`https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toy/${id}`)
      .then(() => {
         dispatch('setToys')
      })
    },
    setCurrentToy({commit}, id){
      axios.get(`https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toy/${id}`)
      .then((response)=> {
        commit('SET_CURRENT_TOY', response.data)
      })
    },
    updateToy({state, dispatch}, id) {
      axios.put(`https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(() => {
        dispatch('setToys')
        
      })
    }
    /* deleteProduct({commit}, toy) {
            let confirmation = confirm("Estas Seguro??")
            if (confirmation) {

            axios.delete(`https://us-central1-ottoklauss-b9eea.cloudfunctions.net/toys/toy/${toy}`
            .then(() => {
              alert('Producto eliminado exitosamente')
              commit('DELETE_PRODUCT', toy)
            })
          }
        } */
  },
  modules: {
  }
})
