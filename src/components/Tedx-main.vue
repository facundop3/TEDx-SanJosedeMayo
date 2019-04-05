<template>
  <div>
    <tedx-header  @moveTo="moveToMain"/>
    <tedx-carousel/>
    <v-container fluid>
      <v-layout row wrap class="title-layout" ref="SPONSORS">
        <h1>Auspician: </h1>
      </v-layout>
      <v-container grid-list-md text-xs-center>
        <tedx-sponsor :images="images.sponsors"/>
    </v-container>
    <v-layout row wrap class="title-layout" ref="SPONSORS">
      <h1>Colaboran: </h1>
    </v-layout>
          <v-container grid-list-md text-xs-center>
        <tedx-sponsor :images="images.helpers"/>
    </v-container>
    <v-layout row wrap class="title-layout" ref="EQUIPO">
      <h1>Nuestros Equipo </h1>
    </v-layout>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <template v-for="(teamMember, index) of teamMembers" >
        <tedx-team-member :key="teamMember.id"  :teamMember="teamMember"  :data-text="index"/>
      </template>
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
import TedxCarousel from '@/components/Tedx-carousel.vue'
import eventData2018 from '@/assets/event-data-2018.json'
import TedxSponsor from '@/components/sponsor/Tedx-sponsor.vue'
import TedxTeamMember from '@/components/team/Tedx-team-member.vue'
import images from '@/components/sponsor/sponsorsImages.js'

export default {
  components: {
    TedxHeader,
    TedxFooter,
    TedxCarousel,
    TedxSponsor,
    TedxTeamMember

  },
  data(){
    return {
      speakers: eventData2018.speakers,
      teamMembers: eventData2018.teamMembers,
      images,
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
<style>

.v-carousel {
  height: 100vh !important;
}
</style>
