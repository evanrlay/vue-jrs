<template>
    <div class="container">
        <h2>Insurance Carriers</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Insurance Carrier Id</th>
                <th>Name</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in insuranceCarriers" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td><a v-bind:href=item.website>Visit Here</a></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Insurance Carriers',
        props: ['insuranceCarriers']
     }
</script>