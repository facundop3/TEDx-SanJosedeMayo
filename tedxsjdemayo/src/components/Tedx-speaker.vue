<template>
            <v-flex xs6>
            <v-card color="red darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-card-media
                    :src="images[speaker.id]"
                    height="135px"
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
      images: {
          "1" : require('@/assets/images/speakers/carmen.jpg'),
          "2": require('@/assets/images/speakers/eduardo.jpeg'),
          "3": require('@/assets/images/speakers/gonzalo.jpeg'),
          "4": '',
          "5": '',
          "6": ''
      },
    }
  },
  methods:{
    showSpeaker(){
      this.$router.push({name:'speaker', params:{id: 2}})
    },
  },
  props:['speaker'],
  mounted(){
    console.log('HEY')
    console.log(this.$route.params)
  }
}
</script>
<style scoped>
a{
  color: unset;
  text-decoration: none;
}
</style>
