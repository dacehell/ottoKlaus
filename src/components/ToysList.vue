<template>
    <div>

        <v-simple-table fixed-header height="300px" class='mx-6'>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.price }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>
                <v-btn color="primary" fab small dark @click='editToy(toy.id)'>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn class= 'mx-4' color="red" fab small dark @click="deleteToy(toy.id)"><v-icon>mdi-delete</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
       ...mapActions(['setToys','deleteProduct', 'setCurrentToy','displayToyForm']),
      deleteToy(id){
          let confirmation = confirm('Estas seguro que deseas eliminar este juguete?');
          if (confirmation) {
          this.deleteProduct(id)
        }
      },
      editToy(id){
        //establecer el juguete actual, en base al id entregado
        this.setCurrentToy(id)

        //desplegar el formulario con el juguete actual
        this.displayToyForm()
      }
    },
    computed: {
        ...mapState(['toys'])
    },
    created(){
        this.setToys()
        
        //this.deleteProduct()
    }
}
</script>

<style>

</style>