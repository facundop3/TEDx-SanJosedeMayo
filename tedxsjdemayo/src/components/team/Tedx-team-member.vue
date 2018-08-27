<template>
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
          <div class="team-image" style="background-position-y:0;" :style="{'background-image': `url('${currentImage.image}')`, 'background-size': currentImage.size}" alt="avatar"></div>
        </v-avatar>
        </v-card-media>
        <v-card-title>
          <div>
            <h3>{{teamMember.name}}</h3><br>
            <span>{{teamMember.summary}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn icon v-for="social of socials" :key="social" v-if="social.url">
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
  }
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
