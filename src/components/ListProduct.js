import { Link } from 'react-router-dom'

const ListProduct = (props) => {
    // console.log(props); //{obj}
    return (
        <div>
            <table className="table table-striped table-sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => {
                        return <tr key={index}>
                            <td>{index}</td>
                            <td>{product.name}</td>
                            <td>
                                {props.categories.find((value) => value._id === product.category).name}
                            </td>
                            <td>{product.price}</td>
                            <td><img src={`http://localhost:8888/api/product/photo/${product._id}`} width="50px" height="50px" /></td>
                            <td>{product.status ? "Còn hàng" : "Hết Hàng"}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/admin/product/update/${product._id}`} className="btn btn-outline-primary">Update</Link>
                                <button className="btn btn-outline-danger btn-remove" onClick={() => props.onDelete(product._id)}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}
export default ListProduct;