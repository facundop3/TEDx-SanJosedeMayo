<template>

  <div>
    <tedx-header/>
    <tedx-carousel/>
    <v-container fluid>
    <v-container>
      <v-layout row wrap>
      <tedex-speaker-detail v-for="speaker of speakers" :key="speaker.id" :speaker="speaker"></tedex-speaker-detail>
      </v-layout>
      <v-layout row wrap>
        <tedx-sponsor :sponsor="{img:'https://tedxsanjosedemayo.org/images/sponsors/marcre.png'}"/>
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
import TedxCarousel from '@/components/Tedx-carousel.vue'
import speakersData from '@/assets/speakers-2018.json'
import TedexSpeakerDetail from '@/components/Tedx-speaker-detail.vue'
import TedexSponsor from '@/components/sponsor/Tedx-sponsor.vue'

export default {
  components: {
    TedxHeader,
    TedxFooter,
    TedxCarousel,
    TedexSpeakerDetail,
    TedexSponsor

  },
  data(){
    return {
      speakers: speakersData.speakers
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
