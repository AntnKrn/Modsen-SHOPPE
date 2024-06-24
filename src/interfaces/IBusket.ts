export interface IBusket {
  idProduct: number;
  quantity: number;
}

export interface IBusketDeleteItem {
  uuid: string;
  id: number;
}

export interface IBusketProdut {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}
