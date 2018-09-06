<template>
    <v-toolbar dark color="darken-1"  style="background-color:white; color:#e82a0f;">
    <v-toolbar-title><img class="logo" :src="logo"/></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="red--text">
      <v-btn flat @click="backHome">Inicio</v-btn>
      <v-btn flat class="red--text" @click="emitConfettiEv">🎊🎉</v-btn>
          <v-btn slot="activator" dark flat class="red--text" @click="moveTo">
            Oradores
          </v-btn>
        <!-- <v-menu offset-y>
          <v-btn slot="activator" dark flat class="red--text" @click="moveTo">
            Oradores
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index">
              <v-list-tile-title class="red--text">{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu > -->
      <v-btn flat class="red--text" @click="moveTo">Sponsors</v-btn>
      <v-btn flat class="red--text" @click="moveTo">Equipo</v-btn>
      <v-btn flat class="red--text" @click="moveTo">Contacto</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import logo from '@/assets/images/TEDxSJ-small.png'
export default {
  data (){
    return {
      items: [
        { title: '2018' },
        { title: '2019?' },
      ],
      logo
    }
  },
  methods:{
    backHome(){
      this.$router.push('/')
    },
    emitConfettiEv(){
      this.$emit('confettiEv')
    },
    moveTo(ev){
      let buttonRef = ev.target.innerText.toUpperCase()
      this.$emit('moveTo', buttonRef) 
    }
  }
}
</script>
<style>
.red{
  color:#e82a0f;
  font-weight: bold;
}
</style>
<style scoped>
.logo{
  height: 85px;
  margin-top: 10px;
}
</style>

