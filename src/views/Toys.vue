<template>
    <div>
      <appbar></appbar>
      <v-main>
        <v-btn @click="displayToyForm">New toy</v-btn>
        <toys-list/>
        <toy-form></toy-form>
      </v-main>
    </div>
</template>

<script>
import Appbar from '../components/Appbar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions} from 'vuex'

export default {
  components: {
    ToysList,
    Appbar,
    ToyForm
        
  },
  methods: { ...mapActions(['displayToyForm']) }
}
</script>

