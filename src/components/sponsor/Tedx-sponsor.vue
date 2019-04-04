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
  data(){
    return {
      images:[
        {
          src:'',
          id:'fill-1'
        },
        {
          src: require('@/assets/images/sponsors/san-jose.png'),
          url:'http://www.sanjose.gub.uy/',
          id:8
        },
        {
          src:'',
          id:'fill-2'
        },
        {
          src: require('@/assets/images/sponsors/optica-florida.png'),
          url:'http://www.opticaflorida.com.uy/v3/index.php',
          id:6
        },
        {
          src: require('@/assets/images/sponsors/utec.png'),
          url: 'https://utec.edu.uy/',
          id:9
        },
        {
          src: require('@/assets/images/sponsors/marcre.png'),
          url:'http://www.marcre.com.uy/',
          id:5
        },
         {
          src:'',
          id:'fill-1'
        },
        {
          src: require('@/assets/images/sponsors/amsj.png'),
          url:'http://www.amsj.com.uy/',
          id:1
        }
      ]
    }
  },
  props:['sponsor']
}
</script>
