import Product from '../models/product.js';

const pathMongoDao = '../daos/products/products-mongo.dao.js';
const pathFirebaseDao = '../daos/products/products-firebase.dao.js';
// const module = toString(process.env.DAO) === 'firebase' ? await import(pathFirebaseDao) :  await import(pathMongoDao);

 //const module = await import(pathFirebaseDao);
 const module = await import(pathMongoDao);

export const getProducts = ( async (req, res) => {

    // const productDao = new ProductsMongoDao();
    const productDao = new module.default();

    if(req.params.id) {
      const product = await productDao.getProductByID(req.params.id)

      return res.status(200).json(product);
    }

    const products = await productDao.getAllProducts();

    return res.status(200).json(products);
});


export const createProduct = ( async (req, res) => {
  // const id = await getId();
  // const product = new Product(id + 1, req.body.name, req.body.description, req.body.code, req.body.price, req.body.stock, req.body.thumbnails);
  // // const productDao = new ProductsMongoDao();
  // const productDao = new module.default();
  // const savedProduct = await productDao.saveProduct(product);

  // res.status(201).json(savedProduct);

  const product = new Product(0, req.body.name, req.body.description, req.body.code, req.body.price, req.body.stock, req.body.thumbnails);
  const productDao = new module.default();
  console.log(productDao);
  await productDao.saveProduct(product);

  res.status(201).send(`Product saved`);

});


export const updateProduct = ( async (req, res) => {
    const product = new Product(0, req.body.name, req.body.description, req.body.code, req.body.price, req.body.stock, req.body.thumbnails);
    // const productDao = new ProductsMongoDao();
    const productDao = new module.default();
  
    if(req.params.id) {
      await productDao.updateProductById(req.params.id, product);
  
      return res.status(200).send(`Product updated`);
    }
  
    return res.status(400).send(`Bad request`);
  
  });



export const deleteProduct = ( async (req, res) => {
    // const productDao = new ProductsMongoDao();
    const productDao = new module.default();

  if(req.params.id) {
    await productDao.deleteProductById(req.params.id);

    return res.status(200).send(`Product deleted`);
  }

  return res.status(400).send('Bad request');
});


async function getId() {
    // const productDao = new ProductsMongoDao();
    const productDao = new module.default();
    const products = await productDao.getAllProducts() || [];
    const ids = products.map((product) => product.id);

    return ids.length > 0 ? Math.max(...ids) : 0;
}


export default { getProducts, createProduct, updateProduct, deleteProduct };