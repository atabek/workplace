<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <button @click="resetName">Reset name</button>
    </div>
</template>

<script>
export default {
    props: {
        myName: {
            type: String
        }
    },
    methods: {
        switchName() {
            return this.myName.split('').reverse().join('')
        },
        resetName() {
            this.$emit("nameWasReset", 'Ata')
        }
    },
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
