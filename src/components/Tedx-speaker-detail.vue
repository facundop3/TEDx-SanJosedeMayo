<template>
        <v-flex xs12 sm6 height="690px">
          <v-card height="100%" class="speaker-card">
            <v-container
              height="100%"
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                  xs12
                >
                  <v-card class="textCard">
                    <v-card-media
                      height="315px"
                      width="560px"
                    >
                        <iframe width="100%" height="100%" :src="speaker.videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{speaker.name}}</h3>
                        <div>{{speaker.summary}}</div>
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
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
</template>
<script>
export default {

  data(){
    return {
      socials: this.$props.speaker.social,
      } 
  },
    props: ['speaker']
}
</script>
<style scoped>
.textCard{
  min-height: 650px;
  height: 100%;
}
.speaker-card{
  transition: .5s;
}
.speaker-card:hover {
  transform: scale(1.05);
  z-index: 4;
}
a{
  text-decoration: none;
  color: #e82a0f;
}
</style>
