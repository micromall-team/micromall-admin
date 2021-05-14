<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'About Pag1',
    }
  },
  setup() {},
})
</script>