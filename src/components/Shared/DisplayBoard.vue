<template>
    <div class="display-board">
        <h4>{{itemType}} Created</h4>
        <div class="number">
        {{numberOfItems}}
        </div>
        <div class="btn">
            <button @click='getAllItems()' type="button" class="btn btn-warning">Get all {{itemType}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: [
            'numberOfItems',
            'itemType'
            ],
        methods: {
            getAllItems() {
                this.$emit('getAllItems')
            }
        }
    }
</script>