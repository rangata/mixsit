<template>
    <b-container fluid>
      <b-row>
        <b-card-group deck
        >
            <b-card variant="primary" v-for="product in products" class="primaryx"
                    v-bind:header-bg-variant="$store.state.selectedChair === product ? 'success' : ''"
                    v-bind:footer-bg-variant="$store.state.selectedChair === product ? 'success' : ''"
                    v-bind:border-variant="$store.state.selectedChair === product ? 'success' : ''"
                    v-bind:text-variant="$store.state.selectedChair === product ? 'white' : ''"
                    :key="product.title"
            >
              <div class="sld" slot="header">
                <h3>{{ product.title }}</h3>
                {{ product.subtitle }}

              </div>
              <div class="rows">
                <div v-for="option in product.pictures">
                  <b-img :src="option.link"
                       :alt="product.title" fluid>
                  </b-img>
                </div>
              </div>
              <div class="card-text">
                {{ product.productDescription}}
              </div>

              <div class="flo" slot="footer">
                <b-button block variant="primary" @click="sets(product)">
                  Избери
                </b-button>
              </div>
            </b-card>
        </b-card-group>
      </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "list",
      data() {
          return {
            products: this.$store.state.posts
          }
      },
      mounted() {
        // console.log( this.$store.state.posts)

      },
      methods: {
          sets(product){
            this.$store.commit('selectChair', product)
            this.$router.push({name: 'configure', params: {
              mach: this.$store.state.selectedChair.model
              }
            })
          }
      },
      computed: {
          loadOptionFeature() {

          }
      }
    }
</script>

<style scoped>

</style>
