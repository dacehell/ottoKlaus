<template>
    <div>
      <appbar></appbar>
      <v-main>
        <v-btn class="light-blue darken-4 mx-6" dark @click="displayToyForm">New toy</v-btn>
        <toys-list/>
        <toy-form></toy-form>
      </v-main>
      <div class="text-center">
    <v-btn
      color="deep-purple accent-4"
      class="white--text"
      @click="overlay = !overlay"
    >
      Launch Application
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
    </div>
</template>

<script>
import Appbar from '../components/Appbar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions, mapState} from 'vuex'

export default {

  components: {
    ToysList,
    Appbar,
    ToyForm
        
  },
  methods: { ...mapActions(['displayToyForm']) },
  computed: {
    ...mapState(['overlay'])
  }
}
</script>

6