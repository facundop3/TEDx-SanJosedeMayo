$('document').ready(function(){
  Vue.component('team-member', {
    props :['member'],
    template: `<article class="team-article">
    <div class="hvr-border-fade team-profile-image" v-bind:id="member.teamId" v-bind:style="{'background-image': 'url('+ member.imageUrl +')'}">
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

Vue.component('tedx-speaker',{
  props: ['speaker'],
  template:`<article class="speaker-article">
              <div class="hvr-border-fade profile-image" id="profile-1" v-bind:style="{'background-image': 'url('+ speaker.imageUrl +')'}"></div><br>
              <h5>{{speaker.name}}</h5>
              <footer>
                <h6>{{speaker.talkTitle}}</h6>
              </footer>
            </article>`
})

Vue.component('tedx-sponsor', {
  props: ['sponsor'],
  template: `
                <figure class="sponsor-image ">
                <a v-bind:href="sponsor.webUrl" target="_blank">
                  <img v-bind:src="sponsor.imgUrl" v-bind:class="sponsor.cssClass" v-bind:alt="sponsor.name">
                  </a>
              </figure>
            `

})
var app = new Vue({
  el: '#app1',
  data: {
    speakers: [
      {name: '¿Adivina quién?' , personalSummary:'Hola hola hola ! Here goes your personal summary..', talkTitle: 'Redoble de tambores',fbUrl:'https://www.fb.com/diego.barboza.9026' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/anonymouse/who.jpeg', teamId:'team-profile-1'},
    ],
  }
})
var app = new Vue({
  el: '#app2',
  data: {
    sponsors: [
      {cssClass:'',name:'Gobierno departamental de San José', imgUrl:'images/sponsors/san-jose.png', webUrl:'http://www.sanjose.gub.uy/'},
      {cssClass:'',name:'AMSJ', imgUrl:'images/sponsors/amsj.png', webUrl:'http://www.amsj.com.uy/'},
      {cssClass:'utec',name:'UTEC', imgUrl:'images/sponsors/utec.png', webUrl:'https://utec.edu.uy/'},
      {cssClass:'',name:'Peraza González', imgUrl:'images/sponsors/peraza-gonzales.png', webUrl:''},
      {cssClass:'',name:'Optica Florida', imgUrl:'images/sponsors/optica-florida.png', webUrl:'http://www.opticaflorida.com.uy/v3/index.php'},
      {cssClass:'',name:'Marcre', imgUrl:'images/sponsors/marcre.png', webUrl:'http://www.marcre.com.uy/'},
    ]
  }
})
var app = new Vue({
  el: '#app3',
  data: {
    teamMembers: [
      {name: 'Diego Barboza' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/diego.barboza.9026' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/diego.jpeg', teamId:'team-profile-1'},
      {name: 'Evangelina Hernández' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/evatota' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/evangelina.jpeg', teamId:'team-profile-2'},
      {name: 'Horacio Piriz' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/Horacio.maxx' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/horacio.jpeg', teamId:'team-profile-3'},
      {name: 'Matías Laca' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/matias.jpeg', teamId:'team-profile-4'},
      {name: 'Gonzalo Prado' , personalSummary:'Hola hola hola ! Here goes your personal summary..', fbUrl:'https://www.fb.com/gonzaloprado8/' ,twUrl:'',inUrl:'https://www.instagram.com/gonzaloprado8/', lnUrl:'',ghUrl:'', imageUrl:'images/team/gonzalo.jpeg', teamId:'team-profile-5'},
      {name: 'Paola Alcorta' , personalSummary:'Fotografía Músicos 🎶 Teatro 🎭 Danza 💃 Espectáculos en gral 🎬🎤🎨👏', fbUrl:'https://www.facebook.com/paoliita.alcorta' ,twUrl:'',inUrl:'https://www.instagram.com/paoalcortafotografia/', lnUrl:'',ghUrl:'', imageUrl:'images/team/paola.jpeg', teamId:'team-profile-6'},
      {name: 'Facundo Petre' , personalSummary:'A curious guy that haves fun researching how things works...', fbUrl:'' ,twUrl:'',inUrl:'https://www.instagram.com/facup3/', lnUrl:'https://www.linkedin.com/in/facundopetre/',ghUrl:'https://github.com/facundop3', imageUrl:'images/team/facundo.jpg', teamId:'team-profile-7'}
    ]
  }
})

})
