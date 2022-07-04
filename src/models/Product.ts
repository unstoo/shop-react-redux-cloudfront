import * as Yup from 'yup';

export type Product = {
  price: number,
  description: string,
  title: string,
  id: string,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
