import { useEffect, useState } from "react";
import axios from "axios";
/** Layout */
import MainLayout from "../../layout/MainLayout";
/** Components */
import InputText from "../../components/inputs/InputText";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
/** Services */
import ProductServices from '../../services/product/product_services';

const ProductServicesInstance = new ProductServices();

function ProductScreen() {
    const [productList, setProductList] = useState([]);
    /** Filters/Search */
    const [searchKey, setSearchKey] = useState('');
    const [sort, setSort] = useState('asc');

    /** Initial Load */
    useEffect(() => {
        getProductList();
    }, []);

    /** Get product list */
    const getProductList = async () => {
        const response = await ProductServicesInstance.getProducts(sort);
        if(response.status == 200) {
            setProductList(response.data);
        }
    }

    /** Sort product */
    const sortProductList = async () => {
        setSort(prev => prev == 'asc' ? 'desc' : 'asc');
        getProductList();
    }

    return (
        <MainLayout>
            <div>
                <div className="list-screen-title">Product Management</div>
                <div className="list-screen-actions">
                    <div className="row">
                        <div className="col-6">
                            <InputText placeholder="Search" value={searchKey} onChange={(value) => setSearchKey(value)}/>
                            <ButtonPrimary label="Search" style={{marginLeft: '10px'}} onClick={() => getProductList()}/>
                        </div>
                        <div className="col-6">
                            <div style={{textAlign: 'right'}}>
                                <ButtonPrimary label="Add New"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th onClick={() => sortProductList()} style={{cursor: 'pointer'}}>Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map(item => <tr key={item['id']}>
                                <th>{item['id']}</th>
                                <th><img src={item['image']} height={30}/></th>
                                <td>{item['title']}</td>
                                <td>{item['price']}</td>
                                <td>{item['category']}</td>
                            </tr>)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductScreen;