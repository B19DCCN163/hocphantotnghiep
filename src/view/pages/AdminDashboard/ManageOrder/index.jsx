import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import { ProductContext } from '../../../../context/ProductContext'
import axios from '../../../../services/axios'
import { formatDate } from '../../../../utils/formatDate'
function ManageOrder() {
    const { products } = useContext(ProductContext)
    const [orders, setOrders] = useState([])
    var orderStatus = ["pending", "shipped", "completed",]


    useEffect(() => {
        axios.get('order/get-all')
            .then(res => {
                setOrders(res.data)
                console.log(res.data)
            })
            .catch(er => {
                console.log("er")
            })
    }, [])

    // var dropdown = document.getElementById("orderDropdown");

    // for (var i = 0; i < dropdown.options.length; i++) {
    //     if (orderStatus[dropdown.options[i].value] === "shipped") {
    //         dropdown.options[i].selected = true;
    //         break; 
    //     }
    // }
    return (
        <div className='dashboard-order'>
            <div className="heading">
                Danh sách đơn hàng
            </div>
            <div className="nav">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search orders by name or keyword...' />
                </div>
                <div className="sort">
                    <DropdownButton id="dropdown-basic-button" title="Sort">
                        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>OrderCode</th>
                            <th>Thumb_url</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 &&
                            orders.map((order, index) => (
                                <tr key={index}>
                                    <td>
                                        {index}
                                    </td>
                                    <td>DH{order.order_id}</td>

                                    <td className='img'>
                                        <img src={order.thumb_url} alt="" />
                                    </td>
                                    <td>
                                        <select id="status" className="dropdown">
                                            {
                                                orderStatus && orderStatus.map((item, index) =>
                                                (
                                                    <option key={index} value={item}>{item}</option>

                                                )
                                                )
                                            }

                                        </select>
                                    </td>
                                    <td>{formatDate(order.date)}</td>
                                    <td>{order.product_name}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.username}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
            <div className="paginate">
                <Pagination>
                    <Pagination.First disabled />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last disabled={true} />
                </Pagination>
            </div>
        </div>
    )
}

export default ManageOrder
