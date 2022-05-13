import express from 'express';
import { getCartProducts, createCart, createCartProduct, deleteCart, deleteProductFromCart } from '../controllers/cart-controller.js';

const { Router } = express;
export const routerCarts = Router();


routerCarts.get('/:id/products', getCartProducts);

routerCarts.post('/', createCart);

routerCarts.post('/:id/products', createCartProduct);

routerCarts.delete('/:id', deleteCart);

routerCarts.delete('/:id/products/:prod_id', deleteProductFromCart);


