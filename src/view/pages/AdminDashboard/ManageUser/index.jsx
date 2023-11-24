import React, { useContext, useEffect, useState } from 'react'
import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap'
import { ProductContext } from '../../../../context/ProductContext'
import axios from '../../../../services/axios'
function ManageUser() {
    const { products } = useContext(ProductContext)
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('user/get-all')
            .then(res => {
                setUsers(res.data.users)
                console.log(res.data.users)
            })
            .catch(er => {
                console.log("er")
            })
    }, [])
    return (
        <div className='dashboard-order'>
            <div className="heading">
                Thông tin người dùng
            </div>
            <div className="nav">
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search users by name or keyword...' />
                </div>
                <div className="sort">
                    <DropdownButton id="dropdown-basic-button" title="Sort">
                        <Dropdown.Item href="#/action-2">Name</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>username</th>
                            <th>password</th>
                            <th>Role</th>
                            <th>Blocked</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 &&
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>
                                        {user.username}
                                    </td>

                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <select id="status" className="dropdown">
                                            <option value="0">Active</option>
                                            <option value="1">Blocked</option>
                                        </select>
                                    </td>

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

export default ManageUser
