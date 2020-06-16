<template>
  <div>
    <v-app-bar
        app
        color="light-blue darken-4"
        dark
      >
        <div class="d-flex align-center">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            src="https://i.pinimg.com/originals/bd/78/58/bd7858f02dd4ad290520a7486a26bdc4.png"
            transition="scale-transition"
            width="80"
          />
        </div>

        <v-spacer></v-spacer>

        <v-btn text @click="logout">
          <span class="mr-2" >Logout</span>
          <v-icon>mdi-lock</v-icon>
        </v-btn>
      </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      })
    }
  }
}
</script>