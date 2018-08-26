<template>

  <div>
    <tedx-header/>
    <tedx-carousel/>
    <v-container fluid>
    <v-container>
      <v-layout row wrap>
      <tedex-speaker-detail v-for="speaker of speakers" :key="speaker.id" :speaker="speaker"></tedex-speaker-detail>
      </v-layout>
      </v-container>
      <v-container grid-list-md text-xs-center>

        <tedx-sponsor></tedx-sponsor>
    </v-container>
    <v-container>
      <tedx-team-member/>
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
import TedxSponsor from '@/components/sponsor/Tedx-sponsor.vue'
import TedxTeamMember from '@/components/team/Tedx-team-member.vue'


export default {
  components: {
    TedxHeader,
    TedxFooter,
    TedxCarousel,
    TedexSpeakerDetail,
    TedxSponsor,
    TedxTeamMember

  },
  data(){
    return {
      speakers: speakersData.speakers
    }
  },
  mounted(){
    console.log('Speaker ID :')
    console.log(this.speakers[0].id)
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
