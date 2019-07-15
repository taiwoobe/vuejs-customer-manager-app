<template>
  <div class="home">
    <login-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/login/login.vue'

export default {
  name: 'home',
  components: {
    LoginComponent
  }
}
</script>
