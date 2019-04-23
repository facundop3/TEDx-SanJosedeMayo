<template>
  <div>
    <tedx-header  @moveTo="moveToMain"/>
    <tedx-carousel/>
    <v-container fluid style="padding:0;">
      <v-container grid-list-sm text-xs-center style="display:block;padding:0;">
        <template v-for="speakerImage in speakersImages_1">
          <v-avatar
              style="margin:.5em;"
              :key="speakerImage"
              :tile="false"
              size="350"
              color="grey lighten-4"
            >
            <img :src="require(`@/assets/images/speakers/2019/${speakerImage}`)">
          </v-avatar>
        </template>
    </v-container>
      <v-container grid-list-sm text-xs-center style="display:block; padding:0;">
        <template v-for="speakerImage in speakersImages_2">
          <v-avatar
              style="margin:.5em;"
              :key="speakerImage"
              :tile="false"
              size="320"
              color="grey lighten-4"
            >
            <img :src="require(`@/assets/images/speakers/2019/${speakerImage}`)">
          </v-avatar>
        </template>
    </v-container>
      <v-container grid-list-sm text-xs-center class="center">
          <v-avatar
              :tile="false"
              size="350"
              color="grey lighten-4"
            >
            <img :src="require(`@/assets/images/speakers/2019/sebastian.jpg`)">
          </v-avatar>
    </v-container>
      <v-layout row wrap class="title-layout">
        <h1>Obtenga su entrada: </h1>
      </v-layout>
      <v-container grid-list-md text-xs-center>
        <get-ticket />
    </v-container>
      <v-layout row wrap class="title-layout" ref="SPONSORS">
        <h1>Reviví edición 2018: </h1>
      </v-layout>
      <v-layout row wrap class="title-layout" ref="SPONSORS">
        <iframe width="1206" height="663" src="https://www.youtube.com/embed/slJFi86Rr4I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      </v-layout>
      <v-layout row wrap class="title-layout" ref="SPONSORS">
        <h1>Auspician: </h1>
      </v-layout>
      <v-container grid-list-md text-xs-center>
        <tedx-sponsor size="200" :images="images.sponsors"/>
    </v-container>
    <v-layout row wrap class="title-layout" ref="SPONSORS">
      <h1>Colaboran: </h1>
    </v-layout>
    <v-container grid-list-md text-xs-center>
        <tedx-sponsor size="200" :images="images.helpers"/>
    </v-container>
    </v-container>
    <v-layout row wrap class="title-layout" ref="SPONSORS">
      <h1>Invita: </h1>
    </v-layout>
          <v-container grid-list-md text-xs-center>
        <tedx-sponsor size="200" :images="images.invites"/>
    </v-container>
    <v-layout row wrap class="title-layout" ref="EQUIPO">
      <h1>Nuestro Equipo: </h1>
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
import GetTicket from '@/components/GetTicket/GetTicket.vue'

export default {
  components: {
    TedxHeader,
    TedxFooter,
    TedxCarousel,
    TedxSponsor,
    TedxTeamMember,
    GetTicket

  },
  data(){
    return {
      speakers: eventData2018.speakers,
      teamMembers: eventData2018.teamMembers,
      images,
      speakersImages_1: [
        "agueda.jpg",
        "indira-mauro.jpg",
        "mercedes.jpg"
      ],
      speakersImages_2: [
        "pilar.jpg",
        "manuel.jpg",
        "rafael.jpg"
      ]
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
.spaceArround{
  display: flex;
  justify-content: space-between;
}
.center{
  display: flex;
  justify-content: center;
}
</style>
<style>

.v-carousel {
  height: 100vh !important;
}
</style>
