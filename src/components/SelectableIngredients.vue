<template>
	<div>
		<button class="ingrediente" @click="whenClicked()" :aria-pressed="selected">
			<Tag :texto="ingrediente" :active="selected" />
		</button>
	</div>
</template>

<script lang="ts">
import Tag from './Tag.vue';

export default {
	components: { Tag },
	props: {
		ingrediente: { type: String, required: true },
	},
	data() {
		return {
			selected: false,
		}
	},
	methods: {
		whenClicked() {
			this.selected = !this.selected

			if (this.selected) {
				this.$emit('addIngredient', this.ingrediente)
			} else {
				this.$emit('removeIngredient', this.ingrediente);
			}
		},
	},

	emits: ['addIngredient', 'removeIngredient']
}
</script>

<style scoped>
.ingrediente {
	cursor: pointer;
}
</style>