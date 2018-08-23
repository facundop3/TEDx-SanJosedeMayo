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
                        <iframe width="100%" height="100%" :src="currentSpeaker.videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{currentSpeaker.name}}</h3>
                        <div>{{currentSpeaker.summary}}</div>
                      </div>
                    </v-card-title>
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
import speakersData from '@/assets/speakers-2018.json'


export default {

  components: {
    TedxHeader,
    TedxFooter
  },
  data(){
    return {
          currentSpeaker: speakersData.speakers
      } 
  },
  created: function (){
    console.log(this.currentSpeaker)
  },
    mounted(){
      console.log(this.$route.params.id)
      console.log(this.currentSpeaker)
      const currentId = this.$route.params.id
      this.currentSpeaker = this.currentSpeaker.filter(function (speaker) { return speaker.id == currentId})[0]
      console.log(this.currentSpeaker.name)

    }
}
</script>
<style scoped>

</style>
