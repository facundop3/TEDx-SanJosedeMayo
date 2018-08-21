<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/images/carousel/tedx-bunker-2.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-gonzalo-centurion.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-eduardo-bauza.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-ana-silva.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-matias-laca.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-carmen.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-pedro-peña.jpg')
          },
          
          {
            src: require('@/assets/images/carousel/tedx-winers.jpg')
          },
          
          // {
          //   src: require('@/assets/images/carousel/tedx-bunker.jpg')
          // }
          
        ]
      }
    }
  }
</script>