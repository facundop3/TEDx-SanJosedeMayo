<template>
  <v-footer
    dark
    height="auto">
    <v-card
      flat
      tile
      class="red darken-1 white--text text-xs-center width-100">
      <v-card-text >
        <v-btn
          v-for="myIcon in iconsList"
          :key="myIcon.id"
          class="mx-3 white--text"
          icon>
          <a :href="myIcon.url" target="_blank">
            <v-icon size="24px">{{ myIcon.icon }}</v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-title class="white--text pt-0 jc-center" >
        <h2>Ideas que conquistan</h2>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="white--text black">
        &copy;2018 — <strong><a href="https://www.linkedin.com/in/facundopetre/" class="blue--text">〈code〉with ❤️ by @facup3</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
     data: () => ({
    iconsList: [
      {'icon':'fab fa-facebook', 'url':'https://www.facebook.com/TEDxSanJosedeMayo/', 'id':'icon-facebook'},
      {'icon':'fab fa-twitter', 'url':'https://twitter.com/TEDxSJdeM', 'id':'icon-twitter'},
      {'icon':'fab fa-instagram', 'url':'https://www.instagram.com/tedxsanjosedemayo/', 'id':'icon-instagram'}
    ],
  })
  }
</script>
<style scoped>
a{
  text-decoration: none;
  color: unset;
}
.width-100{
  width: 100%
}
.jc-center{
  justify-content: center;
}
</style>
