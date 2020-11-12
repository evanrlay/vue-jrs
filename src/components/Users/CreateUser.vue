<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" v-model="email" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleUserType">User Type</label>
                        <select class="form-control" v-model="userType">
                            <option disabled value="" selected>Please select one</option>
                            <option v-for="userType in userTypes" v-bind:key="userType.id" v-bind:value="userType.id">
                                {{ userType.description }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleUserType">Jurisdiction</label>
                        <select class="form-control" v-model="jurisdiction">
                            <option disabled value="" selected>Please select one</option>
                            <option v-for="jurisdiction in jurisdictions" v-bind:key="jurisdiction.id" v-bind:value="jurisdiction.id">
                                {{ jurisdiction.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row">

                </div>
                <button type="button" @click='createUser()' class="btn btn-danger">Create</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import { getUserTypes } from '../../services/UserService';
import { getAllJurisdictions } from '../../services/JurisdictionService';

export default {
    name: 'CreateUser',
    data() {
        return {
        firstName: '',
        lastName: '',
        email: '',
        userTypes: {},
        userType: '',
        jurisdictions: {},
        jurisdiction: ''
        }
    },
    mounted () {
        this.getUserTypes();
        this.getAllJurisdictions();
    },
    methods: {
        createUser() {
            console.log(this.firstName)
            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                userTypeId: this.userType,
                jurisdictionId: this.jurisdiction,
            }
            this.$emit('createUser', payload)
            this.clearForm();
        },
        clearForm() {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.jurisdiction = "";
            this.userType = "";
        },
        getUserTypes() {
            getUserTypes().then(response => {
                console.log(response)
                this.userTypes = response
            })
        },
        getAllJurisdictions() {
            getAllJurisdictions().then(response => {
                console.log(response)
                this.jurisdictions = response
            })
        }
    }
}
</script>