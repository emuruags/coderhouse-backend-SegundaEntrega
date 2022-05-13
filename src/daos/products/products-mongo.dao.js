import MongoContainer from '../../containers/mongoose-container.js';
import mongoose from 'mongoose';

class ProductsMongoDao extends MongoContainer {
    constructor() {
        super();
        this.model = mongoose.models.product || mongoose.model('product', this.getProductSchema());
    }

    async saveProduct(product) {
        await this.save({
            timestamp: product.timestamp,
            name: product.name,
            description: product.description,
            code: product.code,
            price: product.price,
            stock: product.stock,
            thumbnails: product.thumbnails,
            id: product.id
        }, this.model);
    }

    async getAllProducts() {
        return this.getAll(this.model);
    }

    async getProductByID(id) {
        return this.getById(id, this.model);
    }

    async updateProductById(id, product) {
        return this.update({
            timestamp: product.timestamp,
            name: product.name,
            description: product.description,
            code: product.code,
            price: product.price,
            stock: product.stock,
            thumbnails: product.thumbnails
        }, this.model, id);

    }

    async deleteProductById(id) {
        return this.deleteById(id, this.model);
    }

    getProductSchema() {
        const { Schema } = mongoose;
        return new Schema({
            timestamp: {
                type: Date
            },
            name: {
                type: String,
                required: true,
                max: 200
            },
            description: {
                type: String,
                required: true,
                max: 200
            },
            code: {
                type: String,
                required: true,
                max: 100
            },
            thumbnails: {
                type: String,
                max: 1000
            },
            price: {
                type: Number,
                required: true
            },
            stock: {
                type: Number,
                required: true
            }

        })
    }



}

export default ProductsMongoDao;