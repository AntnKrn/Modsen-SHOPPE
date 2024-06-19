export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}
