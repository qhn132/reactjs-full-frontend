import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import ProductAPI from '../../api/productAPI'

const AdminCateUpdatePage = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [product, setProduct] = useState({});
    let { id } = useParams();
    useEffect(() => {
        // call API
        const getProducts = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                setProduct(data)
                reset(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [])
    const onHandleSubmit = (data) => {
        console.log(data)
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("category", data.category);
        uploads.append("price", data.price);
        uploads.append("photo", data.image[0]);
        uploads.append("status", data.status);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        props.onUpdate(id, uploads);
        history.push('/admin/product');
    }

    return (
        <div>
            <h1>Product update</h1>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}

                    <input type="text" className="form-control"
                        name="productName" id="product-name"
                        defaultValue={product.name}
                        {...register('name', { required: true })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Danh mục</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}

                    <select {...register('category', { required: true })} 
                    defaultValue={product.category}
                    className="form-control" name="cateName">
                        <option />
                        {props.categories.map((category) => {
                                return <option value={category._id}>{category.name}</option>
                            })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="product-image" className="form-label">Ảnh sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                    <img src={`http://localhost:8888/api/product/photo/${product._id}`} width={70} height={70} />
                    <input type="file" className="form-control"
                     name="productImage" id="product-photo" 
                     defaultValue={product.image} 
                     {...register('image', { required: true })}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">Giá sản phẩm</label>
                    {errors.name && <span className="text-danger mt-2">This field is required</span>}
                    <input type="number" className="form-control"
                        name="productPrice" id="product-price"
                        defaultValue={product.price}
                        {...register('price', { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product-name" className="form-label">Trạng thái</label><br />
                    <select {...register('status', { required: true })}
                        className="form-control" name="productStatus"
                        defaultValue={product.status} >
                        <option value={0}>Còn hàng</option>
                        <option value={1}>Hết hàng</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="product-description" className="form-label">Miêu tả</label>
                    {errors.desc && <span className="text-danger mt-2">This field is required</span>}
                    <input type="text" className="form-control"
                        name="productDescription" id="product-description"
                        defaultValue={product.description}
                        {...register('description', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <input type="checkbox" {...register('shipping')} /> Shipping
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default AdminCateUpdatePage
