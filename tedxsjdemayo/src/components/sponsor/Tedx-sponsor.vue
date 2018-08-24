<template>
          <v-avatar
          :tile="true"
          :size="200"
          color="grey lighten-4"
        >
          <img :src="sponsor.img" alt="avatar">
        </v-avatar>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:['sponsor']
}
</script>
