import type ICategory from '@/interfaces/ICategory';
import type IRecipes from '@/interfaces/IRecipes';


async function obterDadosURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getCategories() {
  return obterDadosURL<ICategory[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/categorias.json');
}

export async function getRecipes() {
  return obterDadosURL<IRecipes[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/07e853b7d0626db51ce2e84bb2f15ca450b7bd7f/receitas.json');
}
