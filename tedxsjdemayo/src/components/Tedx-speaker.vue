<template>
            <v-flex xs6>
            <v-card color="red darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    :src= currentImage
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline"><a @click="showSpeaker">{{speaker.name}}</a></div>
                      <div>{{speaker['talk-title']}}</div>
                      <div>(2018)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>
</template>

<script>
export default {
  data(){
    return {
      tile: false,
      avatarSize: 256,
      images: [
        require('@/assets/images/speakers/carmen.jpg'),
        require('@/assets/images/speakers/eduardo.jpeg'),
        require('@/assets/images/speakers/gonzalo.jpeg')
      ],
      currentImage:''
    }
  },
  methods:{
    showSpeaker(){
      this.$router.push('/speaker')
    }
  },
  created(){
    this.currentImage = this.images.filter(url => url.endsWith(this.speaker.image))[0]
    console.log(this.currentImage)
  },
  props:['speaker']
}
</script>
<style scoped>
a{
  color: unset;
  text-decoration: none;
}
</style>
