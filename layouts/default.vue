<template>
  <div>
    <nav-bar />
    <main id="index">
      <banner />
    <Nuxt />
    </main>
    <nav-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import NavFooter from '@/components/NavFooter.vue'

export default {
  components: { NavBar, Banner, NavFooter }
}
</script>
