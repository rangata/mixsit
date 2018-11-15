<template>
    <b-container fluid>
        <b-card>
          <b-row>
            <b-col cols="5">
              <b-img fluid :src="selectedChair.pictures[0].link" :alt="selectedChair.model"></b-img>
            </b-col>
            <b-col>
             <b-card bg-variant="primary" body-bg-variant="white" header-text-variant="white">
               <div id="asd" slot="header">
                 <h1>Спецификация</h1>
                 <span>
                   {{ selectedChair.title}}
                 </span>
                 <span>
                ,  {{ selectedChair.subtitle}}
                 </span>
               </div>
               <p class="card-text text-left"></p>
               <div class="card-text text-left">
                 <div class="few" v-for="sls of selectedChair.productDescription">
                     <h3>
                       <strong>
                         {{ sls.section }}
                       </strong>
                     </h3>
                     <div v-for="params of sls.parameters" class="text-left">
                       {{ params.name }}
                     </div>

                 </div>
               </div>

               <div class="dlof" slot="footer">
                 <b-btn block variant="white">
                   Повече.
                 </b-btn>
               </div>
             </b-card>
            </b-col>
          </b-row>
          <b-container>
            <b-row>
              <hr>
            </b-row>
          </b-container>
              <h1>Изберете допълнително оборудване за Вашия стол</h1>
                  <b-row>
                   <b-col cols="md-2">
                     <h3>Периферия от</h3>
                     <b-img src="https://www.wh.com/_img/logo.png"></b-img>
                   </b-col>

                    <b-col cols="md-10">
                      <b-col v-for="(option,category) of groups" :key="category">
                          <h2 class="text-left card-header">{{ category }}</h2>
                        <hr>
                        <b-card-group columns>
                          <b-card v-for="(optionData, index) of option" :key="index" header-bg-variant="secondary" header-text-variant="white"
                                  footer-tag="footer"
                                  :header-bg-variant="chosenOptions.indexOf(optionData) !== -1 ? 'success' : 'secondary' ">
                            <div class="title" slot="header">
                              <h3>
                                {{ optionData.title }}
                              </h3>
                              <div slot="sub-title">{{ optionData.manufacturer }}, модел: {{ optionData.model }}</div>
                            </div>
                            <b-card :img-src="optionData.pictures[0]"></b-card>
                            <b-card-body>
                                <div class="text-left">
                                  {{ optionData.description}}
                                </div>
                            </b-card-body>


                            <b-modal :id="'modal' + category + index"
                                     size="lg"
                                     header-text-variant="white"
                                     header-bg-variant="success">
                              <b-col cols="md-12">
                                <!--<b-img :src="optionData.pictures[0]" width="150px" height="100px"></b-img>-->
                              </b-col>
                              <div slot="modal-title">
                                <h3>
                                  {{ optionData.title }},  {{ optionData.model}}
                                </h3>

                              </div>
                              <div class="" v-show="optionData.optionFeatures">
                              <b-table :items="optionData.optionFeatures">

                              </b-table>
                                <p style="font-size: 11px;">
                                Източник на тази информация: {{ optionData.infoSource }} от {{ optionData.sourceDate }}
                                </p>
                              </div>
                            </b-modal>
                            <div slot="footer" :footer-bg-variant="chosenOptions.indexOf(optionData) !== -1 ? 'success' : 'secondary'">
                                <b-button-group>
                                  <b-btn size="lg" v-b-modal="showInfoForOption(index, category)"> <i class="fa fa-info"></i>
                                    Повече
                                  </b-btn>
                                  <b-btn size="lg" variant="success" @click="selectOption(optionData)" v-show="chosenOptions.indexOf(optionData) === -1">
                                    Избери
                                  </b-btn>
                                  <b-btn size="lg" @click="removeOption(optionData)" variant="danger" v-show="chosenOptions.indexOf(optionData) !== -1">
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                    Премахни
                                  </b-btn>
                                </b-button-group>
                              <hr>
                              <b-alert variant="success" :show="chosenOptions.indexOf(optionData) !== -1">
                                <i class="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                              </b-alert>
                            </div>
                          </b-card>
                        </b-card-group>
                    </b-col>
                   </b-col>
                 </b-row>
          </b-card>

      <b-button block variant="success" @click="navTo">Продължи</b-button>
    </b-container>
</template>

<script>
    export default {
        name: "configure",
      data () {
          return {
            selectedChair: this.$store.state.selectedChair,
            modalOpen: false,
            chosenOptions: []
          }
      },
      mounted() {

        // console.log(this.$store.state.selectedChair)
          if (this.$store.state.selectedChair === '' || this.$store.state.selectedChair === undefined) {
            this.$router.push({
              path: '/products'
            })
          }
          if (this.$store.state.selectedOptions === '' || this.$store.state.selectedOptions === undefined) {
            this.chosenOptions = this.$store.state.chosenOptions
          }
      },
      methods: {
        navTo() {
          this.$store.commit('selectedOptions', this.chosenOptions)
          this.$router.push({
            path: '/step'
          })
        },
        showInfoForOption(id,category) {
            return 'modal' + category + id;
        },
        selectOption(optionData) {
          console.log(this.chosenOptions.indexOf(optionData))
          this.chosenOptions.push(optionData)
        },
        removeOption(optionData){
          this.chosenOptions.splice(this.chosenOptions[this.chosenOptions.indexOf(optionData)], 1);
          console.log(this.chosenOptions)

        }

      },
      computed:{
          groups() {

            const gro = _.groupBy(this.selectedChair.possibleOptions, 'category');
            return gro;

          }
      }
    }
</script>

<style scoped>

</style>
