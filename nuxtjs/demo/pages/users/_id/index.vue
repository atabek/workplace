<template>
  <h1>A single user, with ID: {{ $route.params.id}}</h1>
</template>
<script>
export default {
  validate (data) {
    // return data.params.id === 1
    return /^\d+$/.test(data.params.id)
  }
}
</script>