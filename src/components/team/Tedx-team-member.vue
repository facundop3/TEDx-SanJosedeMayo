<template>
      <v-flex xs12 sm4 height="382px">
        <v-card height="100%" class="member-card">
          <v-card-title>
            <h3>{{teamMember.name}}</h3>
              <v-btn icon v-for="social of socials" :key="social.icon" v-if="social.url">
              <a :href="social.url" target="_blanck">
                <v-icon>{{social.icon}}</v-icon>
              </a>
              </v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
</template>

<script>
export default {
  data(){
    return {
      socials: this.$props.teamMember.social
    }
  },
  props: ['teamMember'],
}
</script>

<style scoped>
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
}
.v-card__actions{
  justify-content: center;
}
a{
  text-decoration: none;
  color: #e82a0f;
}
</style>
