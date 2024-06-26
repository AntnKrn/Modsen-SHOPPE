export interface IProductInfoProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
}
