import React from 'react'

function ProductDetail() {
    return (
        <div className='product-detail'>
            <div className="heading">
                <h3>Thông tin sản phẩm</h3>
            </div>
            <div className="product-info">
                <div className="img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh86uHNZXjgBFGQogwz-pSOAbjtc3C9S8KA&usqp=CAU" alt="" />
                </div>
                <div className="product-desc">
                    <div className="product-name">
                        Đồ gốm rẻ rách pro max vipp
                    </div>
                    <div className="product-rate">
                        <div className="rating">
                            <div className="title">
                                Đánh giá:
                            </div>
                            <div className="value">
                                <span>
                                    4.9
                                </span>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                        </div>
                        <div className="sold">
                            <div className="title">
                                Đã bán:
                            </div>
                            <div className="value">
                                <span>
                                    200
                                </span>
                                <span>
                                    <i class="fa-brands fa-product-hunt"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-stock">
                        <div className="title">
                            Số lượng(Stock):
                        </div>
                        <div className="value">
                            <span>
                                20
                            </span>

                        </div>
                    </div>
                    <div className="product-price">
                        <div className="title">
                            Giá bán:
                        </div>
                        <div className="value">
                            <span>
                                200.000.000 VND
                            </span>

                        </div>
                    </div>
                    <div className="product-add" onClick={() => alert('Mai làm')}>
                        <span>Thêm vào giỏ hàng</span>
                    </div>
                </div>
            </div>
            <div className="product-specs">
                <div className="heading">
                    Thông tin thêm
                </div>
                <div className='info'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis autem, dignissimos alias cum perspiciatis id quae, blanditiis dolorum iste pariatur ad deleniti itaque amet animi, expedita nesciunt fuga accusantium eveniet?

                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab excepturi illum quam in fugit, eius nostrum molestias voluptatem accusantium commodi sed ducimus debitis ipsum dignissimos sint numquam porro, quo eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maiores doloremque veniam, mollitia nisi eius repellat maxime voluptas debitis omnis sint fuga perspiciatis aliquam quas, ea nostrum quisquam beatae sunt.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail
