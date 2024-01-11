<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';

export default {
  props: {
      categoria: { type: Object as PropType<ICategory>, required: true }
  }
}
</script>

<template>
   {{ categoria.nome }}
   {{ categoria.imagem }}
 </template>