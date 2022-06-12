import * as Yup from 'yup';

export type Product = {
  category: string,
  price: number,
  instructions: string,
  photo: string,
  name: string,
  productId: string,
};

export const ProductSchema = Yup.object().shape({
  name: Yup.string().required(),
  instructions: Yup.string(),
  price: Yup.number().required(),
});
