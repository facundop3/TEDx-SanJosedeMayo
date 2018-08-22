<template>
  <div>
    <tedx-header></tedx-header>
      <v-layout>
        <v-flex xs10 sm4>

          <v-card>
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                  xs12
                >
                  <v-card>
                    <v-card-media
                      height="315px"
                      width="560px"
                    >
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KTVz-gBokrc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </v-card-media>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    <tedx-footer></tedx-footer>
  </div>
</template>
<script>

import TedxHeader from './shared/Tedx-header.vue'
import TedxFooter from './shared/Tedx-footer.vue'

export default {

  components: {
    TedxHeader,
    TedxFooter
  },
  data: () => ({
    })
}
</script>
<style scoped>

</style>
