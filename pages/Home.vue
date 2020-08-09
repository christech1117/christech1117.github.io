<template>
  <div>
    <banner />
    <advantage />
    <service />
    <!-- <calculation /> -->
    <transmit />
    <!-- <a-back-top /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import Advantage from '@/components/Advantage.vue'
import Service from '@/components/Service.vue'
// import Calculation from '@/components/Calculation.vue'
import Transmit from '@/components/Transmit.vue'
// import NavFooter from '@/components/NavFooter.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Banner,
    Advantage,
    Service,
    // Calculation,
    Transmit
    // NavFooter
  }
}
</script>
