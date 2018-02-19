$('document').ready(function(){
  Vue.component('team-member', {
    props :['member'],
    template: `<article class="team-article">
    <div class="lazy hvr-border-fade team-profile-image" v-bind:id="member.teamId" v-bind:data-src="member.imageUrl">
    <div class="team-shadow">
    <p class='team-description'>{{member.personalSummary}}
    <div class="social-line">
    <a v-if="member.fbUrl != ''" target="_blank" v-bind:href="member.fbUrl">
    <img src="images/social/facebook.png" alt="Facebook">
    </a>
    <a v-if="member.twUrl != ''" target="_blank"  v-bind:href="member.twUrl">
      <img src="images/social/twitter.png" alt="Twitter">
    </a>
    <a v-if="member.inUrl != ''" target="_blank"  v-bind:href="member.inUrl">
      <img src="images/social/instagram.png" alt="Instagram">
    </a>
    <a v-if="member.lnUrl != ''" target="_blank"  v-bind:href="member.lnUrl">
      <img src="images/social/linkedin.png" alt="Linkedin">
    </a>
    <a v-if="member.lnUrl != ''" target="_blank"  v-bind:href="member.ghUrl">
      <img src="images/social/github.png" alt="Github">
    </a>
    </div>
    </p></div>
    </div>
    <footer>
    <h6>{{member.name}}</h6>
    </footer>
    </article>`
  })

// Vue.component Add Speaker component

let app = new Vue({
  el: '#app',
  data: {
    teamMembers: [
      {name: 'Diego Barboza' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/diego.barboza.9026' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/diego.jpeg', teamId:'team-profile-1'},
      {name: 'Evangelina Hernández' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/evatota' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/evangelina.jpeg', teamId:'team-profile-2'},
      {name: 'Horacio Piriz' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/Horacio.maxx' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/horacio.jpeg', teamId:'team-profile-3'},
      {name: 'Matías Laca' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/matias.jpeg', teamId:'team-profile-4'},
      {name: 'Gonzalo Prado' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/gonzaloprado8/' ,twUrl:'',inUrl:'https://www.instagram.com/gonzaloprado8/', lnUrl:'',ghUrl:'', imageUrl:'images/team/gonzalo.jpeg', teamId:'team-profile-5'},
      {name: 'Facundo Petre' , personalSummary:'A curious guy that haves fun researching how things works...', fbUrl:'' ,twUrl:'',inUrl:'https://www.instagram.com/facup3/', lnUrl:'https://www.linkedin.com/in/facundopetre/',ghUrl:'https://github.com/facundop3', imageUrl:'images/team/facundo.jpg', teamId:'team-profile-6'}
    ],
    speakers: [
      {name: 'Diego Barboza' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/diego.barboza.9026' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/diego.jpeg', teamId:'team-profile-1'}
    ],
  }
})

console.log("Yep loaded");
})
