<template>
  <div class="hello">
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateEquipment @createEquipment="equipmentCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard itemType='Equipment' :numberOfItems="numberOfEquipment" @getAllItems="getAllEquipment()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Equipment v-if="equipment.length > 0" :equipment="equipment" />
    </div>
  </div>
</template>

<script>
import CreateEquipment from './CreateEquipment.vue'
import DisplayBoard from '../Shared/DisplayBoard.vue'
import Equipment from './Equipment.vue'
import { getAllEquipment, createEquipment } from '../../services/EquipmentService'

export default {
  name: 'EquipmentDashboard',
  components: {
    CreateEquipment,
    DisplayBoard,
    Equipment,
  },
  data() {
      return {
          equipment: [],
          numberOfEquipment: 0
      }
  },
  methods: {
    getAllEquipment() {
      getAllEquipment().then(response => {
        console.log(response)
        this.equipment = response
        this.numberOfEquipment = this.equipment.length
      })
    },
    equipmentCreate(data) {
      console.log('data:::', data)
      createEquipment(data).then(response => {
        console.log(response);
        this.getAllEquipment();
      });
    }
  },
  mounted () {
    this.getAllEquipment();
  }
}
</script>