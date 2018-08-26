<template>
  <v-layout row wrap>
    <v-flex 
      v-for="image of images"
      :key="image.id" xs4>
        <v-avatar 
        :tile="true"
        :size="200"
        color="grey lighten-4">
          <img :src="image.src" alt="avatar" >
        </v-avatar>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return {
      images:[
        {
          src: require('@/assets/images/sponsors/amsj.png'),
          id:1
        },
        {
          src: require('@/assets/images/sponsors/cantina-club-sj.png'),
          id:2
        },
        {
          src: require('@/assets/images/sponsors/choco-artesanal.jpg'),
          id:3
        },
        {
          src: require('@/assets/images/sponsors/hotel-centro.png'),
          id:4
        },
        {
          src: require('@/assets/images/sponsors/marcre.png'),
          id:5
        },
        {
          src: require('@/assets/images/sponsors/optica-florida.png'),
          id:6
        },
        {
          src: require('@/assets/images/sponsors/peraza-gonzales.png'),
          id:7
        },
        {
          src: require('@/assets/images/sponsors/san-jose.png'),
          id:8
        },
        {
          src: require('@/assets/images/sponsors/utec.png'),
          id:9
        }
      ]
    }
  },
  props:['sponsor']
}
</script>
