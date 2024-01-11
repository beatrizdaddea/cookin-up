
<template>
  <article class="categoria">
    <header class="categoria__cabecalho">
      <img src="../assets/images/icones/" alt="" class="categoria__imagem">
    </header>
  </article>
 </template>

<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';

export default {
  props: {
      categoria: { type: Object as PropType<ICategory>, required: true }
  }
}
</script>
