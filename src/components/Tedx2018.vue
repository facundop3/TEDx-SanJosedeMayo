<template>
  <div>
    <tedx-header  @moveTo="moveToMain"/>
    <v-container fluid>
    <v-container>
       <v-layout row wrap class="title-layout" ref="ORADORES">
         <h1>TedxSanJosedeMayo 2018</h1>
       </v-layout>
      <v-layout row wrap>
      <tedex-speaker-detail v-for="speaker of speakers" :key="speaker.id" :speaker="speaker"></tedex-speaker-detail>
      </v-layout>
      </v-container>
      <v-slide-y-transition mode="out-in">
      </v-slide-y-transition>
    </v-container>
    <tedx-footer></tedx-footer>
  </div>
</template>

<script>
import TedxHeader from './shared/Tedx-header.vue'
import TedxFooter from './shared/Tedx-footer.vue'
import eventData2018 from '@/assets/event-data-2018.json'
import TedexSpeakerDetail from '@/components/Tedx-speaker-detail.vue'

export default {
  components: {
    TedxHeader,
    TedxFooter,
    TedexSpeakerDetail

  },
  data(){
    return {
      speakers: eventData2018.speakers,
      teamMembers: eventData2018.teamMembers
    }
  },
  methods:{
    moveToMain(ev){
      let ourSponsors = this.$refs[ev]
      this.$SmoothScroll(ourSponsors, 1000)
    }
  }
}
</script>

<style scoped>
.title-layout{
  justify-content: center;
  margin-bottom: 2em;
}

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
