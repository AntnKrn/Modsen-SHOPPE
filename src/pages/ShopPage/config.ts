import { productType } from '../../types/product';

export const filterProducts = (
  data: productType[],
  searchedText: string,
  sortBy: string,
  filteredByPrice: number[],
) => {
  return data
    .filter((product: productType) =>
      product.title.toLowerCase().includes(searchedText),
    )
    .filter(
      (product: productType) =>
        product.price > filteredByPrice[0] &&
        product.price < filteredByPrice[1],
    )
    .sort((a: productType, b: productType) => {
      if (sortBy === 'Ascending') return a.price - b.price;
      if (sortBy === 'Descending') return b.price - a.price;
      if (sortBy === null) return;
    });
};
