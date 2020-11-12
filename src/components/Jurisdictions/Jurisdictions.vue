<template>
    <div class="container">
        <h2>Jurisdictions</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Jurisdiction Id</th>
                <th>Name</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in jurisdictions" :key="item.id">
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
        name: 'Jurisdictions',
        props: ['jurisdictions']
     }
</script>