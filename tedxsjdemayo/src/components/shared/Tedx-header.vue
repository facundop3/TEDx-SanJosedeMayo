<template>
    <v-toolbar dark color="red darken-1"  class="white--text">
    <v-toolbar-title>Tedx San José de Mayo</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="white--text">
      <v-btn flat @click="backHome">Inicio</v-btn>
        <v-menu offset-y>
          <v-btn slot="activator" dark flat >
            Oradores
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in items" :key="index">
              <v-list-tile-title >{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      <v-btn flat>Sponsors</v-btn>
      <v-btn flat>Equipo</v-btn>
      <v-btn flat>Contacto</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data (){
    return {
      items: [
        { title: '2018' },
        { title: '2019?' },
      ]
    }
  },
  methods:{
    backHome(){
      this.$router.push('/')
    }
  }
}
</script>
