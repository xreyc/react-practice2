import axios from "axios";

class ProductServices {
    async getProducts(sort) {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products',
                {
                    params: {
                        sort: sort
                    }
                }
            );
            if(response.status == 200) {
                return {status: 200, message: "Successful", data: response.data}
            } else {
                return {status: 500, message: "Something went wrong"}
            }
        } catch(err) {
            return {status: 500, message: "Something went wrong"}
        }
    }
}

export default ProductServices;