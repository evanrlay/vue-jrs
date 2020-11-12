import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDashboard from './../components/Users/UserDashboard.vue'
import EquipmentDashboard from './../components/Equipment/EquipmentDashboard.vue'
import JurisdictionDashboard from './../components/Jurisdictions/JurisdictionDashboard.vue'
import InsuranceCarriersDashboard from './../components/InsuranceCarriers/InsuranceCarriersDashboard.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      { path: '/', component: UserDashboard },
      { path: '/users', component: UserDashboard },
      { path: '/equipment', component: EquipmentDashboard },
      { path: '/jurisdictions', component: JurisdictionDashboard },
      { path: '/insurance-carriers', component: InsuranceCarriersDashboard },
    ]
})