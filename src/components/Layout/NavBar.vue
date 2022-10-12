<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <router-link to="/" class="has-text-white">NoteBalls</router-link>
        </div>

        <a
          @click="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="mobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        :class="{ 'is-active': showMobileNav }"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <router-link
            to="/"
            class="navbar-item is-active"
            @click="showMobileNav = false"
            >Notes</router-link
          >
          <router-link
            to="/stats"
            class="navbar-item"
            @click="showMobileNav = false"
            >Stats</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
/**
 * imports
 */
import { ref } from "@vue/reactivity";
import { onClickOutside } from "@vueuse/core";

/**
 * variables
 */
const showMobileNav = ref(false);
const mobileNav = ref(null);
/**
 * use methocs
 */
onClickOutside(mobileNav, () => (showMobileNav.value = false));
</script>
<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>