<template>
  <v-app>
    <LogoBar></LogoBar>
    <v-main>
      <v-container>
        <CarCards></CarCards>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogoBar from './views/LogoBar'
import CarCards from './views/CarCards.vue'
export default {
  name: 'App',
  data: () => ({}),

  components: {
    CarCards,
    LogoBar,
  }
};
</script>
