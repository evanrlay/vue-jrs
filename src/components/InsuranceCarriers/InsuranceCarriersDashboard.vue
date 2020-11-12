<template>
  <div class="hello">
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-4">
                <DisplayBoard itemType='Insurance Carriers' :numberOfItems="numberOfInsuranceCarriers" @getAllItems="getAllInsuranceCarriers()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <InsuranceCarriers v-if="insuranceCarriers.length > 0" :insuranceCarriers="insuranceCarriers" />
    </div>
  </div>
</template>

<script>
import DisplayBoard from '../Shared/DisplayBoard.vue'
import InsuranceCarriers from './InsuranceCarriers.vue'
import { getAllInsuranceCarriers } from '../../services/InsuranceCarrierService'

export default {
  name: 'InsuranceCarriersDashboard',
  components: {
    DisplayBoard,
    InsuranceCarriers,
  },
  data() {
      return {
          insuranceCarriers: [],
          numberOfInsuranceCarriers: 0
      }
  },
  methods: {
    getAllInsuranceCarriers() {
      getAllInsuranceCarriers().then(response => {
        console.log(response)
        this.insuranceCarriers = response
        this.numberOfInsuranceCarriers = this.insuranceCarriers.length
      })
    }
  },
  mounted () {
    this.getAllInsuranceCarriers();
  }
}
</script>