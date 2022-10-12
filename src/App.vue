<template>
  <Navbar />
  <div class="container is-max-desktop py-2">
    <router-view></router-view>
  </div>
</template>
<script setup>
/**
 * import sections
 */
import Navbar from "@/components/Layout/NavBar.vue";
</script>
<style>
@import "bulma/css/bulma.min.css";
</style>