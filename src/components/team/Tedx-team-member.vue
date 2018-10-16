<template>
      <v-flex xs12 sm4 height="382px">
        <v-card height="100%" class="member-card">
        <v-card-media
          class="white--text" 
          height="250px"
          width="250px"
          @click="launchRocket"
        >
        <v-avatar
        size="250"
        color="grey lighten-4"
        style="margin:'auto';"
        @click="launchRocket"
        >
          <div @click="launchRocket" class="team-image" style="background-position-y:0;" :style="{'background-image': `url('${currentImage.image}')`, 'background-size': currentImage.size}" alt="avatar"></div>
        </v-avatar>
        </v-card-media>
        <v-card-title height="289px" @click="launchRocket">
          <div>
            <h3>{{teamMember.name}}</h3><br>
            <span >{{teamMember.summary}}</span>
            <p v-if="teamMember.id == 7" ref="rocket" id="rocket">🚀</p>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn icon v-for="social of socials" :key="social.icon" v-if="social.url">
          <a  :href="social.url" target="_blanck">
              <v-icon>{{social.icon}}</v-icon>
          </a>
            </v-btn>
      </v-card-actions>
      </v-card>
        
      </v-flex>
</template>

<script>
export default {
  data(){
    return {
      socials: this.$props.teamMember.social,
      images: [
        {id:1 , image: require('@/assets/images/team/diego.jpeg')},  
        {id:2 , image: require('@/assets/images/team/evangelina.jpeg'), size:'265px'},  
        {id:3 , image: require('@/assets/images/team/horacio.jpeg'), size:'250px'},  
        {id:4 , image: require('@/assets/images/team/gonzalo.jpeg'), size:'269px'},  
        {id:5 , image: require('@/assets/images/team/paola.jpeg'), size:'250px'},  
        {id:6 , image: require('@/assets/images/team/hector.jpeg'), size:'301px'},  
        {id:7 , image: require('@/assets/images/team/facundo.jpg')}
        ],
      currentImage:'' 
    }
  },
  props: ['teamMember'],
  created(){
    this.currentImage = this.images.filter(image => image.id == this.$props.teamMember.id)[0]
  },
  methods:{
    launchRocket: function (){
      if(Array.from(this.$refs.rocket.classList).includes('active')){
        this.$refs.rocket.classList.remove('active')
      }else{
        this.$refs.rocket.classList.add('active')
      }
    }
  }
}
</script>

<style scoped>
#rocket.active{
  animation-duration: 5s;
  animation-name: rocketActive;
  will-change: transform;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: 2;
}
@keyframes rocketActive {
  from{
    transform: translateX(0) translateY(0) scale(1);
  }
  to {
    transform: translateX(1000px) translateY(-1000px) scale(10);
  }
}
.member-card{
  transition: .5s;
}
.member-card:hover {
  transform: scale(1.05);
  z-index: 4;
}
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
.team-image{
  height: 100%;
  width: 100%;
  background-size: 445px;
  border-radius: 50%;
  background-position: center;

}
a{
  text-decoration: none;
  color: #e82a0f;
}
</style>
