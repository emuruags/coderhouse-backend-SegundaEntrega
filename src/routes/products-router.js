import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/products-controller.js';

const { Router } = express;
export const routerProducts = Router();


routerProducts.get('/:id?', getProducts);

routerProducts.post('/', createProduct);

routerProducts.put('/:id', updateProduct);

routerProducts.delete('/:id', deleteProduct);

