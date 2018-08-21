<template>

  <div>
    <tedx-header></tedx-header>
    <tedx-carousel></tedx-carousel>
    <v-container fluid>
    <v-container>
      <v-layout row wrap>
          <tedx-speaker v-for="speaker of speakers" :key="speaker.id" v-bind:speaker="speaker"></tedx-speaker>
      </v-layout>
    </v-container>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
    <tedx-footer></tedx-footer>
  </div>
</template>

<script>
import TedxHeader from './shared/Tedx-header.vue'
import TedxFooter from './shared/Tedx-footer.vue'
import TedxSpeaker from './Tedx-speaker.vue'
import TedxCarousel from '@/components/Tedx-carousel.vue'
import SpeakersData from '@/assets/speakers-2018.json'

export default {
  name: 'HelloWorld',
  components: {
    TedxHeader,
    TedxFooter,
    TedxSpeaker,
    TedxCarousel

  },
  data(){
    return {
      speakers: SpeakersData.speakers
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
<style>
.v-carousel {
  height: 100vh !important;
}
</style>
