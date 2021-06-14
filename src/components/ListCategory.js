import { Link } from 'react-router-dom'

const ListCategory = (props) => {
    // console.log(props.categories); //{obj}
    return (
        <div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((cate, index) => {
                        return <tr key={index}>
                            <td>{index}</td>
                            <td>{cate.name}</td>
                            <td><img src={`http://localhost:8888/api/category/photo/${cate._id}`} width="50px" height="50px" /></td>
                            <td>
                                <Link to={`/admin/category/update/${cate._id}`} className="btn btn-outline-primary">Update</Link>
                                <button className="btn btn-outline-danger btn-remove" onClick={() => { props.onCateDelete(cate._id) }}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ListCategory;