<template>
  <v-layout row wrap>
    <v-flex 
      v-for="image of images"
      :key="image.id" xs12 sm4>
        <a :href="image.url" target="_blank">
          <v-avatar
            v-if="image.src"
            :tile="true"
            :size="200"
            color="grey lighten-4">
            <img :src="image.src" alt="avatar" >
          </v-avatar>
        </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:['images']
}
</script>
