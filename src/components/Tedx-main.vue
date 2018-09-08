<template>
  <div>
    <tedx-header @confettiEv="activateConfetti" @moveTo="moveToMain"/>
    <tedx-carousel/>
    <v-container fluid>
    <v-container>
       <v-layout row wrap class="title-layout" ref="ORADORES">
         <h1>Nuestros Oradores </h1><span class="spinEmoji" id="clapEmoji">👏</span>
       </v-layout>
      <v-layout row wrap>
      <tedex-speaker-detail v-for="speaker of speakers" :key="speaker.id" :speaker="speaker"></tedex-speaker-detail>
      </v-layout>
      </v-container>
      <v-layout row wrap class="title-layout" ref="SPONSORS">
        <h1>Nuestros Sponsors </h1><span class="spinEmoji">⭐️</span>
      </v-layout>
      <v-container grid-list-md text-xs-center>
        <tedx-sponsor></tedx-sponsor>
    </v-container>
    <v-layout row wrap class="title-layout" ref="EQUIPO">
      <h1>Nuestros Equipo </h1><span class="spinEmoji" id="hart">❤️</span>
    </v-layout>
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
          <canvas id="confetti-holder" ref="confettiHolder"></canvas>
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
      let size = this.$vuetify.breakpoint.xs ? "2" : "1"
      let confettiSettings = {"target":"confetti-holder","max":"500",size,"animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"5","width":"1680","height":"918"}
      let confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      setTimeout(()=>{
       confetti.clear()} , 6000)
    },
    moveToMain(ev){
      console.log(ev)
      let ourSponsors = this.$refs[ev]
      this.$SmoothScroll(ourSponsors, 1000)
    }
  },
  mounted(){
    this.activateConfetti()
  }
}
</script>

<style scoped>
#confetti-holder{
  width: 100% !important;
  height: 100vh;
}

#hart{
  animation-duration: 1s;
  animation-name: hartAnimation;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  will-change: transform;
}
@keyframes hartAnimation {
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.15);
  }
}
#clapEmoji{
  animation: clapping 0.5s infinite;
  animation-direction: alternate;
  will-change: transform;
}
@keyframes clapping {
  from{
    transform: rotate(0) scaleX(-1);
  }
  to{
    transform: rotate(90deg) scaleX(1.2);
  }
}
.spinEmoji{
  transition: 1s;
  font-size: 30px;
}
.spinEmoji:hover{
  transform: rotate(360deg);
}

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
<style>
#confetti-holder{
  position: absolute;
  top: 0;
}

.v-carousel {
  height: 100vh !important;
}
</style>
