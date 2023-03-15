import { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import tableCSS from './css/table.module.css';
 
 const TableOutput = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3200/shop/getData', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }   
        }).then((res) => res.json()).then((json) => {
            setUsers(json);
        })
    }, []);
    //in ra bảng từ json
    //map các item ra bảng
    return (
 
        <table className = {tableCSS.tabledesign}>
            <thead className = {tableCSS.tablehead}>
            <tr>
                <th className = {tableCSS.tablehead}>
                    Email
                </th>
                <th className = {tableCSS.tablehead}>
                    First Name
                </th>
                <th className = {tableCSS.tablehead}>
                    Last Name
                </th>
            </tr>
            </thead>
            <tbody className = {tableCSS.tablebody}>
                <tr>
                    <td className = {tableCSS.tablebody}>
                        {users.map((item) => <p key = {item.email}>{item.email}</p>)}
                    </td>
                    <td className = {tableCSS.tablebody}>
                        {users.map((item) => <p key = {item.first_name}>{item.first_name}</p>)}
                        
                    </td>
                    <td className = {tableCSS.tablebody}>
                        {users.map((item) => <p key = {item.last_name} >{item.last_name}</p>)}
                    </td>
                </tr>
            </tbody>
            
        </table>
    )
    
};

export default TableOutput;