<template>
    <b-container fluid>
      <h1>Обобщение на офертата:</h1>
      <b-card>
        <div class="card-text">
          {{ chair.title + ' ' + chair.model }}
        </div>
      </b-card>
      <h2>
        Допълнително оборудване
      </h2>
      <b-table :items="options" :fields="tableFields">
          <template slot="title" slot-scope="row">
            <div class="text-left">
              {{ row.item.title + ' ' + row.item.model + ' ' + row.item.manufacturer}}
            </div>
          </template>
      </b-table>
      <b-card header-bg-variant="dark" header-text-variant="white">
        <div class="efok" slot="header">
          <h3>Данни за контакт:</h3>
        </div>
        <b-row>
          <b-col md="12">
            <b-alert variant="primary" show>
              <b-row>
                <b-col md="2" style="text-align: right;">
                  <i class="fa fa-info fa-2x" aria-hidden="true"></i>
                </b-col>
                <b-col style="font-size: 18px; font-family: Ubuntu; text-align: left">
                  За да можем да Ви предложим най-актуална цена за избраното от Вас оборудване, ще ни бъде необходима малко повече инфромация за контакт с Вас.
                </b-col>
              </b-row>
            </b-alert>
          </b-col>
          <!--<b-col md="12">-->
            <!--<b-alert variant="info" show>-->
              <!--<b-row>-->
                <!--<b-col md="2"><i class="fa fa-exclamation-triangle fa-9x" aria-hidden="true"></i></b-col>-->
                <!--<b-col class="text-left" style="font-size: 25px; font-family: Ubuntu">-->
                  <!--Искаме да Ви уведомим, преди да натиснете бутона по-долу, че ние, Фирма Дентакон, няма да споделяме информацията от този формуляр-->
                  <!--с 3-ти лица. Това е обикновена форма за обратна връзка, за да можем да отговорим на Вашето запитване.-->
                <!--</b-col>-->
              <!--</b-row>-->
            <!--</b-alert>-->
          <!--</b-col>-->
        </b-row>
        <div class="card-text text-left">
          <b-form horizontal>
            <b-col>
              <b-form-group label="Вашето име">
                <b-form-input v-model="$v.customer.firstname.$model"></b-form-input>
                <!--{{ $v.customer.firstname}}-->
                <b-col>
                    <b-alert show variant="danger" v-if="!$v.customer.firstname.required">
                      Това поле е задължително
                    </b-alert>
                    <b-alert show variant="danger" v-if="!$v.customer.firstname.minLength">
                       Това поле трябва да съдържа минимум 3 букви
                    </b-alert>
                </b-col>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="фамилия">
                <b-form-input v-model="$v.customer.lastname.$model"></b-form-input>
                <b-col>
                  <b-alert show variant="danger" v-if="!$v.customer.lastname.required">
                    Това поле е задължително
                  </b-alert>
                  <b-alert show variant="danger" v-if="!$v.customer.lastname.minLength">
                    Това поле трябва да съдържа минимум 3 букви
                  </b-alert>
                </b-col>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Телефон за обратна връзка">
                <b-form-input v-model="$v.customer.phone.$model"></b-form-input>
                <b-alert variant="danger" :show="!$v.customer.phone.numeric">
                  Моля, използвайте само цифри в това поле!
                </b-alert>
              </b-form-group>
            </b-col>
            <b-col>

              <b-form-group label="Email(без автоматичен абонамент):">
                <b-form-input v-model="$v.customer.email.$model"></b-form-input>
              </b-form-group>

            </b-col>
            <b-col md="12">
              <b-btn @click="submitForm" size="lg" block>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Изпрати запитването
              </b-btn>
            </b-col>



          </b-form>
        </div>
      </b-card>
    </b-container>
</template>

<script>
  import { required, minLength, between, numeric } from 'vuelidate/lib/validators'
  import { validationMixin } from "vuelidate"

  export default {
        name: "clientDetails",
      data() {
          return {
            chair: this.$store.state.selectedChair,
            options: this.$store.state.chosenOptions,
            customer: {
              firstname: '',
              lastname: '',
              phone: '',
              email: '',
            },

            tableFields: {
              title: {
                label: 'Наименование'
              },
              qty: {
                label: 'Количество'
              },

            }
          }
      },
      mixins: [
        validationMixin
      ],
      validations: {
          customer: {
            firstname: {
              required,
              minLength: minLength(3)
            },
            lastname: {
              required,
              minLength: minLength(3)
            },
            phone: {
              required,
              minLength: minLength(4),
              numeric
            },
            email: {
              required
            }
          }
      },
      mounted() {
          console.log(this.$store.state.chosenOptions)
        console.log(this.$store.state.selectedChair)
      },
      methods: {
          submitForm() {
            console.log(this.$v)
          }
      }

    }
</script>

<style scoped>

</style>
