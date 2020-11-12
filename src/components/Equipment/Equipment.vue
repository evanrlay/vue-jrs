<template>
    <div class="container">
        <h2>Equipment</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Equipment Id</th>
                <th>Location</th>
                <th>Manufacturer</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in equipment" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.location.name }}</td>
                  <td>{{ item.manufacturer }}</td>
                  <td>{{ item.equipmentTypes.description }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Equipment',
        props: ['equipment']
     }
</script>