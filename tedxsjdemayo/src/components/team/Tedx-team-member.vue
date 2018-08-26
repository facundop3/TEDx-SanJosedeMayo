<template>
  <v-layout row wrap>
      <v-flex xs4>
        <v-card>
        <v-card-media
          class="white--text"
          height="250px"
          width="250px"
        >
        <v-avatar
        size="250"
        color="grey lighten-4"
        style="margin:'auto';"
        >
          <img :src="require('@/assets/images/team/facundo.jpg')" alt="avatar">
        </v-avatar>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
        
      </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-avatar{
  margin: auto;
}
.v-card__title{
  justify-content: center;
  text-align: center;
}
.v-card__actions{
  justify-content: center;
}
</style>
