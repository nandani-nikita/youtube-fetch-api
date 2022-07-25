import React from 'react';
import Table from 'react-bootstrap/Table';
const TableData = ({ data }) => {
    return (
        <Table striped bordered size="sm" responsive className='tableData'>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user._id}>
                        <td>{user.team_details.team_name}</td>
                        <td>{user.full_name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.city}</td>
                        <td>{user.url}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableData;
