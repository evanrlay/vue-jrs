<template>
  <div class="hello">
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-4">
                <DisplayBoard itemType='Jurisdictions' :numberOfItems="numberOfJurisdictions" @getAllItems="getAllJurisdictions()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Jurisdictions v-if="jurisdictions.length > 0" :jurisdictions="jurisdictions" />
    </div>
  </div>
</template>

<script>
import DisplayBoard from '../Shared/DisplayBoard.vue'
import Jurisdictions from './Jurisdictions.vue'
import { getAllJurisdictions } from '../../services/JurisdictionService'

export default {
  name: 'JurisdictionsDashboard',
  components: {
    DisplayBoard,
    Jurisdictions,
  },
  data() {
      return {
          jurisdictions: [],
          numberOfJurisdictions: 0
      }
  },
  methods: {
    getAllJurisdictions() {
      getAllJurisdictions().then(response => {
        console.log(response)
        this.jurisdictions = response
        this.numberOfJurisdictions = this.jurisdictions.length
      })
    }
  },
  mounted () {
    this.getAllJurisdictions();
  }
}
</script>