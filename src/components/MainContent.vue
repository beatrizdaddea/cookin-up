<template>
  <main class="conteudo-principal">
    <YourList :ingredientes="ingredientes" />

    <KeepAlive>
      <SelectIngredients v-if="content === 'SelectIngredients'" @add-ingredient="addIngredient"
        @remove-ingredient="removeIngredient" @find-recipes="navigate('ShowRecipes')" />
      <ShowRecipes v-else-if="content === 'ShowRecipes'" @editar-receitas="navigate('SelectIngredients')" />
    </KeepAlive>

  </main>
</template>

<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import Tag from './Tag.vue';
import YourList from './YourList.vue';
import ShowRecipes from './ShowRecipes.vue';

type Page = 'SelectIngredients' | 'ShowRecipes';

export default {
  data() {
    return {
      ingredientes: [] as string[],
      content: 'SelectIngredients' as Page,
    };
  },
  components: { SelectIngredients, Tag, YourList, ShowRecipes },
  methods: {
    addIngredient(ingrediente: string) {
      this.ingredientes.push(ingrediente)
    },
    removeIngredient(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
    },
    navigate(page: Page) {
      this.content = page
    }
  }
}
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}



.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>