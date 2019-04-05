<template>
    <v-toolbar dark color="darken-1"  style="background-color:white; color:#e82a0f; z-index:2;">
    <v-toolbar-title><img class="logo" :src="logo" @click="backHome"/></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="red--text">
        <v-btn  v-show="!xsMenu" flat class="red--text" @click="moveTo">Oradores </v-btn>
        <v-btn  v-show="!xsMenu" flat class="red--text" @click="moveTo">Sponsors</v-btn>
        <v-btn  v-show="!xsMenu" flat class="red--text" @click="moveTo">Equipo</v-btn>
        <v-btn  v-show="!xsMenu" flat class="red--text" @click="goTo2018">2018</v-btn>
       <v-menu bottom left v-show="xsMenu">
            <v-btn
              slot="activator"
              dark
              icon>
              <v-icon class="redIcon">fa-ellipsis-v</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click="moveTo"
                >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import logo from '@/assets/images/TEDxSJ-small.png'
export default {
  data (){
    return {
      items: [
        { title: 'Oradores' },
        { title: 'Sponsors' },
        { title: 'Equipo' },
        { title: '2018' }
      ],
      logo: logo,
      xsMenu: this.$vuetify.breakpoint.xs
    }
  },
  methods:{
    backHome(){
      this.$router.push('/')
    },
    goTo2018(){
      this.$router.push('/2018')
    },
    moveTo(ev){
      let buttonRef = ev.target.innerText.toUpperCase()
      this.$emit('moveTo', buttonRef) 
    }
  }
}
</script>
<style scoped>
.redIcon{
  color:#e82a0f !important;
  font-weight: bold;
}
.logo{
  height: 55px;
}
</style>