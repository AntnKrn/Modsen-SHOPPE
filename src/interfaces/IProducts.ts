export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  rate: {
    rate: number;
    count: number;
  };
  category: string;
}
