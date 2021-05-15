<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  setup() {
    let msg:string = '张三真帅' 
    
    return {msg}
  },
})
</script>