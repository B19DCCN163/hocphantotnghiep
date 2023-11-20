import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct({ product }) {
    return (
        <div className='card-prd'>
            {product &&
                <Link to={`/product/${product.id}`} className='card'>
                    <div className="card__img">
                        <img src={product.thumb_url} alt="" />
                    </div>
                    <div className="card__line">
                    </div>
                    <div className="card__desc">
                        <div className="card__title">
                            <p>
                                {product.name}
                            </p>
                        </div>

                        <div className="card__info">
                            <div className="card__price">
                                {product.base_price}VND
                            </div>

                            <div className="card__rating">
                                <span className="box-text">
                                    4.9
                                </span>
                                <div className="box-icon">
                                    *
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="card__discount">
                        -30%
                    </span>
                </Link>
            }
        </div >
    )
}

export default CardProduct


