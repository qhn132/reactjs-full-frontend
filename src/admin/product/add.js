import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth/index';

const AdminProductAddPage = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    console.log(props.categories)
    const { user } = isAuthenticated();
    const onHandleSubmit = (data) => {
        // console.log(data)
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("category", data.category);
        uploads.append("photo", data.image[0]);
        uploads.append("price", data.price);
        uploads.append("status", data.status);
        uploads.append("description", data.description);
        uploads.append("shipping", data.shipping);
        props.onAdd(user._id, uploads, data);
        // console.log(uploads)
        history.push('/admin/product');
    }

    return (
        <div>
            <div>
                <h3>ADD NEW PRODUCT</h3>
                <form onSubmit={handleSubmit(onHandleSubmit)} name="myform">
                    <div className="form-group">
                    <label htmlFor="product-name" className="form-label">Tên sản phẩm</label><br />
                        <input type="text" placeholder="Tên sản phẩm" id="product-name" name="productName"
                            className="form-control"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div id="form-group" style={{ marginBottom: 10 }}>
                        <label htmlFor="product-name" className="form-label">Danh mục</label><br />
                        <select id="product-cate" className="form-control" {...register('category', { required: true })}>
                            <option />
                            {props.categories.map((category) => {
                                return <option value={`${category._id}`}>{category.name}</option>

                            })}
                        </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="product-name" className="form-label">Ảnh</label><br />
                        <input type="file" id="product-photo" className="form-control"
                            name="productPhoto"
                            {...register('image', { required: true })}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="product-name" className="form-label">Giá</label><br />
                        <input type="number" placeholder="Giá sản phẩm" id="product-price"
                            name="productPrice" className="form-control"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="product-name" className="form-label">Trạng thái</label><br />
                        <select id="product-status" className="form-control"
                            {...register('status', { required: true })}
                            name="productStatus"   >
                            <option value={1}>Còn hàng</option>
                            <option value={0}>Hết hàng</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="product-name" className="form-label">Mô tả</label><br />
                        <input type="text" placeholder="Miêu tả" id="product-description"
                            name="productDescription" className="form-control"
                            {...register('description', { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" {...register('shipping')} /> Shipping
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" defaultValue="ADD PRODUCT" />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AdminProductAddPage
