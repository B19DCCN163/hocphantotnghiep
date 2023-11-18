import React from 'react'
import { Link } from 'react-router-dom'

function CardProduct({ img, name, desc, price }) {
    return (
        <div className='card-prd'>
            <Link to='/product' className='card'>
                <div className="card__img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh86uHNZXjgBFGQogwz-pSOAbjtc3C9S8KA&usqp=CAU" alt="" />
                </div>
                <div className="card__line">
                </div>
                <div className="card__desc">
                    <div className="card__title">
                        <p>
                            Đồ gốm rẻ rách
                        </p>
                    </div>

                    <div className="card__info">
                        <div className="card__price">
                            100.000VND
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

        </div >
    )
}

export default CardProduct


