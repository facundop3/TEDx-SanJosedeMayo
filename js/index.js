$('document').ready(function(){
  Vue.component('team-member', {
    props :['member'],
    template: `<article class="team-article">
    <div class="hvr-border-fade team-profile-image" v-bind:id="member.teamId" v-bind:style="{'background-image': 'url('+ member.imageUrl +')'}">
    </p></div>
    </div>
    <footer>
    <h6>{{member.name}} <br><br>
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
    </a></h6>
    </footer>
    </article>`
  })

Vue.component('tedx-speaker',{
  props: ['speaker'],
  template:`<article class="speaker-article" v-if="speaker.show">
              <div class="hvr-border-fade profile-image" :id="speaker.profileId" v-bind:style="{'background-image': 'url('+ speaker.imageUrl +')'}"></div><br>
              <!--<h5>{{speaker.name}}</h5>
              <footer>
                <h6>{{speaker.talkTitle}}</h6>
              </footer>-->
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
      {name: 'Agustín Zubiaga' , show:false, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/agustin.jpeg', profileId:'profile-1'},
      {name: 'Carmen Corrales' , show:false, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/carmen.jpg', profileId:'profile-2'},
      {name: 'Eduardo Bauzá' , show:false, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/eduardo.jpeg', profileId:'profile-3'},
      {name: 'Gonzalo Centurión' , show:false, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/gonzalo.jpeg', profileId:'profile-4'},
      {name: 'Ana de los Santos' , show:true, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/ana.jpeg', profileId:'profile-5'},
      {name: 'Pedro Peña' , show:true, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/pedro.jpeg', profileId:'profile-6'},
      {name: 'Matias Laca' , show:false, talkTitle: 'Redoble de tambores',fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/speakers/matias.jpeg', profileId:'profile-7'}
    ],
  }
})
var app = new Vue({
  el: '#app2',
  data: {
    sponsors: [
      {cssClass:'',name:'Gobierno departamental de San José', imgUrl:'images/sponsors/san-jose.png', webUrl:'http://www.sanjose.gub.uy/'},
      {cssClass:'',name:'Optica Florida', imgUrl:'images/sponsors/optica-florida.png', webUrl:'http://www.opticaflorida.com.uy/v3/index.php'},
      {cssClass:'utec',name:'UTEC', imgUrl:'images/sponsors/utec.png', webUrl:'https://utec.edu.uy/'},
      {cssClass:'',name:'Marcre', imgUrl:'images/sponsors/marcre.png', webUrl:'http://www.marcre.com.uy/'},
      {cssClass:'',name:'AMSJ', imgUrl:'images/sponsors/amsj.png', webUrl:'http://www.amsj.com.uy/'},
      {cssClass:'',name:'Peraza González', imgUrl:'images/sponsors/peraza-gonzales.png', webUrl:''},
      {cssClass:'',name:'Cantina Club San José', imgUrl:'images/sponsors/cantina-club-sj.png', webUrl:'https://www.facebook.com/CantinadelClubSanJose/'},
      {cssClass:'',name:'Hotel Centro San José', imgUrl:'images/sponsors/hotel-centro.png', webUrl:'http://www.hcentro.com/'},
      {cssClass:'',name:'Choco Artesanal', imgUrl:'images/sponsors/choco-artesanal.jpg', webUrl:'https://www.facebook.com/ChocoArtesanalsj/'},
      {cssClass:'',name:'En Frecuencia', imgUrl:'images/sponsors/en-frecuencia.jpeg', webUrl:'http://www.enfrecuencia.com.uy/'},
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
      {name: 'Gonzalo Prado' , personalSummary:'STAND UP', fbUrl:'https://www.fb.com/gonzaloprado8/' ,twUrl:'',inUrl:'https://www.instagram.com/gonzaloprado8/', lnUrl:'',ghUrl:'', imageUrl:'images/team/gonzalo.jpeg', teamId:'team-profile-5'},
      {name: 'Paola Alcorta' , personalSummary:'Fotografía Músicos 🎶 Teatro 🎭 Danza 💃 Espectáculos en gral 🎬🎤🎨👏', fbUrl:'https://www.facebook.com/paoliita.alcorta' ,twUrl:'',inUrl:'https://www.instagram.com/paoalcortafotografia/', lnUrl:'',ghUrl:'', imageUrl:'images/team/paola.jpeg', teamId:'team-profile-6'},
      {name: 'Facundo Petre' , personalSummary:'A curious guy that haves fun researching how things works...', fbUrl:'' ,twUrl:'',inUrl:'', lnUrl:'https://www.linkedin.com/in/facundopetre/',ghUrl:'https://github.com/facundop3', imageUrl:'images/team/facundo.jpg', teamId:'team-profile-7'},
      {name: 'Héctor Cotelo' , personalSummary:'A curious guy that haves fun researching how things works...', fbUrl:'https://www.facebook.com/hcotelo' ,twUrl:'',inUrl:'', lnUrl:'',ghUrl:'', imageUrl:'images/team/hector.jpeg', teamId:'team-profile-8'}
    ]
  }
})
// Eventbrite
var exampleCallback = function() {
  console.log('Order complete!');
};

window.EBWidgets.createWidget({
  widgetType: 'checkout',
  eventId: '44344740312',
  modal: true,
  modalTriggerElementId: 'eventbrite-widget-modal-trigger-44344740312',
  onOrderComplete: exampleCallback
});

})
