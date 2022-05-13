import Cart from '../models/cart.js';
const pathMongoDao = '../daos/carts/cart-mongo.dao.js';
const pathFirebaseDao = '../daos/carts/cart-firebase.dao.js';

export const getCartProducts = (async (req, res) => {
  const module = process.env.DAO === 'firebase' ? await import(pathFirebaseDao) : await import(pathMongoDao);
  const cartDao = new module.default();

  // const cartDao = new CartMongoDao();

  if (req.params.id) {
    const cart = await cartDao.getCartByID(req.params.id);

    if (cart) return res.status(200).json(cart);

    return res.status(404).send('Cart not found');
  }

  return res.status(400).send('Bad request');

});


export const createCart = (async (req, res) => {
  const module = process.env.DAO === 'firebase' ? await import(pathFirebaseDao) : await import(pathMongoDao);
  const cartDao = new module.default();

  // const cartDao = new CartMongoDao();

  const cart = new Cart(0, req.body.products);

  const savedCart = await cartDao.saveCart(cart);

  res.status(201).json(savedCart);

});

export const createCartProduct = (async (req, res) => {
  const module = process.env.DAO === 'firebase' ? await import(pathFirebaseDao) : await import(pathMongoDao);
  const cartDao = new module.default();
  // const cartDao = new CartMongoDao();

  const cart = cartDao.getCartByID(req.params.id);

  if (cart) {
    cart.products = req.body.products;
    await cartDao.updateCartById(req.params.id, cart)


    return res.status(201).send('Product added to cart');
  }

  return res.status(404).send('Cart not found');
});


export const deleteCart = (async (req, res) => {
  const module = process.env.DAO === 'firebase' ? await import(pathFirebaseDao) : await import(pathMongoDao);
  const cartDao = new module.default();
  // const cartDao = new CartMongoDao();

  if (req.params.id) {
    await cartDao.deleteCartById(req.params.id);

    return res.status(201).json({ message: 'Cart deleted' });
  }

  return res.status(400).send(`Bad request`);
});

export const deleteProductFromCart = (async (req, res) => {
  const module = process.env.DAO === 'firebase' ? await import(pathFirebaseDao) : await import(pathMongoDao);
  const cartDao = new module.default();
  // const cartDao = new CartMongoDao();
  const carts = await cartDao.getAllCarts() || [];
  const cart = carts.find(x => x.id === req.params.id);

  if (cart) {
    cart.products = cart.products.filter(x => x.id !== req.params.prod_id);
    await cartDao.updateCartById(req.params.id, cart);

    return res.status(200).send('Product deleted from Cart');
  }

  return res.status(404).send('Product not found for delete');
});


export default { getCartProducts, createCart, createCartProduct, deleteCart, deleteProductFromCart };
