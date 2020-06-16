    <template>
       <div class="text-center">
    <v-dialog
      :value ='showForm'
      width="500"
      persistent
      >

      <v-container>

          <v-row>
              <v-col>
                  <v-card class='px-4 pt-4'>
                    <v-card-title
                    class="headline grey lighten-2 mb-4"
                    primary-title
                    >
                    Add Toy
                    </v-card-title>
                        <v-text-field label="nombre" type="text" :value='currentToy.data.name' @input="updateName" outlined/>
        
                <v-text-field label="precio" prefix='$' :value='currentToy.data.price' @input="updatePrice" outlined/>

                <v-text-field label="codigo" type="text" :value='currentToy.data.code' @input="updateCode" outlined/>
        
                <v-text-field label="stock" suffix="unidades" :value='currentToy.data.stock' @input="updateStock" outlined/>    

                    <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                <v-btn
                color="primary"
                @click="submitForm"
                >
                {{ !!currentToy.id ? 'Actualizar' : 'Crear' }}
                </v-btn>
                <v-btn @click="hideToyForm">Close</v-btn>
                </v-card-actions>
                </v-card>
              </v-col>
          </v-row>

    </v-container>

      
    </v-dialog>
  </div>
</template>


 <script>
 
import {mapState, mapActions} from 'vuex'    
export default{
    methods: { 
        ...mapActions(['hideToyForm', 'updateName', 'updatePrice','updateCode', 'updateStock', 'postToy', 'updateToy']),
        submitForm() {
            if(this.currentToy.id) {
                //si tiene id llama a la funcion que actualiza los datos
                this.updateToy(this.currentToy.id)
            } else {
                this.postToy()
            }
            this.hideToyForm()
        }
    },
    computed: {
        ...mapState(['showForm','currentToy'])
    }
}
 
 </script>  