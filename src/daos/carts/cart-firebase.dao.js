import FirebaseContainer from "../../containers/firebase-container.js";

class CartFirebaseDao extends FirebaseContainer {

    async saveCart(cart) {
        await this.save({
            timestamp: cart.timestamp,
            products: cart.products.map(x => {
                return {
                    timestamp: x.timestamp,
                    name: x.name,
                    description: x.description,
                    code: x.code,
                    price: x.price,
                    stock: x.stock,
                    thumbnails: x.thumbnails
                }
            })
        }, 'carts');
    }

    async getAllCarts() {
        return this.getAll('carts');
    }

    async getCartByID(id) {
        return this.getById(id, 'carts');
    }

    async updateCartById(id, cart) {

        await this.update({
            // timestamp: cart.timestamp,
            products: cart.products.map(x => {
                return {
                    // timestamp: x.timestamp,
                    name: x.name,
                    description: x.description,
                    code: x.code,
                    price: x.price,
                    stock: x.stock,
                    thumbnails: x.thumbnails
                }
            })
        }, 'carts', id);


    }

    // async updateCartById(id, cart) {
    //     return this.update({
    //         timestamp: cart.timestamp,
    //         name: cart.name,
    //         description: cart.description,
    //         code:  cart.code,
    //         price: cart.price,
    //         stock:  cart.stock,
    //         thumbnails: cart.thumbnails
    //     }, 'carts', id);

    // }


    async deleteCartById(id) {
        return this.deleteById(id, 'carts');
    }
}

export default CartFirebaseDao;