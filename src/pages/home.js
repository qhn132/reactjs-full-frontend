const Homepage = (props) => {
    // console.log(props.products)
    return (
        <div className="container">
            <section className="hero pb-3 bg-cover bg-center d-flex align-items-center" style={{ background: 'url(img/hero-banner-alt.jpg)' }}>
                <div className="container py-5">
                    <div className="row px-4 px-lg-5">
                        <div className="col-lg-6">
                            <p className="text-muted small text-uppercase mb-2">New Inspiration 2021</p>
                            <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="/#/products">Browse collections</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CATEGORIES SECTION*/}
            <section className="pt-5">
                <header className="text-center">
                    <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
                    <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
                </header>
                <div className="row">
                    {props.categories.map((category, index) => {
                        return <div className="col-md-4 mb-4 mb-md-0" key={index}>
                            <a className="category-item" href={`/category/${category._id}`}>
                                <img className="img-fluid" src={`http://localhost:8888/api/category/photo/${category._id}`} alt />
                                <strong className="category-item-title">{category.name}</strong>
                            </a>
                        </div>
                    })
                    }
                </div>
            </section>
            {/* TRENDING PRODUCTS*/}
            <section className="py-5">
                <header>
                    <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
                    <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
                </header>
                <div className="row">
                    {props.products.map((product, index) => {
                        return <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                            <div className="product text-center">
                                <div className="position-relative mb-3">
                                    <div className="badge text-white badge-info">New</div>
                                    <a className="d-block" href={`/product/${product._id}`}>
                                        <img className="" with={250} height={250} src={`http://localhost:8888/api/product/photo/${product._id}`} alt="..." /></a>
                                    <div className="product-overlay">
                                        <ul className="mb-0 list-inline">
                                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#"><i className="far fa-heart" /></a></li>
                                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                                            <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-toggle="modal"><i className="fas fa-expand" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h6> <a className="reset-anchor" href="/#/product/${product._id}">{product.name}</a></h6>
                                <p className="small text-muted">{product.price}</p>
                            </div>
                        </div>

                    })
                    }
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className="d-inline-block">
                                <div className="media align-items-end">
                                    <svg className="svg-icon svg-icon-big svg-icon-light">
                                        <use xlinkHref="#delivery-time-1"> </use>
                                    </svg>
                                    <div className="media-body text-left ml-3">
                                        <h6 className="text-uppercase mb-1">Free shipping</h6>
                                        <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3 mb-lg-0">
                            <div className="d-inline-block">
                                <div className="media align-items-end">
                                    <svg className="svg-icon svg-icon-big svg-icon-light">
                                        <use xlinkHref="#helpline-24h-1"> </use>
                                    </svg>
                                    <div className="media-body text-left ml-3">
                                        <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                                        <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-inline-block">
                                <div className="media align-items-end">
                                    <svg className="svg-icon svg-icon-big svg-icon-light">
                                        <use xlinkHref="#label-tag-1"> </use>
                                    </svg>
                                    <div className="media-body text-left ml-3">
                                        <h6 className="text-uppercase mb-1">Festival offer</h6>
                                        <p className="text-small mb-0 text-muted">Free shipping worlwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h5 className="text-uppercase">Let's be friends!</h5>
                            <p className="text-small text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="#">
                                <div className="input-group flex-column flex-sm-row mb-3">
                                    <input className="form-control form-control-lg py-3" type="email" placeholder="Enter your email address" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-dark btn-block" id="button-addon2" type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Homepage
