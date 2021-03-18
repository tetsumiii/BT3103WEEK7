import Orders from './components/Orders.vue'
import PageContent from './components/PageContent.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default [
  { name:'Home', path: '/', component: PageContent },
  { name:'Orders',path: '/orders', component: Orders },
  { name:'Dashboard',path: '/dashboard', component: Dashboard },
  { name:'Modify',path: '/modify', component: Modify, props: true },
]