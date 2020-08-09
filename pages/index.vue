<template>
  <div id="wrapper">
    <main id="index">
      <!-- <advantage /> -->
      <service />
      <!-- <calculation /> -->
      <!-- <transmit /> -->
    </main>
    <!-- <a-back-top /> -->
  </div>
</template>

<script>
// import Advantage from '@/components/Advantage.vue'
import Service from '@/components/Service.vue'
// import Calculation from '@/components/Calculation.vue'
import Transmit from '@/components/Transmit.vue'

export default {
  name: 'Home',
  components: {
    // Advantage,
    Service,
    // Calculation,
    Transmit,
  }
}
</script>
