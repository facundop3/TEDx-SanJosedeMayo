<template>
  <v-app fluid>
    <router-view></router-view>
  </v-app>
</template>

<script>
import TedxMain from '@/components/Tedx-main.vue'

export default {
  name: 'App',
  components: {
    TedxMain
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
