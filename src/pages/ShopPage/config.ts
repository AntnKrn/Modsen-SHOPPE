import { IProduct } from '../../interfaces/IProducts';

export const filterProducts = (
  data: IProduct[],
  searchedText: string,
  sortBy: string,
  filteredByPrice: number[],
) => {
  return data
    .filter((product: IProduct) =>
      product.title.toLowerCase().includes(searchedText),
    )
    .filter(
      (product: IProduct) =>
        product.price > filteredByPrice[0] &&
        product.price < filteredByPrice[1],
    )
    .sort((a: IProduct, b: IProduct) => {
      if (sortBy === 'Ascending') return a.price - b.price;
      if (sortBy === 'Descending') return b.price - a.price;
      if (sortBy === null) return;
    });
};
