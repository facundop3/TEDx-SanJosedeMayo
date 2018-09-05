<template>

  <div>
    <tedx-header @confettiEv="activateConfetti"/>
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
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <template v-for="(teamMember, index) of teamMembers" >
        <tedx-team-member :key="teamMember.id"  :teamMember="teamMember" v-if="index != teamMembers.length -1" :data-text="index"/>
      </template>
        <v-flex xs4 height="382px">
        </v-flex>
        <tedx-team-member :teamMember="teamMembers[teamMembers.length -1]" />
    </v-layout>
    </v-container>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <canvas id="confetti-holder"></canvas>
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
import eventData2018 from '@/assets/event-data-2018.json'
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
      speakers: eventData2018.speakers,
      teamMembers: eventData2018.teamMembers
    }
  },
  methods:{
    activateConfetti: function (){
      let confettiSettings = {"target":"confetti-holder","max":"500","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"15","width":"1680","height":"918"}
      let confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      setTimeout(()=> confetti.clear() , 4000)
    }
  },
  mounted(){
    this.activateConfetti()
  }
}
</script>

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
#confetti-holder{
  position: absolute;
  top: 5em;
}
.v-carousel {
  height: 100vh !important;
}
</style>
