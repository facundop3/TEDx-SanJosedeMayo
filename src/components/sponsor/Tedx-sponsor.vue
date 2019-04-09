<template>
  <v-layout row wrap>
    <v-flex 
      v-for="image of images"
      :key="image.id" xs12 sm4>
        <a :href="image.url" target="_blank">
          <v-avatar
            v-if="image.src"
            :tile="true"
            :size="size"
            color="grey lighten-4">
            <img :src="image.src" alt="avatar" style="height: auto;">
          </v-avatar>
        </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:['images', 'size']
}
</script>
