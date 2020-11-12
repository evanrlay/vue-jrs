<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create Equipment</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleEquipmentLocation">Location</label>
                        <select class="form-control" v-model="locationId">
                            <option disabled value="" selected>Please select one</option>
                            <option v-for="location in locations" v-bind:key="location.id" v-bind:value="location.id">
                                {{ location.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleManufacturer">Manufacturer</label>
                        <input type="text" class="form-control" v-model="manufacturer" name="manufacturer" id="manufacturer" placeholder="Manufacturer" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleEquipmentType">Equipment Type</label>
                        <select class="form-control" v-model="equipmentType">
                            <option disabled value="" selected>Please select one</option>
                            <option v-for="equipmentType in equipmentTypes" v-bind:key="equipmentType.id" v-bind:value="equipmentType.id">
                                {{ equipmentType.description }}
                            </option>
                        </select>
                    </div>
                </div>
                <button type="button" @click='createEquipment()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { getEquipmentTypes } from '../../services/EquipmentService';
import { getAllLocations } from '../../services/LocationService';


export default {
    name: 'CreateEquipment',
    data() {
        return {
        locationId: '',
        locations: '',
        manufacturer: '',
        equipmentTypes: {},
        equipmentType: '',
        }
    },
    mounted () {
        this.getEquipmentTypes();
        this.getAllLocations();
    },
    methods: {
        createEquipment() {
            console.log(this.firstName)
            const payload = {
                manufacturer: this.manufacturer,
                locationId: this.locationId,
                equipmentType: this.equipmentType,
            }
            this.$emit('createEquipment', payload)
            this.clearForm();
        },
        clearForm() {
            this.manufacturer = "";
            this.location = "";
            this.equipmentType = "";
        },
        getEquipmentTypes() {
            getEquipmentTypes().then(response => {
                console.log(response)
                this.equipmentTypes = response
            })
        },
        getAllLocations() {
            getAllLocations().then(response => {
                console.log(response)
                this.locations = response
            })
        },
    }
}
</script>