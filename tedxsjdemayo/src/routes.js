import TedxMain from '@/components/Tedx-main.vue'
import SpeakerDetail from '@/components/Tedx-speaker-detail.vue'

const routes = [
  {path:'/' , component: TedxMain},
  {path:'/speaker' , component: SpeakerDetail}
]

export default routes