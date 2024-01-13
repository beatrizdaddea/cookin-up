<template>
  <Banner />
  <MainContent />
  <TheFooter />
</template>

<script lang="ts">

import Banner from './components/Banner.vue';
import MainContent from './components/MainContent.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: { Banner, MainContent, TheFooter }
}

</script>

<style scoped>

</style>